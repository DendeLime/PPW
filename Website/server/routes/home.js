const express = require('express')
const router = express.Router()
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { GetObjectCommand } = require("@aws-sdk/client-s3");

require('dotenv').config()
const s3 = require('../s3.js')

const input = { 
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: 'MainBackground.webp'
};
const input2 = { 
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: 'Profile.webp'
};
const getBackground = new GetObjectCommand(input);
const getProfile = new GetObjectCommand(input2)

router
.route('/')
.get(async (req, res) =>{

    //const response = await client.send(command)
    const background = await getSignedUrl(s3.client, getBackground, {expiresIn: 60})
    const profile = await getSignedUrl(s3.client, getProfile, {expiresIn: 60})
    res.json({background, profile})
    res.end()



})


module.exports = router