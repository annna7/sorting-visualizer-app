// boilerplate
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-flex">
                    <div className="gen-array">
                        <p> Generate New Array </p>
                    </div>
                    <div className="select-length">
                        <p> Set Length </p>
                    </div>
                    <div className="set-speed">
                        <p> Set Speed </p>
                    </div>
                    <div className="select-algo">
                        <p> Select Algorithm </p>
                        <p> Bubble Sort </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;