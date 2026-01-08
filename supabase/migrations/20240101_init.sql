CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('student', 'instructor')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE essays (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    content TEXT NOT NULL,
    score INT,
    feedback TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE POLICY select_user_essays ON essays
    FOR SELECT
    USING (user_id = current_user_id());

CREATE POLICY insert_essay ON essays
    FOR INSERT
    WITH CHECK (user_id = current_user_id());

CREATE VIEW student_essays AS
    SELECT essays.id, essays.content, essays.score, essays.feedback, users.email
    FROM essays
    JOIN users ON essays.user_id = users.id
    WHERE users.role = 'student';
