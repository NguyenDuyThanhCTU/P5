import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { category } from "../../../../Utils/temp";

const Section1 = () => {
  return (
    <div className="px-80">
      <Swiper
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <div>
          {category.map((items, idx) => (
            <>
              <SwiperSlide>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-[150px] h-[150px]  rounded-full ">
                    <img
                      src="https://lh5.googleusercontent.com/42SMOrt8aQFkLctdp6Q-pdiHHpE8Yeqk-hyj84Y-9ngPrQhZl6U2Xk3WtVoKvFl2oj8Pt1hfsFDTtMe7WTQXi7QMnu_C9n3bSJJTwMRcPG6aChS8JCPM4174lRq83dKI9PiOmS2XY6MgdFcKUQ"
                      alt="category"
                      className="w-full h-full rounded-full object-cover border-blue-500 border-4"
                    />
                  </div>
                  <div>{items.name}</div>
                </div>
              </SwiperSlide>
            </>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Section1;
