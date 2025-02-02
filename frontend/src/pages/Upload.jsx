import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('dicomFile', file);

        try {
            const token = localStorage.getItem('token');

            await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
            alert('File uploaded successfully!');
        } catch (error) {
            alert('File upload failed.');
        }
    };

    return (
        <div>
            <h2>Upload DICOM File</h2>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} required />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default Upload;