const express = require('express')
const router = express.Router()
const pool = require('../db/data')
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { GetObjectCommand } = require("@aws-sdk/client-s3");

require('dotenv').config()
const s3 = require('../s3.js')


router.get('/', async(req, res) => {
  try {
    const allProjects = await pool.query("SELECT * FROM projects");
    const data = allProjects.rows
    for (i = 0; i < data.length; i++) {
      const input = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: data[i]["image-key"]
      };

      const getImage = new GetObjectCommand(input);
      const getURL = await getSignedUrl(s3.client, getImage, {expiresIn: 100})
      data[i]['image-key'] = getURL
    }

    res.json(data)

  } catch (err) {
    console.error(err.message);
  }

})

  
module.exports = router