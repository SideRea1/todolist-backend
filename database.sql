create TABLE todo(
    id SERIAL PRIMARY KEY,
    task VARCHAR(255),
    isDone BOOLEAN NOT NULL
);
