import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import lotusvid from '/images/LOTUS.mp4'


// Import Swiper styles
import 'swiper/css';


const Intro = () => {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="px-10 pb-[50px] pt-[30px] flex justify-center items-center flex-col lg:flex-row gap-6">
      <div className="text text-center flex flex-col gap-4 lg:text-left w-[100%] lg:w-[50%]">
        <h1 className="text-lg lg:text-2xl lg:leading-loose text-[#d5934d]">
          Experience Ilorin's finest short-term accommodations. In proximity to all the hotspots,
          it comes offering a choice between studio, one-bedroom, and two-bedroom
          apartments.
        </h1>
        <span className="leading-loose text-[#1B1D42]/50 hidden md:flex">
          The studio, ideal for individuals or couples, provides an
          efficient living space. Our
          one-bedroom apartment offers a comfortable retreat, while our
          two-bedroom unit serves as the perfect getaway for families or groups.
          All units come equipped with modern amenities such as air conditioning,
          WiFi, and free entertainment.
        </span>
      </div>
      <div className="image w-[100%] lg:w-[50%] h-full">
        {/* <div className="w-full h-full bg-black overflow-hidden rounded-md">
            <img
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="object-cover w-[100%] h-[100%]"
            />
      </div> */}

<Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-fit rounded-md"
    >
      <SwiperSlide className="w-full h-full">
      <div
            className="rounded-md overflow-hidden cursor-pointer"
            onClick={() => setVideoModalOpen(true)}
          >
            <video
            src={lotusvid}
              className="object-cover h-[100%] w-[100%]"
              autoplay
              loop
              muted
              autoPlay
            />
          </div>
      </SwiperSlide>
      {/* <SwiperSlide className="w-full h-full">
        <div className="w-full h-full overflow-hidden rounded-md">
            <img
            src={lotusvid}
            alt=""
            className="object-cover w-[100%] h-[100%]"
            />
        </div>
      </SwiperSlide> */}
    </Swiper>
      </div>

      {videoModalOpen && (
  <div className="fixed z-50 top-0 left-0 w-full h-full flex flex-col p-5 items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300">
    <video

          src={lotusvid}
          alt="external-close-compact-ui-essential-vol2-compact-zufarizal-robiyanto"
          className="object-cover h-[40%] md:h-[80%] w-[100%] rounded-md"
          loop
          autoPlay

        />
      <button
        className="flex gap-2 m-3 h-fit rounded-full bg-white/10 hover:bg-gray-100/10 ease-in duration-300 items-center p-2"
        onClick={() => setVideoModalOpen(false)}
        >
        <img width="28" height="28" src="https://img.icons8.com/sf-black/32/FFFFFF/delete-sign.png" alt="delete-sign"/>
        <span className="font-bold text-white ">close</span>
      </button>
    </div>
)}
    </div>

  )
};

export default Intro;
