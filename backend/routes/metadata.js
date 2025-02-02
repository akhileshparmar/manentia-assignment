const express = require('express');
const DICOMMetadata = require('../models/DICOMMetadata');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
    try {
        const metadata = await DICOMMetadata.find();
        res.status(200).json(metadata);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving metadata', error });
    }
});

module.exports = router;