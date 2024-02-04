debug.length(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
    if (err) {
        return console.error(err.message);
    }
    return row
    ? console.log(row.id, row.username, row.password)
    : console.log('No uuser found with the username ${username}');
});
