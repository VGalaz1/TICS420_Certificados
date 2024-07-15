import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

const FormularioComunicacion = () => {
  const [formData, setFormData] = useState({
    message: '',
    fecha: '',
    description: '',
    career: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/guardar', formData);
      console.log(response.data);
      alert('Datos enviados y guardados exitosamente.');
    } catch (error) {
      console.error('Error al enviar los datos', error);
      alert('Hubo un error al enviar los datos.');
    }
  };
  const { t } = useTranslation();


  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body "> <h2 className="card-title text-center">{t("form")}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">{t("asunto")}</label>
              <input type="text" className="form-control" name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">{t("date")}</label>
              <input type="date" className="form-control" name="fecha" value={formData.fecha} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">{t("description")}</label>
              <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">{t("career1")}</label>
              <input type="text" className="form-control" name="career1" value={formData.career} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">{t("send")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioComunicacion;
