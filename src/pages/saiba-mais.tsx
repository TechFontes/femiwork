import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LandpageConteudo from "../components/templates/conteudoLP";
import Image from "next/image";
import LandpageRodape from "../components/templates/rodapeLP";

export default function Landpage() {



    return (

        <div className={`w-full bg-white min-h-screen`}>

            <div id="inicio" className={`w-full pb-10 min-h-screen flex justify-center transition-all bg-no-repeat bg-center bg-cover bg-[url('/BannerSalmao.png')]`}>

                <div className="flex opacity-100 items-center flex-col w-full">
                    <div className="flex flex-col mt-5 items-center  w-full ">
                        <div className="border-2 border-[#970002] rounded-full">

                            <a rel="noreferrer" href="/" target="_blank">
                                <Image
                                    className=" bg-white rounded-full p-1"
                                    src="/favicon.webp"
                                    alt="Next.js Logo"
                                    width={150}
                                    height={150}
                                    priority
                                    quality={100}
                                />
                            </a>

                        </div>

                        <div className="text-[#970002] text-center mt-3 ">
                            <h2 className="font-serif text-4xl">FemiWork</h2>
                            <h2 className="text-[#b62f31]">@femiworkoficial</h2>
                        </div>


                    </div>

                    <div className="bg-gradient-to-r from-[#ffcecf] via-[#FFFFFF] to-[#ffcecf] background-animate border-y-2 border-[#970002] shadow-y my-4 h-10 w-full"></div>

                    <div className="flex flex-col px-4 md:px-0 gap-10 my-6">

                    
                        <a href="https://copps.me/ENC-FFF2B335" target="_blank" rel="noreferrer">
                            <Image
                                className="shadow-y border border-[#970002]/80 hover:floating "
                                src="/participeencontro.png"
                                alt="Next.js Logo"
                                width={500}
                                height={500}
                                priority
                                quality={100}
                            />
                        </a>


                        <a href="https://copps.me/ENC-FFF2B335" target="_blank" rel="noreferrer">
                            <Image
                                className="shadow-y border border-[#970002]/80 hover:floating "
                                src="/sejuntefemiwork.png"
                                alt="Next.js Logo"
                                width={500}
                                height={500}
                                priority
                                quality={100}
                            />
                        </a>

                        <a href="https://www.instagram.com/femiworkoficial/" target="_blank" rel="noreferrer">
                            <Image
                                className="shadow-y border border-[#970002]/80 hover:floating"
                                src="/femiworkinstagram.png"
                                alt="Next.js Logo"
                                width={500}
                                height={500}
                                priority
                                quality={100}
                            />
                        </a>


                        <a rel="noreferrer" href="https://wa.me/556282176148" target="_blank">
                            <Image
                                className="shadow-y border border-[#970002]/80 hover:floating"
                                src="/femiworkwhatsapp.png"
                                alt="Next.js Logo"
                                width={500}
                                height={500}
                                priority
                                quality={100}
                            />
                        </a>

                    </div>
                </div>

            </div>






            <div className="w-full border-t-2 bg-gradient-to-l from-[#ffcecf] via-[#FFFFFF] to-[#ffcecf] background-animate border-[#970002]/80 shadow-y">
                <div className="grid justify-items-center">
                    <div className='md:pt-5 px-2 pb-5 max-w-7xl'>

                        <div className='flex py-10 justify-center items-center md:gap-44'>
                            <a rel="noreferrer" href="/" target="_blank">
                                <Image
                                    className=''
                                    quality={100}
                                    src="/BB.webp"
                                    width={240}
                                    height={240}
                                    alt="cruz"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>






        </div>

    );
};