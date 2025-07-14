-- Base story table
CREATE TABLE stories (
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
CREATE TABLE text_stories (
    story_id INTEGER PRIMARY KEY REFERENCES stories(id) ON DELETE CASCADE,
    content TEXT NOT NULL
);

-- Picture/comic story table
CREATE TABLE picture_stories (
    story_id INTEGER PRIMARY KEY REFERENCES stories(id) ON DELETE CASCADE,
    image_urls TEXT[] NOT NULL,
    content TEXT
);

-- Audio story table
CREATE TABLE audio_stories (
    story_id INTEGER PRIMARY KEY REFERENCES stories(id) ON DELETE CASCADE,
    audio_url TEXT
);

-- Poll table
CREATE TABLE polls (
    story_id INTEGER PRIMARY KEY REFERENCES stories(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    options JSONB NOT NULL, -- Format: [{"text": "Option 1", "votes": 0}, ...]
    multiple_answers BOOLEAN DEFAULT false
);

-- Trivia quiz table
CREATE TABLE trivia_quizzes (
    story_id INTEGER PRIMARY KEY REFERENCES stories(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    correct_answer TEXT NOT NULL,
    options TEXT[] NOT NULL,
    time_limit INTEGER -- in seconds
);