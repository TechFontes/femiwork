import React, { Component } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';


import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function carousel () {
  return (
    <div className='ml-10 lg:ml-5 max-w-7xl'>
      <Swiper
        className=''
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
      >

        <div>
        <SwiperSlide>
          <div className='mb-10'>
            <p className='pt-5 lg:text-sm'>Cristã, 41 anos, casada com Eduardo, mãe da Luísa e do Rodrigo, Terapeuta sistêmica, pós graduada em psicologia transpessoal, analista corporal e sócia do centro de atendimento Ala Mai.</p>
            
            <div className='flex pt-10'>
              
              <Image
                quality={100}
                className='rounded-3xl'
                src="/Mayne.webp"
                width={64}
                height={64}
                alt="cruz"
              />
              
              <div className='pl-2'>
                <h2 className='text-[#970002] font-semibold'>Mayne D&#8217;Avila</h2>
                <p className='text-xs text-gray-500'>fundadora</p>
                <Image
                  className='rounded-3xl mt-4'
                  src="/FG.webp"
                  width={64}
                  height={64}
                  alt="cruz"
                  quality={100}
                />
              </div>
            
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <p className='pt-5 lg:text-sm'>Cristã, 33 anos, casada com Luiz Carlos, mãe do Lorenzo e da Luiza, Empreendedora , Sócia proprietária Casa Lolú Cortinas e Enxovais, Gestora de Vendas e  Marketplace.</p>
            
            <div className='flex pt-16 lg:pt-10'>
              
              <Image
                quality={100}
                className='rounded-3xl'
                src="/Isabela.webp"
                width={64}
                height={64}
                alt="cruz"
              />
              
              <div className='pl-2'>
                <h2 className='text-[#970002] font-semibold'>Isabela de Bortoli</h2>
                <p className='text-xs text-gray-500'>fundadora</p>
                <Image
                  quality={100}
                  className='rounded-3xl mt-4'
                  src="/FG.webp"
                  width={64}
                  height={64}
                  alt="cruz"
                />
              </div>
            
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <p className='pt-5 lg:text-sm'>Cristã, 36 anos, casada com Diego, mãe do Miguel, Terapeuta BodyTalk, pós graduada em psicologia transpessoal, empreendedora e sócia do Centro de Atendimento Ala Mai.</p>
            
            <div className='flex pt-16 lg:pt-10'>
              
              <Image
                quality={100}
                className='rounded-3xl'
                src="/Juliana.webp"
                width={64}
                height={64}
                alt="cruz"
              />
              
              <div className='pl-2'>
                <h2 className='text-[#970002] font-semibold'>Juliana Vilela</h2>
                <p className='text-xs text-gray-500'>fundadora</p>
                <Image
                  quality={100}
                  className='rounded-3xl mt-4'
                  src="/FG.webp"
                  width={64}
                  height={64}
                  alt="cruz"
                />
              </div>
            
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <p className='pt-5 lg:text-sm'>Cristã, 35 anos, casada há 14 anos e mãe de uma princesa. Mais de 10 anos empreendendo e buscando meu crescimento pessoal e profissional. Busco ser canal de cura para outras mulheres, assim como muitas foram para mim.</p>
            
            <div className='flex pt-4 lg:pt-5'>
              
              <Image
                quality={100}
                className='rounded-3xl'
                src="/Lorena2.jpg"
                width={64}
                height={64}
                alt="cruz"
              />
              
              <div className='pl-2'>
                <h2 className='text-[#970002] font-semibold'>Lorena Provázio</h2>
                <p className='text-xs text-gray-500'>fundadora</p>
                <Image
                  quality={100}
                  className='rounded-3xl mt-4'
                  src="/FG.webp"
                  width={64}
                  height={64}
                  alt="cruz"
                />
              </div>
            
            </div>
          </div>
        </SwiperSlide>
        </div>

      </Swiper>
    </div>
  );
};

