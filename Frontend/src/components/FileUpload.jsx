import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

export const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const { t } = useTranslation();

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onFileUpload = async () => {
        if (!file) {
            setMessage('Por favor seleccione un archivo primero');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5001/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('Archivo subido exitosamente');
        } catch (error) {
            setMessage('Archivo subido exitosamente');
        }
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{t("file")}</h2>
                    <div className="mb-3">
                        <label className="form-label">{t("select")}</label>
                        <input type="file" className="form-control" accept=".pdf" onChange={onFileChange} />
                    </div>
                    <button className="btn btn-primary" onClick={onFileUpload}>Subir</button>
                    {message && <div className="alert alert-info mt-3">{message}</div>}
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
