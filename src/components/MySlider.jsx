// MySlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper/modules";
import cat from '../assets/dog.jpg';
import cat2 from '../assets/cat2.jpg';
import dog1 from '../assets/Preparing-Your-Dog-for-Winter-Walks.webp';
import dog2 from '../assets/Popular.jpg';

const MySlider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      // effect="flip"
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
       <div className="w-full">
            <SwiperSlide>
         <div id="slide1" className="carousel-item relative w-full">
                <img src={cat} className="h-[500px] w-[520px] object-cover md:w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  {/* <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a> */}
                </div>
              </div>
      </SwiperSlide>
     <SwiperSlide>
         <div id="slide1" className="carousel-item relative w-full">
                <img src={cat2} className="h-[500px] w-[520px] object-cover md:w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  {/* <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a> */}
                </div>
              </div>
      </SwiperSlide>
       <SwiperSlide>
         <div id="slide1" className="carousel-item relative w-full">
                <img src={cat} className="h-[500px] w-[520px] object-cover md:w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  {/* <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a> */}
                </div>
              </div>
      </SwiperSlide>

      <SwiperSlide>
         <div id="slide1" className="carousel-item relative w-full">
                <img src={dog2} className="h-[500px] w-[520px] object-cover md:w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  {/* <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a> */}
                </div>
              </div>
      </SwiperSlide>


      <SwiperSlide>
         <div id="slide1" className="carousel-item relative w-full">
                <img src={cat} className="h-[500px] w-[520px] object-cover md:w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  {/* <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a> */}
                </div>
              </div>
      </SwiperSlide>

      <SwiperSlide>
         <div id="slide1" className="carousel-item relative w-full">
                <img src={dog1} className="h-[500px] w-[520px] object-cover md:w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  {/* <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a> */}
                </div>
              </div>
      </SwiperSlide>
       </div>
    </Swiper>
  );
};

export default MySlider;