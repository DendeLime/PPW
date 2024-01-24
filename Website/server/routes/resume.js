const express = require('express')
const router = express.Router()
const pool = require('../db/data')

router.get('/', async (req, res) => {
    try {
        const works = await pool.query("SELECT * FROM classworks")
        res.json(works.rows)        
    } catch(err) {
        console.error(err.message)
    }
    
})

module.exports = router