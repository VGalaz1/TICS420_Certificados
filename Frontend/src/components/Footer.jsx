import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white">
            <div className="container">
                <span className="footer-text">
                <strong>Santiago</strong><br />
                    Diagonal las Torres 2640, Peñalolén.<br />
                    Av. Presidente Errázuriz 3485, Las Condes.<br />
                    Av. Santa María 5870, Vitacura.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
