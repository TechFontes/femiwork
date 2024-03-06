import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import LiteVimeoEmbed from "@slightlyoff/lite-vimeo";
// Import Swiper styles
import 'swiper/css';
import LandpageRodape from "./rodapeLP";
import Carousel from "./carousel";
import Cardtexto from "./cardTexto";

const words = ["Fé", "Networking", "Sucesso", "Colaboração"];

export default function LandpageConteudo() {


    const [tela, setTela] = useState<any>(0)
    const [drawer, setDrawer] = useState('0')

    try {
        window.addEventListener('resize', function () {
            const x = window.screen.width;
            const y = window.screen.height;
            setTela(x)
        });
    } catch (erro) {
    }

    useEffect(() => {
        const x = window.screen.width;
        const y = window.screen.height;
        setTela(x)
    }, [])



    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false); // Oculta a palavra atual
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) =>
                    prevIndex === words.length - 1 ? 0 : prevIndex + 1
                );
                setVisible(true); // Mostra a próxima palavra após a transição
            }, 500); // Tempo de espera para a transição (ajuste conforme necessário)
        }, 2000); // Altere o intervalo de tempo conforme necessário

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (

        <div className="w-full bg-white">
            <div className="bg-[#C35850] w-full flex justify-center">
                <div className={`h-72 pb-12 md:pb-64 pt-80 md:pt-72 max-w-8xl lg:pt-72 w-full flex items-end md:items-center justify-center md:justify-start transition-all bg-no-repeat bg-end md:bg-center bg-cover bg-[url('/Banner.webp')]`}>

                    <div className='flex justify-center'>
                        <div className='lg:px-28 md:px-10 px-3 flex max-w-5xl'>
                            <div>

                                <div className='font-bold text-5xl text-[#FFE0C8]'>
                                    <h1 className='text-xl pl-1 pb-4'>FAÇA PARTE DESSE</h1>
                                    <h2 className='sm:text-7xl'>EXÉRCITO DE </h2>
                                    <h2 className='sm:text-7xl'>MULHERES</h2>
                                    <h2 className='sm:text-7xl'>PRÓSPERAS!</h2>

                                </div>


                                <div className='pt-14 pl-1'>
                                    <Link to="eventos" smooth={true} duration={1000} className="cursor-pointer">
                                        <button className="relative inline-flex items-center justify-center py-1.5 px-12 mx-1 font-semibold overflow-hidden text-[#FFE0C8] hover:text-[#C35850] rounded-md shadow-2xl group border border-[#FFE0C8]">

                                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#ffc8c4] to-[#FFFFFF] group-hover:opacity-100"></span>

                                            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#FFE0C8] to-transparent opacity-5 h-1/3"></span>

                                            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#FFE0C8] to-transparent opacity-5"></span>

                                            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-[#FFE0C8] to-transparent opacity-5"></span>

                                            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-[#FFE0C8] to-transparent opacity-5"></span>

                                            <span className="absolute inset-0 w-full h-full border border-[#FFE0C8] rounded-md opacity-10"></span>

                                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-[#FFE0C8] rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>

                                            <span className="relative text-lg">Veja mais</span>

                                        </button>
                                    </Link>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>
            </div>



            <div className="w-full flex flex-col items-center justify-center gap-10 pt-20 pb-6">

                <h2 className="font-bold text-4xl sm:text-6xl text-center text-[#970002]">
                    <a className="text-[#EA6350]">Bem-vinda à</a> FemiWork
                </h2>

                <h3 className="font-medium text-black text-justify max-w-6xl px-5 md:px-8">
                    Somos uma comunidade comprometida em capacitar mulheres para o crescimento pessoal e profissional. Aqui, cultivamos uma cultura de colaboração e apoio mútuo, onde cada membro é valorizado por sua singularidade e individualidade. Nossos eventos e conexões proporcionam oportunidades para virar chaves, fortalecer laços, a sua fé e alcançar novos patamares. Junte-se a nós para uma jornada de desenvolvimento, confiança e realização, onde você se sentirá segura em sua identidade e capacitada para alcançar seus objetivos.
                </h3>
            </div>



            {/* <div id="eventos" className="w-full grid justify-items-center lg:flex items-center justify-center pt-24 pb-16">

                <div className='font-bold max-w-2xl w-full'>
                    <div className="w-full flex justify-center">
                        <div className="text-4xl">
                            <h1 className='text-xl pl-1 pb-4 text-[#3E3E3E]'>FAÇA PARTE DESSE EVENTO!</h1>
                            <h2 className='sm:text-7xl text-[#970002]'>Encontro de</h2>
                            <h2 className='sm:text-7xl text-[#970002]'>Empreendedoras</h2>
                            <h2 className='sm:text-7xl text-[#EA6350]'>
                                <span className={`transition-opacity duration-500 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}>
                                    {words[currentWordIndex]}
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex  flex-wrap pt-14 max-w-xl justify-center sm:justify-start">

                        <div className="grid justify-items-center pb-4 lg:pb-0 min-w-x2 -mt-1">
                            <svg width="50" height="50" className="bi bi-clock text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11 3.134-7 7-7 7 3.024 7 7z" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>

                            <div className="text-center -mt-1.5">
                                <h2 className="pt-3">Local</h2>
                                <h3 className="font-normal">A Definir</h3>
                            </div>
                        </div>

                        <div className="grid justify-items-center pb-4 lg:pb-0 min-w-x2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-clock text-gray-800" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" /> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg>

                            <h2 className="pt-3">Horário</h2>
                            <h3 className="font-normal">19:00 às 22:00</h3>
                        </div>

                        <div className="grid pb-4 lg:pb-0 justify-items-center min-w-x2">
                            <svg width="40" height="40" className="bi bi-clock text-gray-800" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                                <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z" />
                            </svg>

                            <h2 className="pt-3">Data</h2>
                            <h3 className="font-normal">19 de Setembro</h3>
                        </div>

                        <div className="grid pb-4 lg:pb-0 justify-items-center min-w-x2 -mt-1.5">
                            <svg width="50" height="50" className="bi bi-clock text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                            </svg>

                            <div className="text-center -mt-1.5">
                                <h2 className="pt-3">Valor</h2>
                                <h3 className="font-normal">R$ 89,90</h3>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="lg:max-w-md max-w-xl px-5 flex flex-col gap-4 pt-14 lg:pt-0 -mb-1">

                    <h2 className="font-semibold text-[#970002] text-center lg:text-start text-xl">
                        O que acontecerá nessa noite:
                    </h2>

                    <h2 className="font-medium text-black text-justify lg:text-start">
                        Participe de um Encontro de Empreendedoras focado em conexões e crescimento de negócios. Neste evento, você poderá:<br />
                    </h2>


                    <div className="flex flex-col gap-3 py-4">
                        <div className="flex items-center">

                            <div className="text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
                                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                                </svg>
                            </div>

                            <h2>
                                Ampliar sua rede com empreendedoras inspiradoras.
                            </h2>
                        </div>

                        <div className="flex items-center">

                            <div className="text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
                                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                                </svg>
                            </div>

                            <h2>
                                Trocar experiências para impulsionar projetos.
                            </h2>
                        </div>

                        <div className="flex items-center">

                            <div className="text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
                                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                                </svg>
                            </div>

                            <h2>
                                Compartilhar desafios e soluções.
                            </h2>
                        </div>

                        <div className="flex items-center">

                            <div className="text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
                                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                                </svg>
                            </div>

                            <h2>
                                Descobrir oportunidades de parcerias.
                            </h2>
                        </div>

                        <div className="flex items-center">

                            <div className="text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
                                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                                </svg>
                            </div>

                            <h2>
                                Aprender com histórias inspiradoras de sucesso.
                            </h2>
                        </div>

                    </div>


                    <div>
                        <h2 className="font-medium text-black text-justify lg:text-start">
                            Acreditamos no poder do networking para impulsionar nossos negócios e enriquecer nossas jornadas. Não perca a oportunidade de se conectar, compartilhar histórias e aprender com empreendedoras de sucesso.
                        </h2>
                    </div>

                </div>


            </div> */}



            <div className="w-full flex flex-col items-center justify-start gap-10 pt-10 md:pt-20 pb-6">
                <h2 className="text-[#970002] text-3xl md:text-4xl font-semibold max-w-xl text-center">
                    Participando da comunidade você terá acesso a:
                </h2>

                <div className="flex px-5 flex-wrap justify-center gap-5">
                    <div className="flex flex-col gap-3 pb-2 max-w-lg">

                        <div>
                            <h3 className="font-semibold text-[#060303] text-center lg:text-start text-xl">Jornada semestral </h3>
                        </div>
                        <Cardtexto texto='6 encontros presenciais (1 por mês) , com muita conexão, fé, autoconhecimento e desenvolvimento, além de rodadas de network'/>
                        <Cardtexto texto='6 encontros online (1 por mês) com feedbacks de desempenho e de solução de dúvidas entre as filiadas sobre os temas desenvolvidos no encontro presencial'/>
                        <Cardtexto texto='Face to face (encontros com outras filiadas para poder estreitar os laços e  gerar novas parcerias ou venda do seu produto ou serviço, bem como poder ser indicada por elas)'/>
                        <Cardtexto texto='Divulgação do seu trabalho em nosso Instagram e na nossa página'/>
                        <Cardtexto texto='Desconto em workshops e imersão'/>
                        <Cardtexto texto='Grupo exclusivo de whatsapp'/>

                    </div>



                    <div className="flex flex-col gap-3 pb-2 max-w-lg align-start">

                        <div>
                            <h3 className="font-semibold text-[#060303] text-center lg:text-start text-xl">Jornada trimestral  </h3>
                        </div>
                        <Cardtexto texto='3 encontros presenciais (1 por mês) , com muita conexão, fé, autoconhecimento e desenvolvimento, além de rodadas de network'/>
                        <Cardtexto texto="3 encontros online (1 por mês) com feedbacks de desempenho e de solução de dúvidas entre as filiadas sobre os temas desenvolvidos no encontro presencial"/>
                        <Cardtexto texto={`Face to face (encontros com outras filiadas para poder estreitar os laços e  gerar novas parcerias ou venda do seu produto ou serviço, bem como poder ser indicada por elas)`}/>
                        <Cardtexto texto='Divulgação do seu trabalho em nosso Instagram'/>
                        <Cardtexto texto='Desconto em workshops e imersão'/>
                        <Cardtexto texto='Grupo exclusivo de whatsapp.'/>


                    </div>



                </div>
            </div>




            <div className="w-full flex flex-col items-center justify-center pt-12">
                <div className="border-4 border-[#970002] rounded-md">
                    <iframe src="https://player.vimeo.com/video/856793751?h=bcabf58661" width="320" height="569" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>

                </div>

                <a href="https://copps.me/ENC-FFF2B335" target="_blank" rel="noreferrer" className="relative mt-20 md:mt-14 p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-lg">
                    <span className="w-full h-full bg-gradient-to-br from-[#E95B47] via-[#E95B47] to-[#E95B47] group-hover:from-[#E95B47] group-hover:via-[#E95B47] group-hover:to-[#E95B47] absolute"></span>
                    <span className="relative px-10 py-2 transition-all ease-out bg-[#ffe2de] text-[#E95B47] hover:text-white rounded-lg group-hover:bg-opacity-0 duration-400">
                        <span className="relative">Junte-se a nós!</span>
                    </span>
                </a>
            </div>




            <div className="pb-10" id="pilares"></div>

            <div className="grid gap-10 w-full justify-items-center md:flex justify-center items-center md:pb-5">

                <div className="w-full max-w-xl">

                    <div className="text-left w-full pt-5 lg:px-0 px-5 md:pl-5 flex flex-col items-center justify-center">

                        <div className="w-full max-w-xl pt-10 md:pt-0">
                            <h2 className="md:text-5xl text-4xl font-semibold pb-5 text-center lg:text-start">Nossos Pilares</h2>
                            <h2 className=" text-sm md:text-base text-justify -mt-4">Na Femiwork, acreditamos que juntas somos mais fortes e capazes de alcançar grandes conquistas. Somos uma comunidade de mulheres unidas por um propósito comum: ajudar umas às outras em seus negócios e na vida pessoal, com base em três pilares fundamentais: fé, networking e autoconhecimento.</h2>

                            <div className="flex w-full gap-10 flex-wrap pt-5 md:pt-14 justify-center">

                                <div className="grid justify-items-center min-w-x2">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="" width="50" height="50" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><rect x="24" y="100" width="56" height="56" rx="8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><rect x="160" y="40" width="64" height="64" rx="8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><rect x="160" y="152" width="64" height="64" rx="8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><line x1="80" y1="128" x2="120" y2="128" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><path d="M160,184H144a23.9,23.9,0,0,1-24-24V96a23.9,23.9,0,0,1,24-24h16" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /></svg>

                                    <h2 className="pt-2 text-[#970002] font-semibold text-lg">Networking</h2>
                                    <h3 className="font-normal">Sobre Networking</h3>
                                </div>

                                <div className="grid justify-items-center min-w-x2">
                                    <Image
                                        quality={100}
                                        src="/cruz.webp"
                                        width={30}
                                        height={30}
                                        alt="cruz"
                                    />

                                    <h2 className="pt-4 text-[#970002] font-semibold text-lg">Fé</h2>
                                    <h3 className="font-normal -mt-0.5">Sobre fé</h3>

                                </div>

                                <div className="grid justify-items-center min-w-x2">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><path d="M78.7,167A79.5,79.5,0,0,1,48,104.5C47.8,61.1,82.7,25,126.1,24a80,80,0,0,1,51.3,142.9A24.2,24.2,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.4,24.4,0,0,0,78.7,167Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /><path d="M136.1,56.8a47.9,47.9,0,0,1,39.2,39.1" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" /></svg>

                                    <h2 className="pt-2 text-[#970002] font-semibold text-lg">Auto Conhecimento</h2>
                                    <h3 className="font-normal">Sobre auto-conhecimento</h3>
                                </div>

                            </div>
                        </div>


                    </div>

                    {tela <= 768 &&
                        <div className='pt-20 pb-10 w-full flex justify-center'>
                            <a href="https://copps.me/ENC-FFF2B335" target="_blank" rel="noreferrer" className="relative p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-sm">
                                <span className="w-full h-full bg-gradient-to-br from-[#E95B47] via-[#E95B47] to-[#E95B47] group-hover:from-[#E95B47] group-hover:via-[#E95B47] group-hover:to-[#E95B47] absolute"></span>
                                <span className="relative px-10 py-2 transition-all ease-out bg-[#ffe2de] text-[#E95B47] hover:text-white rounded-sm group-hover:bg-opacity-0 duration-400">
                                    <span className="relative">Fazer parte</span>
                                </span>
                            </a>
                        </div>
                    }

                </div>



                <div className="flex items-center justify-center px-5 lg:px-0 max-w-md w-full -mb-24 h-full">

                    <Image
                        quality={100}
                        src="/PILARES.webp"
                        width={400}
                        height={400}
                        alt="Picture of the author"
                    />
                </div>

            </div>



            <div id="feedback" className="grid justify-items-center w-full px-5">

                <div className="text-center pt-40 md:pt-28">
                    <h2 className="font-semibold text-xl text-[#E95B47]">O que as mulheres dizem sobre o projeto?</h2>
                    <h2 className="md:text-5xl text-4xl font-semibold pb-5 text-center lg:text-start">FeedBack das participantes!</h2>
                    <h2 className="">Veja um pouco do que elas tem a dizer sobre a FemiWork.</h2>
                </div>

                <div className="flex flex-wrap gap-5 pt-10 justify-center">

                    <Image
                        quality={100}
                        className="rounded-lg border-2 border-[#970002]"
                        src="/feedback2.webp"
                        width={250}
                        height={250}
                        alt="Picture of the author"
                    />


                    <Image
                        quality={100}
                        className="rounded-lg border-2 border-[#970002]"
                        src="/feedback3.webp"
                        width={250}
                        height={250}
                        alt="Picture of the author"
                    />


                    <Image
                        quality={100}
                        className="rounded-lg border-2 border-[#970002]"
                        src="/feedback5.webp"
                        width={250}
                        height={250}
                        alt="Picture of the author"
                    />
                </div>

            </div>




            <div id="quemsomos" className="flex flex-col justify-center w-full md:pb-5 py-28">
                <div className="grid justify-items-center">

                    <h2 className="pl-5 max-w-md lg:max-w-2xl pb-8 font-semibold text-center md:text-left text-2xl lg:text-4xl text-[#E95B47]">
                        Conheça as fundadoras do projeto:
                    </h2>

                    <div className="grid md:grid-cols-2 justify-items-center px-5 lg:max-w-5xl">


                        <div className="grid items-center">

                            <Image
                                className="rounded-lg border-2 border-[#970002]"
                                src="/juntas4.webp"
                                width={550}
                                height={550}
                                quality={100}
                                alt="Picture of the author"
                            />
                        </div>

                        <div className="pt-5 md:pt-0">
                            <div>
                                {tela >= 768 &&
                                    <div>
                                        <h3 className="ml-10 lg:ml-5 max-w-sm font-semibold text-center md:text-left text-4xl lg:text-5xl">Quem somos?</h3>
                                    </div>
                                }
                                {tela < 768 &&
                                    <h3 className="font-semibold max-w-md text-center md:text-left text-4xl lg:text-5xl">Quem somos?</h3>
                                }

                            </div>


                            <div className="max-w-carousel md:max-w-carousel-md lg:max-w-lg">
                                <Carousel />
                            </div>

                        </div>

                    </div>
                </div>
            </div>




            <div className="flex justify-center md:pt-24 pb-24 w-full">

                <div className="text-center">
                    <h2 className="font-semibold text-3xl text-[#3E3E3E]">VAGAS LIMITADAS!</h2>
                    <h2 className="text-lg">Fique tranquila, os seus dados estão protegidos.</h2>
                </div>

            </div>


            <div className="w-full flex justify-center">

                <LandpageRodape />

            </div>



        </div>


    )
}