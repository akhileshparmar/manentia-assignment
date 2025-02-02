const mongoose = require('mongoose');

const dicomMetadataSchema = new mongoose.Schema({
    patientName: { type: String },
    patientID: { type: String },
    birthdate: { type: Date },
    studyID: { type: String },
    studyDescription: { type: String },
    studyDate: { type: Date },
    modality: { type: String },
});

const DICOMMetadata = mongoose.model('DICOMMetadata', dicomMetadataSchema);

module.exports = DICOMMetadata;