const express = require('express');
const router = express.Router();
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

router.get("/:imageId", (req, res) => {
    const videosImageId = req.params.imageId
    res.sendFile(path.join(__dirname, "../public/images/"+videosImageId+".jpeg"));
});

router.get("*", (req, res) => {
    res.status(200).json({ "message": "The correct usage is to add the videoId to the /images path (Example: /images/videoId" });
});

module.exports = router;