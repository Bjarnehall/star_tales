const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./star_tales.db');

const username = 'newUser';
const password = 'userPassword';

db.run(`INSERT INTO users(username, password) VALUES(?, ?)`, [username, password], function(err) {
    if (err) {
        return console.log(err.message);
    }
    // Correctly use template literals for string interpolation
    console.log(`A row has been inserted with rowid ${this.lastID}`);
});


db.close();