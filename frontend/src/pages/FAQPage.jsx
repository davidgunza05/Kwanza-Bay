import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
    return (
        <div>
            <Header activeHeading={5} />
            <Faq />
            <Footer />
        </div>
    );
};

const Faq = () => {
    const [activeTab, setActiveTab] = useState(0);

    const toggleTab = (tab) => {
        if (activeTab === tab) {
            setActiveTab(0);
        } else {
            setActiveTab(tab);
        }
    };

    return (
        <div className={`${styles.section} my-8`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
            <div className="mx-auto space-y-4">
                {/* single Faq */}

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(2)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                        Qual é a sua política de devolução?
                        </span>
                        {activeTab === 2 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 2 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                Se você não estiver satisfeito com sua compra, aceitamos devoluções
                                dentro de 30 dias após a entrega. Para iniciar uma devolução, envie um e-mail
                                conosco em supporte.kwanzabay@gmail.com com o número do seu pedido e um
                                breve explicação do motivo pelo qual você está devolvendo o item.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(3)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                        Como faço para rastrear meu pedido?
                        </span>
                        {activeTab === 3 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 3 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                            Você pode rastrear seu pedido clicando no link de rastreamento em seu
                                e-mail de confirmação de envio ou fazendo login em sua conta em
                                nosso site e visualizando os detalhes do pedido.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(4)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                        Como entro em contato com o suporte ao cliente?
                        </span>
                        {activeTab === 4 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 4 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                            Você pode entrar em contato com nossa equipe de suporte ao cliente enviando um e-mail para
                                supporte.kwanzabay@gmail.com ou ligando para (+244) 944 000 001
                                entre 9h e 17h EST, de segunda a sexta-feira.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(5)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                        Posso alterar ou cancelar meu pedido?
                        </span>
                        {activeTab === 5 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 5 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                            Infelizmente, uma vez feito um pedido, não podemos
                                fazer alterações ou cancelamentos. Se você não quiser mais os itens
                                você encomendou, você pode devolvê-los e receber reembolso dentro de 30 dias
                                de entrega.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(6)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                        Vocês oferecem frete internacional?
                        </span>
                        {activeTab === 6 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 6 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                            Atualmente, oferecemos remessa apenas dentro dos Estados Unidos.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(7)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                        Que tipos de pagamentos você aceita?
                        </span>
                        {activeTab === 7 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 7 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                            Aceitamos visa, mastercard, método de pagamento paypal também temos
                                sistema de pagamento na entrega.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;