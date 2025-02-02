const express = require('express');
const multer = require('multer');
const DICOMMetadata = require('../models/DICOMMetadata');
const { parseDICOM } = require('../utils/dicomParser');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', authMiddleware, upload.single('dicomFile'), async (req, res) => {
    try {
        const dicomFile = req.file;

        if (!dicomFile) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const metadata = parseDICOM(dicomFile.buffer);

        const dicomMetadata = new DICOMMetadata(metadata);
        await dicomMetadata.save();

        res.status(201).json({ message: 'DICOM file uploaded', metadata });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading DICOM file', error });
    }
});


module.exports = router;