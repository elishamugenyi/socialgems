// Event reservation system for social gems site
import { NextRequest, NextResponse } from 'next/server';
import {db} from '../../lib/db';

// Create event_reservations table if it doesn't exist
const createReservationsTable = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS event_reservations (
        id SERIAL PRIMARY KEY,
        event_id INTEGER NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20) NOT NULL,
        group_size INTEGER NOT NULL,
        special_requests TEXT,
        reservation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
      )
    `);

    // Create index for better query performance
    await db.query(`
      CREATE INDEX IF NOT EXISTS idx_event_reservations_event_id 
      ON event_reservations(event_id)
    `);

    await db.query(`
      CREATE INDEX IF NOT EXISTS idx_event_reservations_email 
      ON event_reservations(email)
    `);
  } catch (error) {
    console.error('Error creating reservations table:', error);
  }
};

// Initialize table on first import
createReservationsTable();

// POST - Create new reservation
export async function POST(request: NextRequest) {
  try {
    const { 
      event_id, 
      full_name, 
      email, 
      phone_number, 
      group_size, 
      special_requests 
    } = await request.json();

    // Validate required fields
    if (!event_id || !full_name || !email || !phone_number || !group_size) {
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields: event_id, full_name, email, phone_number, group_size' 
      }, { status: 400 });
    }

    // Validate group size
    if (group_size < 1 || group_size > 100) {
      return NextResponse.json({ 
        success: false, 
        error: 'Group size must be between 1 and 100' 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid email format' 
      }, { status: 400 });
    }

    // Check if event exists
    const eventCheck = await db.query('SELECT id FROM events WHERE id = $1', [event_id]);
    if (eventCheck.rows.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Event not found' 
      }, { status: 404 });
    }

    // Check if user already has a reservation for this event
    const existingReservation = await db.query(
      'SELECT id FROM event_reservations WHERE event_id = $1 AND email = $2',
      [event_id, email]
    );

    if (existingReservation.rows.length > 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'You already have a reservation for this event' 
      }, { status: 409 });
    }

    // Insert reservation into database
    const result = await db.query(
      `INSERT INTO event_reservations 
       (event_id, full_name, email, phone_number, group_size, special_requests) 
       VALUES ($1, $2, $3, $4, $5, $6) 
       RETURNING *`,
      [event_id, full_name, email, phone_number, group_size, special_requests || '']
    );

    return NextResponse.json({ 
      success: true, 
      message: 'Reservation created successfully',
      reservation: result.rows[0]
    });
  } catch (error) {
    console.error('Error creating reservation:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to create reservation' 
    }, { status: 500 });
  }
}

// GET - Retrieve reservations
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const event_id = searchParams.get('event_id');
    const email = searchParams.get('email');

    if (id) {
      // Get specific reservation
      const result = await db.query(`
        SELECT r.*, e.title as event_title, e.event_date, e.host, e.location 
        FROM event_reservations r 
        JOIN events e ON r.event_id = e.id 
        WHERE r.id = $1
      `, [id]);
      
      if (result.rows.length === 0) {
        return NextResponse.json({ 
          success: false, 
          error: 'Reservation not found' 
        }, { status: 404 });
      }
      
      return NextResponse.json({ 
        success: true, 
        reservation: result.rows[0] 
      });
    } else if (event_id) {
      // Get all reservations for a specific event
      const result = await db.query(`
        SELECT r.*, e.title as event_title, e.event_date, e.host, e.location 
        FROM event_reservations r 
        JOIN events e ON r.event_id = e.id 
        WHERE r.event_id = $1 
        ORDER BY r.created_at DESC
      `, [event_id]);
      
      return NextResponse.json({ 
        success: true, 
        reservations: result.rows 
      });
    } else if (email) {
      // Get all reservations for a specific user
      const result = await db.query(`
        SELECT r.*, e.title as event_title, e.event_date, e.host, e.location 
        FROM event_reservations r 
        JOIN events e ON r.event_id = e.id 
        WHERE r.email = $1 
        ORDER BY r.created_at DESC
      `, [email]);
      
      return NextResponse.json({ 
        success: true, 
        reservations: result.rows 
      });
    } else {
      // Get all reservations (admin view)
      const result = await db.query(`
        SELECT r.*, e.title as event_title, e.event_date, e.host, e.location 
        FROM event_reservations r 
        JOIN events e ON r.event_id = e.id 
        ORDER BY r.created_at DESC
      `);
      
      return NextResponse.json({ 
        success: true, 
        reservations: result.rows 
      });
    }
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to fetch reservations' 
    }, { status: 500 });
  }
}

// PUT - Update reservation
export async function PUT(request: NextRequest) {
  try {
    const { 
      id, 
      full_name, 
      email, 
      phone_number, 
      group_size, 
      special_requests,
      status 
    } = await request.json();

    if (!id) {
      return NextResponse.json({ 
        success: false, 
        error: 'Reservation ID is required' 
      }, { status: 400 });
    }

    // Validate group size if provided
    if (group_size !== undefined && (group_size < 1 || group_size > 100)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Group size must be between 1 and 100' 
      }, { status: 400 });
    }

    // Validate email format if provided
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json({ 
          success: false, 
          error: 'Invalid email format' 
        }, { status: 400 });
      }
    }

    // Check if reservation exists
    const existingReservation = await db.query('SELECT * FROM event_reservations WHERE id = $1', [id]);
    if (existingReservation.rows.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Reservation not found' 
      }, { status: 404 });
    }

    // Build update query dynamically
    const updateFields = [];
    const updateValues = [];
    let paramCount = 1;

    if (full_name !== undefined) {
      updateFields.push(`full_name = $${paramCount++}`);
      updateValues.push(full_name);
    }
    if (email !== undefined) {
      updateFields.push(`email = $${paramCount++}`);
      updateValues.push(email);
    }
    if (phone_number !== undefined) {
      updateFields.push(`phone_number = $${paramCount++}`);
      updateValues.push(phone_number);
    }
    if (group_size !== undefined) {
      updateFields.push(`group_size = $${paramCount++}`);
      updateValues.push(group_size);
    }
    if (special_requests !== undefined) {
      updateFields.push(`special_requests = $${paramCount++}`);
      updateValues.push(special_requests);
    }
    if (status !== undefined) {
      updateFields.push(`status = $${paramCount++}`);
      updateValues.push(status);
    }

    if (updateFields.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'No fields to update' 
      }, { status: 400 });
    }

    // Add updated_at and id to values
    updateFields.push(`updated_at = CURRENT_TIMESTAMP`);
    updateValues.push(id);

    const updateQuery = `
      UPDATE event_reservations 
      SET ${updateFields.join(', ')} 
      WHERE id = $${paramCount} 
      RETURNING *
    `;

    const result = await db.query(updateQuery, updateValues);

    return NextResponse.json({ 
      success: true, 
      message: 'Reservation updated successfully',
      reservation: result.rows[0]
    });
  } catch (error) {
    console.error('Error updating reservation:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update reservation' 
    }, { status: 500 });
  }
}

// DELETE - Delete reservation
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json({ 
        success: false, 
        error: 'Reservation ID is required' 
      }, { status: 400 });
    }

    const result = await db.query('DELETE FROM event_reservations WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json({ 
        success: false, 
        error: 'Reservation not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Reservation deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting reservation:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to delete reservation' 
    }, { status: 500 });
  }
}
