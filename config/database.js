const { createPool } = require('mysql');

const pool = createPool({
    port: 3306,
    host: localhost,
    username: "root",
    password: "ganesh",
    database: "test",
    connectionLimit: 10
})