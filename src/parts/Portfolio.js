import React from 'react';
// import required modules
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Portfolio(props) {
  return (
    <section id='portfolio' className='pt-36 pb-16'>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h3 className='font-semibold text-lg text-primary mb-2'>
              Portfolio
            </h3>
            <h4 className='font-bold text-dark text-3xl sm:text-4xl lg:text-5xl mb-4'>
              Project Terbaru
            </h4>
            <p className='font-medium text-base text- text-secondary md:text-lg'>
              Beberapa karya terbaik saya
            </p>
          </div>
        </div>
        <Swiper
          className='swiper-autoplay'
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {props.data.map((item, index) => {
            return (
              <SwiperSlide key={item._id} className=''>
                <a
                  href={item.linkUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=''
                >
                  <div className='rounded-md shadow-md overflow-hidden'>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className='w-full'
                    />
                  </div>
                </a>
                <h5 className='font-semibold text-xl text-dark mt-5 mb-3'>
                  {item.title}
                </h5>
                <p className='font-medium text-base text-secondary'>
                  {item.description}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
