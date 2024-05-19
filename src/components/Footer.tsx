import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
    const sectionTitleClass = "text-lg font-semibold";
    const listLinkClass = "hover:text-gray-300 transition duration-300";
    const socialIconClass = "text-gray-300 hover:text-white transition duration-300 h-6 w-6";

    return (
        <footer className="bg-gray-700 text-white">
            <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className={sectionTitleClass}>About Us</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className={listLinkClass}>Company</a></li>
                        <li><a href="#" className={listLinkClass}>Team</a></li>
                        <li><a href="#" className={listLinkClass}>Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className={sectionTitleClass}>Support</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className={listLinkClass}>Help Center</a></li>
                        <li><a href="#" className={listLinkClass}>Contact Us</a></li>
                        <li><a href="#" className={listLinkClass}>Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className={sectionTitleClass}>Follow Us</h3>
                    <div className="mt-4 flex space-x-4">
                        <a href="#" className={socialIconClass}>
                            <FaFacebookF />
                        </a>
                        <a href="#" className={socialIconClass}>
                            <FaTwitter />
                        </a>
                        <a href="#" className={socialIconClass}>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className={sectionTitleClass}>Legal</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className={listLinkClass}>Terms of Service</a></li>
                        <li><a href="#" className={listLinkClass}>Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm text-gray-400 pt-10 pb-4">
                © 2024 Sigdang - Jacob Olguin. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
