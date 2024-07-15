import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import i18next from '../i18next';
import { useTranslation } from 'react-i18next';


export function Home({ user, setUser }) {
    const handlelogout = () => {
        setUser([])
    }
    const { t } = useTranslation();
    return (
        <div className="container mt-5">
            <h1 className="text-center">{t('welcome')}</h1>
            <h2 className="text-center">{user}</h2>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={handlelogout}>{t('logout')}</button>
            </div>
        </div>
    )
}
