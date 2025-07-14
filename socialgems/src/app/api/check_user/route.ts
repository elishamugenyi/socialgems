//file to check existing user in table profile
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../lib/db';

//get the polls inserted
/* export async function GET(request: NextRequest) {
    console.log('=== CHECK_USER ROUTE - GETTING TRIVIA STORIES ===');
    
    const client = await db.connect();
    try {
        console.log('🗄️ Connected to database, querying polls...');
        
        const query = `
            SELECT 
                s.id as story_id,
                s.title,
                s.type,
                s.status,
                s.created_at,
                s.updated_at,
                s.admin_feedback,
                s.tags,
                p.id as user_id,
                p.fname,
                p.lname,
                p.email,
                tq.question,
                tq.correct_answer,
                tq.options,
                tq.time_limit
            FROM stories s
            JOIN profile p ON s.user_id = p.id
            JOIN trivia_quizzes tq ON s.id = tq.story_id
            WHERE s.type = 'trivia_quiz'
            ORDER BY s.created_at DESC
        `;
        
        const { rows } = await client.query(query);
        
        console.log('📊 Query results:');
        console.log('- Total trivia stories found:', rows.length);
        
        if (rows.length > 0) {
            rows.forEach((tq, index) => {
                console.log(`\n🗳️ Trivia story ${index + 1}:`);
                console.log('- Story ID:', tq.story_id);
                console.log('- Title:', tq.title);
                console.log('- Status:', tq.status);
                console.log('- User:', tq.fname, tq.lname, `(${tq.email})`);
                console.log('- Created:', tq.created_at);
                console.log('- Question:', tq.question);
                console.log('- Correct answer:', tq.correct_answer);
                console.log('- Options:', tq.options);
                console.log('- Time limit:', tq.time_limit);
            });
        } else {
            console.log('❌ No trivia stories found in database');
        }
        
        return NextResponse.json({ 
            trivia_stories: rows,
            count: rows.length,
            message: rows.length > 0 ? 'Trivia stories retrieved successfully' : 'No trivia stories found'
        }, { status: 200 });
        
    } catch (error) {
        console.error('❌ Database error:', error);
        return NextResponse.json({ 
            error: 'Database error: ' + (error as Error).message,
            trivia_stories: [],
            count: 0
        }, { status: 500 });
    } finally {
        await client.release();
        console.log('🔌 Database connection released');
    }
}*/

//get all submitted picture/comic stories with connected data
/*export async function GET(request: NextRequest) {
    console.log('=== CHECK_USER ROUTE - GETTING STORIES ===');
    
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'picture_comic'; // Default to picture_comic
    
    console.log('📋 Requested story type:', type);
    
    const client = await db.connect();
    try {
        console.log('🗄️ Connected to database, querying stories...');
        
        let query;
        let tableName;
        
        if (type === 'picture_comic') {
            tableName = 'picture_stories';
            query = `
                SELECT 
                    s.id as story_id,
                    s.title,
                    s.type,
                    s.status,
                    s.created_at,
                    s.updated_at,
                    s.admin_feedback,
                    s.tags,
                    p.id as user_id,
                    p.fname,
                    p.lname,
                    p.email,
                    ps.image_urls,
                    ps.content as description
                FROM stories s
                JOIN profile p ON s.user_id = p.id
                JOIN picture_stories ps ON s.id = ps.story_id
                WHERE s.type = 'picture_comic'
                ORDER BY s.created_at DESC
            `;
        } else if (type === 'audio') {
            tableName = 'audio_stories';
            query = `
                SELECT 
                    s.id as story_id,
                    s.title,
                    s.type,
                    s.status,
                    s.created_at,
                    s.updated_at,
                    s.admin_feedback,
                    s.tags,
                    p.id as user_id,
                    p.fname,
                    p.lname,
                    p.email,
                    as.audio_url
                FROM stories s
                JOIN profile p ON s.user_id = p.id
                JOIN audio_stories as ON s.id = as.story_id
                WHERE s.type = 'audio'
                ORDER BY s.created_at DESC
            `;
        } else if (type === 'poll') {
            tableName = 'polls';
            query = `
                SELECT 
                    s.id as story_id,
                    s.title,
                    s.type,
                    s.status,
                    s.created_at,
                    s.updated_at,
                    s.admin_feedback,
                    s.tags,
                    p.id as user_id,
                    p.fname,
                    p.lname,
                    p.email,
                    poll.question,
                    poll.options,
                    poll.multiple_answers
                FROM stories s
                JOIN profile p ON s.user_id = p.id
                JOIN polls poll ON s.id = poll.story_id
                WHERE s.type = 'poll'
                ORDER BY s.created_at DESC
            `;
        } else if (type === 'trivia_quiz') {
            tableName = 'trivia_quizzes';
            query = `
                SELECT 
                    s.id as story_id,
                    s.title,
                    s.type,
                    s.status,
                    s.created_at,
                    s.updated_at,
                    s.admin_feedback,
                    s.tags,
                    p.id as user_id,
                    p.fname,
                    p.lname,
                    p.email,
                    tq.question,
                    tq.correct_answer,
                    tq.options,
                    tq.time_limit
                FROM stories s
                JOIN profile p ON s.user_id = p.id
                JOIN trivia_quizzes tq ON s.id = tq.story_id
                WHERE s.type = 'trivia_quiz'
                ORDER BY s.created_at DESC
            `;
        } else {
            return NextResponse.json({ 
                error: 'Invalid story type. Use "picture_comic", "audio", "poll", or "trivia_quiz"',
                stories: [],
                count: 0
            }, { status: 400 });
        }
        
        const { rows } = await client.query(query);
        
        console.log('📊 Query results:');
        console.log('- Total stories found:', rows.length);
        
        if (rows.length > 0) {
            rows.forEach((story, index) => {
                console.log(`\n📸 Story ${index + 1}:`);
                console.log('- Story ID:', story.story_id);
                console.log('- Title:', story.title);
                console.log('- Status:', story.status);
                console.log('- User:', story.fname, story.lname, `(${story.email})`);
                console.log('- Created:', story.created_at);
                
                if (type === 'picture_comic') {
                    console.log('- Image URLs count:', story.image_urls?.length || 0);
                    if (story.image_urls && story.image_urls.length > 0) {
                        console.log('- Image URLs:', story.image_urls);
                    }
                    console.log('- Description length:', story.description?.length || 0);
                } else if (type === 'audio') {
                    console.log('- Audio URL:', story.audio_url);
                } else if (type === 'poll') {
                    console.log('- Question:', story.question);
                    console.log('- Options:', story.options);
                    console.log('- Multiple answers allowed:', story.multiple_answers);
                } else if (type === 'trivia_quiz') {
                    console.log('- Question:', story.question);
                    console.log('- Correct answer:', story.correct_answer);
                    console.log('- Options:', story.options);
                    console.log('- Time limit:', story.time_limit);
                }
            });
        } else {
            console.log('❌ No stories found in database');
        }
        
        return NextResponse.json({ 
            stories: rows,
            count: rows.length,
            type: type,
            message: rows.length > 0 ? `${type} stories retrieved successfully` : `No ${type} stories found`
        }, { status: 200 });
        
    } catch (error) {
        //console.error('❌ Database error:', error);
        return NextResponse.json({ 
            error: 'Database error: ' + (error as Error).message,
            stories: [],
            count: 0
        }, { status: 500 });
    } finally {
        await client.release();
        //console.log('🔌 Database connection released');
    }
}*/

//get all submitted text stories with connected data
/*export async function GET(request: NextRequest) {
    const client = await db.connect();
    try {
        const { rows } = await client.query(`
            SELECT s.*, p.fname, p.lname, p.email,
                ts.content AS text_content
            FROM stories s
            JOIN profile p ON s.user_id = p.id
            LEFT JOIN text_stories ts ON s.id = ts.story_id
            WHERE s.status = 'draft' OR s.status = 'submitted'
              AND s.type = 'story'
            ORDER BY s.created_at DESC
        `);
        return NextResponse.json({ stories: rows }, { status: 200 });
    } finally {
        await client.release();
    }
}*/

/*
export async function GET(request: NextRequest) {
    const client = await db.connect();
    const { rows } = await client.sql`
    SELECT * FROM profile`;
    return NextResponse.json({ user: rows }, { status: 200 });
}*/

const schemaSQL = `

--Table creation sql code 
-- Base story table
CREATE TABLE IF NOT EXISTS stories (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES profile(id),
    title VARCHAR(255) NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('story', 'picture_comic', 'audio', 'poll', 'trivia_quiz')),
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'approved', 'rejected')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    admin_feedback TEXT,
    tags TEXT[]
);

-- Text story table
CREATE TABLE IF NOT EXISTS text_stories (
    story_id INTEGER PRIMARY KEY REFERENCES stories(id) ON DELETE CASCADE,
    content TEXT NOT NULL
);

-- Picture/comic story table
CREATE TABLE IF NOT EXISTS picture_stories (
    story_id INTEGER PRIMARY KEY REFERENCES stories(id) ON DELETE CASCADE,
    image_urls TEXT[] NOT NULL,
    content TEXT
);

-- Audio story table
CREATE TABLE IF NOT EXISTS audio_stories (
    story_id INTEGER PRIMARY KEY REFERENCES stories(id) ON DELETE CASCADE,
    audio_url TEXT
);

-- Poll table
CREATE TABLE IF NOT EXISTS polls (
    story_id INTEGER PRIMARY KEY REFERENCES stories(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    options JSONB NOT NULL,
    multiple_answers BOOLEAN DEFAULT false
);

-- Trivia quiz table
CREATE TABLE IF NOT EXISTS trivia_quizzes (
    story_id INTEGER PRIMARY KEY REFERENCES stories(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    correct_answer TEXT NOT NULL,
    options TEXT[] NOT NULL,
    time_limit INTEGER
);


--poll votes table
CREATE TABLE IF NOT EXISTS poll_votes (
    id SERIAL PRIMARY KEY,
    poll_id INTEGER NOT NULL REFERENCES polls(story_id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES profile(id),
    vote_option TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

--trivia quiz answers table
CREATE TABLE IF NOT EXISTS trivia_quiz_answers (
    id SERIAL PRIMARY KEY,
    trivia_quiz_id INTEGER NOT NULL REFERENCES trivia_quizzes(story_id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES profile(id),
    answer TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Story views table
CREATE TABLE IF NOT EXISTS story_views (
    id SERIAL PRIMARY KEY,
    story_id INTEGER NOT NULL REFERENCES stories(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES profile(id), -- NULL for anonymous views
    ip_address VARCHAR(45), -- For anonymous tracking
    user_agent TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(story_id, user_id, ip_address)
);

-- Story likes table
CREATE TABLE IF NOT EXISTS story_likes (
    id SERIAL PRIMARY KEY,
    story_id INTEGER NOT NULL REFERENCES stories(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES profile(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(story_id, user_id)
);

-- Story saves table
CREATE TABLE IF NOT EXISTS story_saves (
    id SERIAL PRIMARY KEY,
    story_id INTEGER NOT NULL REFERENCES stories(id) ON DELETE CASCADE,
    user_id INTEGER NOT NULL REFERENCES profile(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(story_id, user_id)
);

-- Story shares table
CREATE TABLE IF NOT EXISTS story_shares (
    id SERIAL PRIMARY KEY,
    story_id INTEGER NOT NULL REFERENCES stories(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES profile(id), -- NULL for anonymous shares
    platform VARCHAR(50) NOT NULL, -- 'facebook', 'twitter', 'linkedin', 'whatsapp', 'email', 'copy_link'
    ip_address VARCHAR(45), -- For anonymous tracking
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

// --- Password Reset Table Creation ---
CREATE TABLE IF NOT EXISTS password_resets (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    otp VARCHAR(10) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
`;

export async function POST(request: NextRequest) {
    const client = await db.connect();
    try {
        await client.query(schemaSQL);
        return NextResponse.json({ message: 'Tables created successfully.' }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    } finally {
        client.release();
    }
}
//add api call to password reset table, i want to see the otp stored their now
/*export async function GET(request: NextRequest) {
    const client = await db.connect();
    const { rows } = await client.query(`SELECT * FROM password_resets`);
    return NextResponse.json({ otp: rows }, { status: 200 });
}*/



