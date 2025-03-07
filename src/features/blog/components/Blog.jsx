import React from "react";
import MulherBlog from '../../../assets/images/mulherBlog.png';
import Gravura from '../../../assets/images/Gravura.png';
import logo from '../../../assets/images/pixtopayimage.png';
import PaginatedList from "./Paginacao";
import { useTranslation } from 'react-i18next';

export default function Blog() {

    const { t, i18n } = useTranslation();

    return (
        <div className="">

            <div className="bg-gradient-to-t from-to-gray-main to-gray-main w-full flex flex-wrap justify-center items-center lg:pl-64 text-white">
                <img className="lg:relative top-24 pt-20 lg:pt-0" src={MulherBlog}></img>
                <h1 className="pt-20 lg:pl-20 text-6xl font-bold lg:w-1/2"><span style={{ color: "#9ff282" }}>{t("Tecnologia")}</span>, <span style={{ color: "#9ff282" }}>segurança</span> e  <span style={{ color: "#9ff282" }}>informação</span>! Esse é o blog pix<span style={{ color: "#9ff282" }}>to</span>pay</h1>
            </div>

            <div className="flex justify-evenly mt-60 mb-40">

                <div>
                    <h1 className="text-4xl font-bold">{t("Temas recentes")}</h1>
                    <div className="">

                        <PaginatedList />

                    </div>
                </div>

                <div style={{ height: '1480px' }} className="bg-gradient-to-b w-96 from-to-gray-main to-gray-main hidden sm:flex flex-col items-center justify-center mt-20 text-white space-y-40 rounded-xl">

                    <div>
                        <img style={{ width: '150px' }} src={Gravura}></img>
                        <div style={{ width: '150px' }} className='flex items-center p-5'>
                            <img src={logo} />
                        </div>
                    </div>

                    <div className="space-y-20 p-12">
                        <h1 className="text-4xl font-bold"><span style={{ color: "#9ff282" }}>{t("Simplifique")}</span> {t("seus pagamentos agora!")}</h1>
                        <button className="p-2 rounded-xl border-2 border-green-600">{t("Conheça mais dos nossos serviçõs.")}</button>
                    </div>

                </div>

            </div>

        </div>
    )
}