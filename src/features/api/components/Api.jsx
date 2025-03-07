import React, { useEffect, useState } from "react";
import DropDown from "./Dropdown";
import { useTranslation } from 'react-i18next';
import { LuCopy } from "react-icons/lu";

export default function Api() {
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState('sobreApi');

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset)

    return (
        <div className="flex items-start">

            <div className={`sticky top-10 hidden md:flex flex-col items-center p-10 space-y-1`}>
                <a
                    href="#SobreAPI"
                    className="">
                    <div className="flex items-center space-x-2 w-44">
                        <div className={`${offset >= 0 ? 'bg-lime-400' : 'border border-black'} rounded-full w-8 h-8 flex items-center justify-center`}>
                            <p>1</p>
                        </div>
                        <p className="font-semibold text-base">{t("Sobre API")}</p>
                    </div>
                </a>

                <div className="border border-gray-300 h-10 bg-gray-500 self-start ml-4"></div>

                <a
                    href="#ChaveApi"
                    className="flex items-center space-x-2 w-44">
                    <div className={`${offset >= 600 ? 'bg-lime-400' : 'border border-black'} rounded-full w-8 h-8 flex items-center justify-center`}>
                        <p>2</p>
                    </div>
                    <p className="font-semibold text-base">{t("Chave API")}</p>
                </a>

                <div className="border border-gray-300 h-10 bg-gray-500 self-start ml-4"></div>

                <a
                    href="#Clientes"
                    className="flex items-center space-x-2 w-44">
                    <div className={`${offset >= 1000 ? 'bg-lime-400' : 'border border-black'} rounded-full w-8 h-8 flex items-center justify-center`}>
                        <p>3</p>
                    </div>
                    <p className="font-semibold text-base">{t("Clientes")}</p>
                </a>

                <div className="border border-gray-300 h-10 bg-gray-500 self-start ml-4"></div>

                <a
                    href="#CriarClientes"
                    className="flex items-center space-x-2 w-44">
                    <div className={`${offset >= 1800 ? 'bg-lime-400' : 'border border-black'} rounded-full w-8 h-8 flex items-center justify-center`}>
                        <p>4</p>
                    </div>
                    <p className="font-semibold text-base">{t("Criar Clientes")}</p>
                </a>

                <div className="border border-gray-300 h-10 bg-gray-500 self-start ml-4"></div>

                <a
                    href="#ObterClientes"
                    className="flex items-center space-x-2 w-44">
                    <div className={`${offset >= 2600 ? 'bg-lime-400' : 'border border-black'} rounded-full w-8 h-8 flex items-center justify-center`}>
                        <p>5</p>
                    </div>
                    <p className="font-semibold text-base">{t("Obter Clientes")}</p>
                </a>

                <div className="border border-gray-300 h-10 bg-gray-500 self-start ml-4"></div>

                <a
                    href="#EditarClientes"
                    className="flex items-center space-x-2 w-44">
                    <div className={`${offset >= 3400 ? 'bg-lime-400' : 'border border-black'} rounded-full w-8 h-8 flex items-center justify-center`}>
                        <p>6</p>
                    </div>
                    <p className="font-semibold text-base">{t("Editar Clientes")}</p>
                </a>

                <div className="border border-gray-300 h-10 bg-gray-500 self-start ml-4"></div>

                <a
                    href="#ListarClientes"
                    className="flex items-center space-x-2 w-44">
                    <div className={`${offset >= 4100 ? 'bg-lime-400' : 'border border-black'} rounded-full w-8 h-8 flex items-center justify-center`}>
                        <p>7</p>
                    </div>
                    <p className="font-semibold text-base">{t("Listar Clientes")}</p>
                </a>
            </div>

            <div className="lg:ml-60 lg:pb-40 pb-20 space-y-20 w-full">
                <SobreAPI />
                <ChaveApi />
                <Clientes />
                <CriarClientes />
                <ObterClientes />
                <EditarClientes />
                <ListarClientes />
            </div>

        </div>
    );
}

const SobreAPI = () => {
    const [pageAPI, setPageAPI] = useState('Javascript');

    return (
        <div id="SobreAPI" className="lg:w-2/3 space-y-5">
            <h1 className="text-5xl font-semibold">Sobre a API</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum, odio ut cursus mollis, enim dolor imperdiet arcu, in consectetur lorem diam non purus. Mauris semper eros nec mauris dignissim feugiat sed nec orci. Suspendisse potenti. Pellentesque feugiat ullamcorper elementum. Maecenas et tristique nisl, eleifend semper ex. Ut aliquam ipsum enim, vel interdum massa cursus quis. Quisque ut aliquet tellus. Aliquam a velit condimentum, dapibus sem vitae, iaculis odio. Curabitur laoreet eu lectus vitae ullamcorper.</p>

            <div className="bg-gray-300 rounded-xl space-y-10 p-5">
                <DropDown pagina={pageAPI} setPagina={setPageAPI} />
                {pageAPI === 'Javascript' &&
                    <pre className="overflow-x-auto whitespace-pre-wrap break-words">
                        {`const paymentAPI = initPaymentAPI({\n\n  // Chave da API do seu provedor de pagamento\n  apiKey: 'sua_chave_api',\n});\n\npaymentAPI.startPayment({\n  // Dados do pagamento\n  amount: 100.00,\n  currency: 'BRL',\n  description: 'Descrição do produto ou serviço',\n  // Dados do cliente\n  customerName: 'Fulano de Tal',\n  customerEmail: 'fulano@example.com',\n});`}
                    </pre>}
                {pageAPI === 'Typescript' && <pre>TypeScript</pre>}
                {pageAPI === 'Java' && <pre>Java</pre>}
                {pageAPI === 'C#' && <pre>C#</pre>}
            </div>

        </div>
    );
}

const ChaveApi = () => {
    const textToCopy = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQ...';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Texto copiado para o clipboard!');
        }).catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
    };

    return (
        <div id="ChaveApi" className="lg:w-2/3 space-y-10">
            <h1 className="text-5xl font-semibold">ChaveAPI</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum, odio ut cursus mollis, enim dolor imperdiet arcu, in consectetur lorem diam non purus. Mauris semper eros nec mauris dignissim feugiat sed nec orci. Suspendisse potenti. Pellentesque feugiat ullamcorper elementum. Maecenas et tristique nisl, eleifend semper ex. Ut aliquam ipsum enim, vel interdum massa cursus quis. Quisque ut aliquet tellus. Aliquam a velit condimentum, dapibus sem vitae, iaculis odio. Curabitur laoreet eu lectus vitae ullamcorper.</p>
            <div className="p-10 pb-20 bg-lime-400 rounded-xl space-y-10">
                <h2 className="font-bold">Chave da API</h2>
                <div className="w-full flex items-center">
                    <h2 type="text" className="p-2 rounded-xl bg-white overflow-x-auto whitespace-pre-wrap break-words">
                        {textToCopy}
                    </h2>
                    <LuCopy className="w-10 cursor-pointer" onClick={copyToClipboard} size={20}/>
                </div>
            </div>
        </div>
    );
}

const Clientes = () => {
    return (
        <div id="Clientes" className="lg:w-2/3 space-y-10">
            <h1 className="text-5xl font-semibold">Clientes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum, odio ut cursus mollis, enim dolor imperdiet arcu, in consectetur lorem diam non purus. Mauris semper eros nec mauris dignissim feugiat sed nec orci. Suspendisse potenti. Pellentesque feugiat ullamcorper elementum. Maecenas et tristique nisl, eleifend semper ex. Ut aliquam ipsum enim, vel interdum massa cursus quis. Quisque ut aliquet tellus. Aliquam a velit condimentum, dapibus sem vitae, iaculis odio. Curabitur laoreet eu lectus vitae ullamcorper.</p>

            <div className="rounded-xl p-1 bg-gray-200 ">
                <table className="w-full table-auto text-left">
                    <thead className="text-xs font-semibold text-gray-500 uppercase">
                        <tr>
                            <th className="px-4 py-3">Song</th>
                            <th className="px-4 py-3">Artist</th>
                            <th className="px-4 py-3">Year</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white rounded-b-lg">
                        <tr>
                            <td className="px-4 py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td className="px-4 py-3">Malcolm Lockyer</td>
                            <td className="px-4 py-3">1961</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">Witchy Woman</td>
                            <td className="px-4 py-3">The Eagles</td>
                            <td className="px-4 py-3">1972</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">Shining Star</td>
                            <td className="px-4 py-3">Earth, Wind, and Fire</td>
                            <td className="px-4 py-3">1975</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

const CriarClientes = () => {
    return (
        <div id="CriarClientes" className="lg:w-2/3 space-y-10">
            <h1 className="text-5xl font-semibold">CriarClientes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum, odio ut cursus mollis, enim dolor imperdiet arcu, in consectetur lorem diam non purus. Mauris semper eros nec mauris dignissim feugiat sed nec orci. Suspendisse potenti. Pellentesque feugiat ullamcorper elementum. Maecenas et tristique nisl, eleifend semper ex. Ut aliquam ipsum enim, vel interdum massa cursus quis. Quisque ut aliquet tellus. Aliquam a velit condimentum, dapibus sem vitae, iaculis odio. Curabitur laoreet eu lectus vitae ullamcorper.</p>

            <div className="w-3/4 space-y-10">

                <div className="rounded-xl p-1 bg-gray-200">
                    <table className="w-full table-auto text-left">
                        <thead className="text-xs font-semibold text-gray-500 uppercase">
                            <tr>
                                <th className="px-4 py-3">Song</th>
                                <th className="px-4 py-3">Artist</th>
                                <th className="px-4 py-3">Year</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white rounded-b-lg">
                            <tr>
                                <td className="px-4 py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="px-4 py-3">Malcolm Lockyer</td>
                                <td className="px-4 py-3">1961</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Witchy Woman</td>
                                <td className="px-4 py-3">The Eagles</td>
                                <td className="px-4 py-3">1972</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Shining Star</td>
                                <td className="px-4 py-3">Earth, Wind, and Fire</td>
                                <td className="px-4 py-3">1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="rounded-xl p-1 bg-gray-200">
                    <table className="w-full table-auto text-left">
                        <thead className="text-xs font-semibold text-gray-500 uppercase">
                            <tr>
                                <th className="px-4 py-3">Resposta</th>
                                <th className="px-4 py-3">Descrição</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr >
                                <td className="px-4 py-3 w-28">Sucesso</td>
                                <td className="px-4 py-3">New York No. 1 Lake Park</td>

                            </tr>
                            <tr>
                                <td className="px-4 py-3">Erro</td>
                                <td className="px-4 py-3">
                                    <ul>
                                        <li>202: Nome inválido</li>
                                        <li>504: Documento ausente</li>
                                        <li>...</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

const ObterClientes = () => {
    return (
        <div id="ObterClientes" className="lg:w-2/3 space-y-10">
            <h1 className="text-5xl font-semibold">ObterClientes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum, odio ut cursus mollis, enim dolor imperdiet arcu, in consectetur lorem diam non purus. Mauris semper eros nec mauris dignissim feugiat sed nec orci. Suspendisse potenti. Pellentesque feugiat ullamcorper elementum. Maecenas et tristique nisl, eleifend semper ex. Ut aliquam ipsum enim, vel interdum massa cursus quis. Quisque ut aliquet tellus. Aliquam a velit condimentum, dapibus sem vitae, iaculis odio. Curabitur laoreet eu lectus vitae ullamcorper.</p>

            <div className="w-3/4 space-y-10">

                <div className="rounded-xl p-1 bg-gray-200">
                    <table className="w-full table-auto text-left">
                        <thead className="text-xs font-semibold text-gray-500 uppercase">
                            <tr>
                                <th className="px-4 py-3">Song</th>
                                <th className="px-4 py-3">Artist</th>
                                <th className="px-4 py-3">Year</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white rounded-b-lg">
                            <tr>
                                <td className="px-4 py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="px-4 py-3">Malcolm Lockyer</td>
                                <td className="px-4 py-3">1961</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Witchy Woman</td>
                                <td className="px-4 py-3">The Eagles</td>
                                <td className="px-4 py-3">1972</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Shining Star</td>
                                <td className="px-4 py-3">Earth, Wind, and Fire</td>
                                <td className="px-4 py-3">1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="rounded-xl p-1 bg-gray-200">
                    <table className="w-full table-auto text-left">
                        <thead className="text-xs font-semibold text-gray-500 uppercase">
                            <tr>
                                <th className="px-4 py-3">Resposta</th>
                                <th className="px-4 py-3">Descrição</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr >
                                <td className="px-4 py-3 w-28">Sucesso</td>
                                <td className="px-4 py-3">New York No. 1 Lake Park</td>

                            </tr>
                            <tr>
                                <td className="px-4 py-3">Erro</td>
                                <td className="px-4 py-3">
                                    <ul>
                                        <li>202: Nome inválido</li>
                                        <li>504: Documento ausente</li>
                                        <li>...</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

const EditarClientes = () => {
    return (
        <div id="EditarClientes" className="lg:w-2/3 space-y-10">
            <h1 className="text-5xl font-semibold">EditarClientes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum, odio ut cursus mollis, enim dolor imperdiet arcu, in consectetur lorem diam non purus. Mauris semper eros nec mauris dignissim feugiat sed nec orci. Suspendisse potenti. Pellentesque feugiat ullamcorper elementum. Maecenas et tristique nisl, eleifend semper ex. Ut aliquam ipsum enim, vel interdum massa cursus quis. Quisque ut aliquet tellus. Aliquam a velit condimentum, dapibus sem vitae, iaculis odio. Curabitur laoreet eu lectus vitae ullamcorper.</p>

            <div className="w-3/4 space-y-10">

                <div className="rounded-xl p-1 bg-gray-200">
                    <table className="w-full table-auto text-left">
                        <thead className="text-xs font-semibold text-gray-500 uppercase">
                            <tr>
                                <th className="px-4 py-3">Song</th>
                                <th className="px-4 py-3">Artist</th>
                                <th className="px-4 py-3">Year</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white rounded-b-lg">
                            <tr>
                                <td className="px-4 py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="px-4 py-3">Malcolm Lockyer</td>
                                <td className="px-4 py-3">1961</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Witchy Woman</td>
                                <td className="px-4 py-3">The Eagles</td>
                                <td className="px-4 py-3">1972</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Shining Star</td>
                                <td className="px-4 py-3">Earth, Wind, and Fire</td>
                                <td className="px-4 py-3">1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="rounded-xl p-1 bg-gray-200">
                    <table className="w-full table-auto text-left">
                        <thead className="text-xs font-semibold text-gray-500 uppercase">
                            <tr>
                                <th className="px-4 py-3">Resposta</th>
                                <th className="px-4 py-3">Descrição</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr >
                                <td className="px-4 py-3 w-28">Sucesso</td>
                                <td className="px-4 py-3">New York No. 1 Lake Park</td>

                            </tr>
                            <tr>
                                <td className="px-4 py-3">Erro</td>
                                <td className="px-4 py-3">
                                    <ul>
                                        <li>202: Nome inválido</li>
                                        <li>504: Documento ausente</li>
                                        <li>...</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

const ListarClientes = () => {
    return (
        <div id="ListarClientes" className="lg:w-2/3 space-y-10">
            <h1 className="text-5xl font-semibold">ListarClientes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum, odio ut cursus mollis, enim dolor imperdiet arcu, in consectetur lorem diam non purus. Mauris semper eros nec mauris dignissim feugiat sed nec orci. Suspendisse potenti. Pellentesque feugiat ullamcorper elementum. Maecenas et tristique nisl, eleifend semper ex. Ut aliquam ipsum enim, vel interdum massa cursus quis. Quisque ut aliquet tellus. Aliquam a velit condimentum, dapibus sem vitae, iaculis odio. Curabitur laoreet eu lectus vitae ullamcorper.</p>

            <div className="w-3/4 space-y-10">

                <div className="rounded-xl p-1 bg-gray-200">
                    <table className="w-full table-auto text-left">
                        <thead className="text-xs font-semibold text-gray-500 uppercase">
                            <tr>
                                <th className="px-4 py-3">Song</th>
                                <th className="px-4 py-3">Artist</th>
                                <th className="px-4 py-3">Year</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white rounded-b-lg">
                            <tr>
                                <td className="px-4 py-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="px-4 py-3">Malcolm Lockyer</td>
                                <td className="px-4 py-3">1961</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Witchy Woman</td>
                                <td className="px-4 py-3">The Eagles</td>
                                <td className="px-4 py-3">1972</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Shining Star</td>
                                <td className="px-4 py-3">Earth, Wind, and Fire</td>
                                <td className="px-4 py-3">1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="rounded-xl p-1 bg-gray-200">
                    <table className="w-full table-auto text-left">
                        <thead className="text-xs font-semibold text-gray-500 uppercase">
                            <tr>
                                <th className="px-4 py-3">Resposta</th>
                                <th className="px-4 py-3">Descrição</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr >
                                <td className="px-4 py-3 w-28">Sucesso</td>
                                <td className="px-4 py-3">New York No. 1 Lake Park</td>

                            </tr>
                            <tr>
                                <td className="px-4 py-3">Erro</td>
                                <td className="px-4 py-3">
                                    <ul>
                                        <li>202: Nome inválido</li>
                                        <li>504: Documento ausente</li>
                                        <li>...</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}