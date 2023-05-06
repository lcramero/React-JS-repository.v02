import React from 'react';
import FooterImg from "../FooterImg/footerImg";

import "./Footer.css"

    const Footer = () => {
        return (
            <footer>
            <div className='div-footer'>
                <div className='footer-text'>
                    <div className="div-footer-img">
                        <FooterImg />
                    </div>
                    <div className="div-footer-aboutus">
                        <h3>
                            About us
                        </h3>
                        <div>
                            <p>
                                We make sure to select the latest trends and styles for you. 
                                Helping you find the perfect clothes that fit your personal style and enhance your image is our goal.
                            </p>
                            <p>
                                You will enjoy a unique experience at Gemini'sDUDE.
                                We focus on achieving maximum satisfaction and a long-lasting relationship with our customers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='footer-icons'>
                    <div>
                        <h3>Follow us</h3>
                    </div>
                    <div className="footer-icons-self">
                        <a class="footer__link--decoration" href="mailto:cvdiv@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="30"
                                height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#165ed3" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </a>
                        <p>support@geminisdude.com</p>
                    </div>
                    <div className="footer-icons-self">
                        <a class="footer__link--decoration" href="https://wa.me/+5942658963552">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp"
                                width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#165ed3" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path
                                    d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                            </svg>
                        </a>
                        <p>(023)4567-2345</p>
                    </div>
                    <div className="footer-icons-self">
                        <a class="footer__link--decoration" href="https://www.instagram.com/lcramero/?hl=es">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram"
                                width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#165ed3" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                        </a>
                        <p>/GeminisDUDE</p>
                    </div>
                </div>
            </div>
            <div className='footer-links'>
                    <div>
                        <p>Copyright 2022 | Dontyoudare</p>
                    </div>
                    <div className="footer-links-self">
                        <div>
                            <a href="index.js">Home</a>
                        </div>
                        <div>
                            <a href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">Contact</a>
                        </div>
                        <div>
                            <a href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">Support</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
}

export default Footer