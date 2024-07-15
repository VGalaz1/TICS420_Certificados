import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import './Login.css'; 
//import "./Style.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

export const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { t } = useTranslation();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5001/login', {
                user_name: username,
                password: password,
            });

            if (response.data.auth) {
                console.log('Login successful!', response.data.token);
                setErrorMessage(t('login successful'));
                localStorage.setItem('token', response.data.token);
                onLoginSuccess(); // Llamar a la función para manejar el éxito del login en App.js
            } else {
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Error logging in. Please try again.');
        } finally {
            setUsername('');
            setPassword('');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title text-center">{t('login')}</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">{t('Email')}</label>
                                    <input
                                        type="text"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="password">{t('password')}</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary">{t('login')}</button>
                                </div>
                            </form>
                            {errorMessage && <p className="text-center mt-3">{errorMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
