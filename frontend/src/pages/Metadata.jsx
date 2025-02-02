import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Metadata = () => {
    const [metadata, setMetadata] = useState([]);

    const fetchMetadata = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/metadata', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setMetadata(response.data);
        } catch (error) {
            alert('Failed to fetch metadata.');
        }
    };

    useEffect(() => {
        fetchMetadata();
    }, []);

    return (
        <div>
            <h2>DICOM Metadata</h2>
            <ul>
                {metadata.map((item) => (
                    <li key={item._id}>patientID - {item.patientID}</li>
                ))}
            </ul>
        </div>
    );
};

export default Metadata;