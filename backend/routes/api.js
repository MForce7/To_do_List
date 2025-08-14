const express = require('express');
const pool = require('../helper/database');
const router = express.Router();

router.get("/data", async (req, res) => {
    try {
        const sqlQuery = 'SELECT * FROM user';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;