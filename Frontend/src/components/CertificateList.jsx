import React, { useState } from 'react';
import axios from 'axios';
//import "./Style.css";
import { useTranslation } from 'react-i18next';

const CertificateList = () => {
    const [certificates, setCertificates] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState('');
    const { t } = useTranslation(); 
    const fetchCertificates = async (career) => {
        try {
            const response = await axios.get(`http://localhost:5001/certificates/${career}`);
            setCertificates(response.data);
        } catch (error) {
            console.error('Error al obtener los certificados', error);
        }
    };

    const onCareerChange = (e) => {
        const career = e.target.value;
        setSelectedCareer(career);
        fetchCertificates(career);
    };

    return (
        <div className="container">
            <h2>{t("list")}</h2>
            <select onChange={onCareerChange} className="form-control">
                <option value="">{t("career")}</option>
                <option value="1">{t("informatica")}</option>
                <option value="2">{t("industrial")}</option>
                <option value="3">{t("mineria")}</option>
                <option value="4">{t("derecho")}</option>
                <option value="5">{t("periodismo")}</option>
                <option value="6">{t("psicologia")}</option>
            </select>
            <ul>
                {certificates.map((cert) => (
                    <li key={cert.id}>{cert.filename} - Carrera {selectedCareer}</li>
                ))}
            </ul>
        </div>
    );
};

export default CertificateList;
