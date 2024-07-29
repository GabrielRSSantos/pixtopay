import React from 'react';
import { Link } from 'react-router-dom';
import Brazil from './svg/Brazil';
import Portugal from './svg/Portugal';
import EUA from './svg/EUA';
import { FaWhatsapp } from "react-icons/fa";
import logo from '../../../assets/images/pixtopayimage.png';
import logoverde from '../../../assets/images/logotipo-pretoverde.png';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const location = useLocation();
    const currentPath = location.pathname;
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        console.log(lng);
        i18n.changeLanguage(lng);
    }

    return (
        <header style={{ backgroundColor: currentPath === '/' || currentPath === '/blog' ? '#161815' : '#FFFFFF' }}>
            {(currentPath === '/' || currentPath === '/blog') && (
                <div className='flex justify-between bg-transparent'>

                    <div style={{ width: '150px' }} className='flex items-center p-5'>
                        <img src={logo} />
                    </div>

                    <nav className='p-2 text-white self-end flex gap-10 items-center'>
                        <Link to="/" className='transition-all duration-300 p-2 text-gray-500 hover:text-white'>{t("Inicio")}</Link>
                        <Link to="/blog" className='transition-all duration-300 p-2 text-gray-500 hover:text-white'>{t("Blog")}</Link>
                        <Link to="/api" className='transition-all duration-300 p-2 text-gray-500 hover:text-white'>API</Link>
                        <div className='flex justify-center items-center transition-all duration-300 text-gray-500 hover:text-white'>
                            <FaWhatsapp size={20} />
                            <Link className='p-2'>{t("Abra sua conta")}</Link>
                        </div>
                        <div className='flex space-x-3 mr-10'>
                            <button onClick={() => changeLanguage('en')}>
                                <EUA />
                            </button>
                            <button onClick={() => changeLanguage('pt')}>
                                <Portugal />
                            </button>
                            <button onClick={() => changeLanguage('br')}>
                                <Brazil />
                            </button>
                        </div>
                    </nav>

                </div>

            )}
            {currentPath === '/api' && (
                <div className='flex justify-between bg-transparent'>

                    <div style={{ width: '150px' }} className='flex items-center p-5'>
                        <img src={logoverde} />
                    </div>

                    <nav className='p-2 text-black self-end flex gap-10 items-center'>
                        <Link to="/" className='transition-all duration-300 p-2 text-gray-500 hover:text-black'>{t("Inicio")}</Link>
                        <Link to="/blog" className='transition-all duration-300 p-2 text-gray-500 hover:text-black'>{t("Blog")}</Link>
                        <Link to="/api" className='transition-all duration-300 p-2 text-gray-500 hover:text-black'>API</Link>
                        <div className='flex justify-center items-center transition-all duration-300 text-gray-500 hover:text-black'>
                            <FaWhatsapp size={20} />
                            <Link className='p-2'>{t("Abra sua conta")}</Link>
                        </div>
                        <div className='flex space-x-3 mr-10'>
                            <button onClick={() => changeLanguage('en')}>
                                <EUA />
                            </button>
                            <button onClick={() => changeLanguage('pt')}>
                                <Portugal />
                            </button>
                            <button onClick={() => changeLanguage('br')}>
                                <Brazil />
                            </button>
                        </div>
                    </nav>
                </div>
            )}

        </header>
    );
}