const { GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const express = require('express')
const router = express.Router()

require('dotenv').config()
const s3 = require('../s3.js')

const input = { 
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: 'Waterfall.webp'
};

const getWaterfall = new GetObjectCommand(input)

router.route('/')
.get(async (req, res) => {
    const waterfall = await getSignedUrl(s3.client, getWaterfall, {expiresIn: 60})
    res.json({waterfall})
    res.end

})

module.exports = router