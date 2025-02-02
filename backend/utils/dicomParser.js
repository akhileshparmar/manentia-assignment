const dicomParser = require('dicom-parser');

const parseDICOM = (buffer) => {
    const dataSet = dicomParser.parseDicom(buffer);

    const patientName = dataSet.string('x00100010');
    const patientID = dataSet.string('x00100020');
    const birthdate = dataSet.string('x00100030');
    const studyID = dataSet.string('x0020000D');
    const studyDescription = dataSet.string('x00081030');
    const modality = dataSet.string('x00080060');
    const studyDateString = dataSet.string('x00080020'); 
    const studyDate = studyDateString ? new Date(`${studyDateString.slice(0, 4)}-${studyDateString.slice(4, 6)}-${studyDateString.slice(6, 8)}`) : null;

    return {
        patientName,
        patientID,
        birthdate,
        studyID,
        studyDescription,
        studyDate,
        modality
    };
};

module.exports = { parseDICOM };