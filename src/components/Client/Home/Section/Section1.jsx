import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { category } from "../../../../Utils/temp";

const Section1 = () => {
  return (
    <div className="d:px-80 p:px-2 d:py-0 p:py-10">
      <div className="d:block p:hidden">
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
                  <div className="flex flex-col items-center gap-2 py-10">
                    <div className="w-[150px] h-[150px]  rounded-full ">
                      <img
                        src="https://lh5.googleusercontent.com/42SMOrt8aQFkLctdp6Q-pdiHHpE8Yeqk-hyj84Y-9ngPrQhZl6U2Xk3WtVoKvFl2oj8Pt1hfsFDTtMe7WTQXi7QMnu_C9n3bSJJTwMRcPG6aChS8JCPM4174lRq83dKI9PiOmS2XY6MgdFcKUQ"
                        alt="category"
                        className="w-full h-full rounded-full object-cover hover:scale-110 duration-300 cursor-pointer hover:border-blue-500 border-2"
                      />
                    </div>
                    <div className="font-LexendDeca text-[18px]   mt-2">
                      {items.name}
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </div>
        </Swiper>
      </div>
      <div className="d:hidden p:block ">
        <Swiper
          slidesPerView={3}
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
                  <div className="flex flex-col items-center gap-2 py-10">
                    <div className="w-[150px] h-[150px]  rounded-full ">
                      <img
                        src="https://lh5.googleusercontent.com/42SMOrt8aQFkLctdp6Q-pdiHHpE8Yeqk-hyj84Y-9ngPrQhZl6U2Xk3WtVoKvFl2oj8Pt1hfsFDTtMe7WTQXi7QMnu_C9n3bSJJTwMRcPG6aChS8JCPM4174lRq83dKI9PiOmS2XY6MgdFcKUQ"
                        alt="category"
                        className="w-full h-full rounded-full object-cover hover:scale-110 duration-300 cursor-pointer hover:border-blue-500 border-2"
                      />
                    </div>
                    <div className="font-LexendDeca text-[18px]   mt-2">
                      {items.name}
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Section1;
