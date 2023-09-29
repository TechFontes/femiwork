import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LandpageConteudo from "../components/templates/conteudoLP";
import Image from "next/image";
import Head from "next/head";

export default function Landpage() {



const [tela, setTela] = useState<number>(0)
const [drawer, setDrawer] = useState('0')

try{
    window.addEventListener('resize', function () {
        const x = window.screen.width;
        const y = window.screen.height;          
        setTela(x)
    });
}catch (erro){ 
}

useEffect(()=>{
    const x = window.screen.width;
    const y = window.screen.height;
    setTela(x)
},[])

const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };

    function funcaoFecharMenu() {
    if (menuOpen === false) {
        setMenuOpen(true);
    }
}



return (



<div className="bg-gray-500 w-full h-screen">

    <Head>
        <title>
            FemiWork
        </title>
    </Head>
    
<div  id="inicio" className="flex justify-center bg-white">



<div onClick={funcaoFecharMenu} className="grid justify-items-center w-full">


    <div className="div-sobre">
        {tela>=768?
        <div className="div-sobre w-full pt-3 pb-3 bg-white">
            <div className="flex justify-center w-full">
                <nav className={`w-full max-w-7xl backdrop-blur-lg backdrop-filter bg-opacity-30 px-5 lg:px-14 flex justify-between items-center`}>
                
                    <Link to="inicio" smooth={true} duration={1000} className="cursor-pointer">
                        <Image
                            src="/BB.webp"
                            width={208}
                            height={208}
                            alt="Logo da empresa"
                        />
                    </Link>

                
                    <div className="lg:gap-14 gap-5 flex text-center lg:text-lg text-md"> 

                        <Link to="eventos" smooth={true} duration={1000} className="cursor-pointer">
                            Eventos
                        </Link>

                        
                        <Link to="pilares" className="cursor-pointer" smooth={true} duration={1000}>
                            Pilares
                        </Link>
                        
                        <Link to="feedback" className="cursor-pointer" smooth={true} duration={1000}>
                            FeedBack
                        </Link>

                        <Link to="quemsomos" className="cursor-pointer" smooth={true} duration={1000}>
                            Quem Somos
                        </Link>

                    </div>

                    
                    <div>

                        <a href="https://copps.me/ENC-FFF2B335" target="_blank" rel="noreferrer" className="relative p-0.5 inline-flex items-center justify-center font-semibold overflow-hidden group rounded-sm">
                            <span className="w-full h-full bg-gradient-to-br from-[#E95B47] via-[#E95B47] to-[#E95B47] group-hover:from-[#E95B47] group-hover:via-[#E95B47] group-hover:to-[#E95B47] absolute"></span>
                            <span className="relative px-10 py-2 transition-all ease-out bg-[#ffe2de] text-[#E95B47] hover:text-white rounded-sm group-hover:bg-opacity-0 duration-400">
                                <span className="relative">Fazer parte</span>
                            </span>
                        </a>
                    </div>
                </nav>
            
            </div>
        </div>
        :
        <div>
            <div className="div-sobre w-full">
                <div className="flex justify-center w-full">
                    <nav className={`w-full bg-white backdrop-blur-lg backdrop-filter bg-opacity-50 px-3 py-1.5 flex justify-between items-center`}>
                        <div>
                            <Link to="inicio" 
                            smooth={true} 
                            duration={1000} 
                            className="cursor-pointer">
                                <Image
                                    src="/BB.webp"
                                    width={180}
                                    height={180}
                                    alt="Picture of the author"
                                />
                            </Link>
                        </div>

                        <div>
                            <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-list menu-button" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/> </svg>
                        </div>
                    </nav>

                    
                </div>                
            
            
                <div className="flex justify-center">
                    <div className="bg-[#C35850]/80 w-full -mt-1.5 max-w-7xl h-2.5"></div>
                </div>

            </div>


            <div  className={`menu w-full ${!menuOpen ? 'show-menu' : ''}`}>
                    <div  className='grid gap-5 text-lg border-x-2 border-b-2 rounded-b-lg border-[#C35850] justify-items-center py-4 mx-10 css-window-4'>
                        <Link onClick={toggleMenu} to="eventos" smooth={true} duration={1000} className="cursor-pointer text-black">
                            Eventos
                        </Link>

                        
                        <Link onClick={toggleMenu} to="pilares" className="cursor-pointer" smooth={true} duration={1000}>
                            Pilares
                        </Link>
                        
                        <Link onClick={toggleMenu} to="feedback" className="cursor-pointer" smooth={true} duration={1000}>
                            FeedBack
                        </Link>

                        <Link onClick={toggleMenu} to="quemsomos" className="cursor-pointer" smooth={true} duration={1000}>
                            Quem Somos
                        </Link>
                    </div>
                </div>

        </div>
}
    </div>



    <div className="mt-14 md:mt-16 w-full flex justify-center">
        <LandpageConteudo/>
    </div>

    

</div>
</div>
    

    <div className="mt-14 md:mt-16 w-full flex justify-center" >
        {/* <LandpageRodape/> */}
    </div>


</div>



);
};