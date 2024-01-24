const express = require('express')
require('dotenv').config()
const { S3Client } = require("@aws-sdk/client-s3");

const client = new S3Client({
    region: process.env.AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
})

module.exports = {
    client: client
}