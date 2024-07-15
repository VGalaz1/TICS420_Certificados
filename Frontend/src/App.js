import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Login } from './components/Login';
import { FileUpload } from './components/FileUpload';
import CertificateList from './components/CertificateList';
import { TableUsage } from './components/Dashboard';
import CertificateValidator from './components/CertificateValidator';
import FormularioComunicacion from './components/Form';
import First from './components/pages/First';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useTranslation } from 'react-i18next';

// PrivateRoute component to protect routes
const PrivateRoute = ({ element, isLoggedIn }) => {
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const AppRoutes = ({ isLoggedIn, handleLoginSuccess }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
      <Route path="/certificate-list" element={<PrivateRoute element={<CertificateList />} isLoggedIn={isLoggedIn} />} />
      <Route path="/table-usage" element={<PrivateRoute element={<First />} isLoggedIn={isLoggedIn} />} />
      <Route path="/certificate-validator" element={<PrivateRoute element={<CertificateValidator />} isLoggedIn={isLoggedIn} />} />
      <Route path="/file-upload" element={<PrivateRoute element={<FileUpload />} isLoggedIn={isLoggedIn} />} />
      <Route path="/formulario-comunicacion" element={<PrivateRoute element={<FormularioComunicacion />} isLoggedIn={isLoggedIn} />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

const AppContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/table-usage');  // Redirect to TableUsage page after login
  };

  const { t } = useTranslation();

  return (
    <div>
      <Navbar className="custom-navbar navbar navbar-expand-lg navbar-dark bg-dark" />
      <section className='background'>
        <div className="main-content">
          <h1 className='title'>{t("certifications")} Universidad Adolfo Ibáñez</h1>
          <AppRoutes isLoggedIn={isLoggedIn} handleLoginSuccess={handleLoginSuccess} />
        </div>
      </section>
      <Footer className="footer" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
