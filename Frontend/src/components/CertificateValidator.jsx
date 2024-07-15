import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import validateCertificate from './validateCertificate';

function CertificateValidator() {
    const [file, setFile] = useState(null);
    const [validationResult, setValidationResult] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleValidate = async () => {
        if (file) {
            const result = await validateCertificate(file);
            setValidationResult(result.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Validador de Certificado</h5>
                    <div className="mb-3">
                        <label className="form-label">Seleccionar Certificado:</label>
                        <input type="file" className="form-control" onChange={handleFileChange} />
                    </div>
                    <button className="btn btn-primary" onClick={handleValidate}>Validar Certificado</button>
                    {validationResult && <p className="mt-3">{validationResult}</p>}
                    
                </div>
            </div>
        </div>
    );
}

export default CertificateValidator;
