//this creates event on social gems site.
import { NextRequest, NextResponse } from 'next/server';
import {db} from '../../lib/db';
import { getPublicSupabase } from '@/app/lib/supabase';

// Create events table if it doesn't exist
const createEventsTable = async () => {
  try {
    // First, check if the table exists
    const tableExists = await db.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'events'
      );
    `);

    if (!tableExists.rows[0].exists) {
      // Create the table if it doesn't exist
      await db.query(`
        CREATE TABLE events (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          event_date DATE NOT NULL,
          event_time TIME NOT NULL,
          host VARCHAR(255) NOT NULL,
          location VARCHAR(500) NOT NULL,
          description TEXT,
          image_url VARCHAR(500),
          recurring VARCHAR(20) DEFAULT 'none',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
    } else {
      // Table exists, check if we need to add new columns
      const columnsCheck = await db.query(`
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'events' 
        AND column_name IN ('event_time', 'recurring')
      `);
      
      const existingColumns = columnsCheck.rows.map(row => row.column_name);
      
      // Add event_time column if it doesn't exist
      if (!existingColumns.includes('event_time')) {
        await db.query(`
          ALTER TABLE events 
          ADD COLUMN event_time TIME NOT NULL DEFAULT '12:00:00'
        `);
      }
      
      // Add recurring column if it doesn't exist
      if (!existingColumns.includes('recurring')) {
        await db.query(`
          ALTER TABLE events 
          ADD COLUMN recurring VARCHAR(20) DEFAULT 'none'
        `);
      }
    }
  } catch (error) {
    console.error('Error creating/updating events table:', error);
  }
};

// Initialize table on first import
createEventsTable();

// Helper function to upload image to Supabase storage
const uploadImageToSupabase = async (image: File, supabase: any) => {
  try {
    // Validate image size
    if (image.size > 10 * 1024 * 1024) {
      throw new Error('Image size exceeds 10MB limit');
    }

    // Generate unique file path
    const fileExt = image.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `picture-attachments/${fileName}`;

    // Upload image to Supabase storage
    const { data, error } = await supabase.storage
      .from('picture-attachments')
      .upload(filePath, image, { contentType: image.type });

    if (error) {
      throw new Error(`Failed to upload image: ${error.message}`);
    }

    // Get public URL for the uploaded image
    const { data: urlData } = supabase.storage
      .from('picture-attachments')
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

// POST - Create new event
export async function POST(request: NextRequest) {
  try {
    const supabase = getPublicSupabase();
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const event_date = formData.get('event_date') as string;
    const event_time = formData.get('event_time') as string;
    const host = formData.get('host') as string;
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;
    const image = formData.get('image') as File | null;
    const recurring = formData.get('recurring') as string;
    // Validate required fields
    if (!title || !event_date || !event_time || !host || !location) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields: title, event_date, event_time, host, location' 
      }, { status: 400 });
    }

    let image_url = '';

    // Handle image upload if present
    if (image && image.size > 0) {
      try {
        image_url = await uploadImageToSupabase(image, supabase);
      } catch (error) {
        return NextResponse.json({ 
          success: false, 
          error: error instanceof Error ? error.message : 'Failed to upload image' 
        }, { status: 400 });
      }
    }

    // Insert event into database
    const result = await db.query(
      'INSERT INTO events (title, event_date, event_time, host, location, description, image_url, recurring) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [title, event_date, event_time, host, location, description || '', image_url, recurring || 'none']
    );

    return NextResponse.json({ 
      success: true, 
      message: 'Event created successfully',
      event: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create event' 
    }, { status: 500 });
  }
}

// GET - Retrieve all events or specific event
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Get specific event
      const result = await db.query('SELECT * FROM events WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        return NextResponse.json({ 
          success: false, 
          error: 'Event not found' 
        }, { status: 404 });
      }
      return NextResponse.json({ 
        success: true, 
        event: result.rows[0] 
      });
    } else {
      // Get all events
      const result = await db.query('SELECT * FROM events ORDER BY event_date DESC');
      return NextResponse.json({ 
        success: true, 
        events: result.rows 
      });
    }
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch events' 
    }, { status: 500 });
  }
}

// PUT - Update event
export async function PUT(request: NextRequest) {
  try {
    const supabase = getPublicSupabase();
    const formData = await request.formData();
    
    const id = formData.get('id') as string;
    const title = formData.get('title') as string;
    const event_date = formData.get('event_date') as string;
    const event_time = formData.get('event_time') as string;
    const host = formData.get('host') as string;
    const location = formData.get('location') as string;
    const description = formData.get('description') as string;
    const recurring = formData.get('recurring') as string;
    const image = formData.get('image') as File | null;
    const current_image_url = formData.get('current_image_url') as string;
    const delete_image = formData.get('delete_image') as string;

    if (!id) {
      return NextResponse.json({ 
        success: false, 
        error: 'Event ID is required' 
      }, { status: 400 });
    }

    let image_url = current_image_url;

    // Handle image operations
    if (delete_image === 'true' && current_image_url) {
      // Delete existing image from Supabase storage
      try {
        const urlParts = current_image_url.split('/');
        const fileName = urlParts[urlParts.length - 1];
        const filePath = `picture-attachments/${fileName}`;
        
        await supabase.storage
          .from('picture-attachments')
          .remove([filePath]);
        
        image_url = '';
      } catch (error) {
        console.error('Error deleting existing image:', error);
        // Continue with update even if image deletion fails
      }
    } else if (image && image.size > 0) {
      // Upload new image
      try {
        // Delete old image if it exists
        if (current_image_url) {
          const urlParts = current_image_url.split('/');
          const fileName = urlParts[urlParts.length - 1];
          const filePath = `picture-attachments/${fileName}`;
          
          await supabase.storage
            .from('picture-attachments')
            .remove([filePath]);
        }

        // Upload new image
        image_url = await uploadImageToSupabase(image, supabase);
      } catch (error) {
        return NextResponse.json({ 
          success: false, 
          error: error instanceof Error ? error.message : 'Failed to upload new image' 
        }, { status: 400 });
      }
    }

    // Update event in database
    const result = await db.query(
      'UPDATE events SET title = $1, event_date = $2, event_time = $3, host = $4, location = $5, description = $6, image_url = $7, recurring = $8, updated_at = CURRENT_TIMESTAMP WHERE id = $9 RETURNING *',
      [title, event_date, event_time, host, location, description || '', image_url, recurring || 'none', id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Event not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Event updated successfully',
      event: result.rows[0]
    });
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update event' 
    }, { status: 500 });
  }
}

// DELETE - Delete event
export async function DELETE(request: NextRequest) {
  try {
    const { id, image_url } = await request.json();
    
    if (!id) {
      return NextResponse.json({ 
        success: false, 
        error: 'Event ID is required' 
      }, { status: 400 });
    }

    // Delete associated image from Supabase storage if it exists
    if (image_url) {
      try {
        const supabase = getPublicSupabase();
        const urlParts = image_url.split('/');
        const fileName = urlParts[urlParts.length - 1];
        const filePath = `picture-attachments/${fileName}`;
        
        await supabase.storage
          .from('picture-attachments')
          .remove([filePath]);
      } catch (error) {
        console.error('Error deleting image:', error);
        // Continue with event deletion even if image deletion fails
      }
    }

    // Delete event from database
    const result = await db.query('DELETE FROM events WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Event not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Event deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to delete event' 
    }, { status: 500 });
  }
}