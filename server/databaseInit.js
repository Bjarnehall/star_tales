const sqlite3 = require('sqlite3').verbose();

// open a database handle
let db = new sqlite3.Database('./star_tales.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the star_tales database.');
});

db.serialize(() => {
    // queries scheduled here will be serialized.
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`, (err) => {
        if (err) {
            console.log('Table already exists.');
        } else {
            console.log('Table created.');
        }
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});