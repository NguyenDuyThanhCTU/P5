import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { slide } from "../../../../../Utils/temp";
import { useData } from "../../../../../Context/DataProviders";

const Slide = () => {
  const { Slides } = useData();
  return (
    <div className="col-span-2">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper -z-10"
      >
        {Slides.map((items) => (
          <>
            <SwiperSlide>
              <img
                src={items.image}
                alt="banner"
                className="object-cover h-[350px]  w-full z-0"
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
