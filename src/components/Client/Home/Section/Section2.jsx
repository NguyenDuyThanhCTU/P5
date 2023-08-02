import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay, FreeMode } from "swiper";
import { BsFillBookmarkFill, BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Section2 = ({ Data }) => {
  // 6 sáng
  const endPoint = new Date("2023-08-05");
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = endPoint - currentTime;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      let formattedTime = `KẾT THÚC SAU: ${hours
        .toString()
        .padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds
        .toString()
        .padStart(2, "0")}`;
      if (days > 0) {
        const newHours = 24 * days + hours;
        formattedTime = `KẾT THÚC SAU: ${newHours
          .toString()
          .padStart(2, "0")} : ${minutes
          .toString()
          .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
      }

      setTimeRemaining(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-LexendDeca">
      <div className="py-10 bg-orange-400 relative">
        <h3 className="text-center text-[28px] uppercase text-white ">
          Đang Sale
        </h3>
        <div className="mt-4 d:block p:hidden">
          <Swiper
            slidesPerView={5}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode]}
            className="mySwiper "
          >
            {Data.map((items, idx) => (
              <SwiperSlide>
                <Link to={`/product/1`}>
                  <div className="mx-4 py-4 my-8 h-full w-auto bg-white hover:scale-110 duration-500 cursor-pointer">
                    <div className=" mx-7 py-2 border flex flex-col items-center gap-2 bg-[#f0eeee]  relative">
                      <div>
                        <img
                          src={items.image}
                          alt=""
                          className="h-[249px] object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center text-gray-600 font-semibold">
                        <h4 className="uppercase hover:underline hover:text-blue-500">
                          {items.name}
                        </h4>
                        <span className="line-through text-[14px]">
                          {items.price} VNĐ
                        </span>
                        <span className="text-red-600">
                          {items.sale.newprice} VNĐ
                        </span>
                      </div>
                      <div>
                        <div className="flex text-yellow-500 gap-1">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          {items.evaluate === 5 ? (
                            <BsStarFill />
                          ) : (
                            <BsStarHalf />
                          )}
                        </div>
                        <span className="text-gray-400 italic">
                          Đã bán ({items.sold})
                        </span>
                      </div>
                      <div className="absolute top-4 right-3">
                        <img
                          src="https://ntd.vieclam24h.vn/img/price-list/label-discount.png"
                          alt="discount"
                          className="w-[100px] h-[40px]"
                        />
                        <p className="absolute top-1 right-3 text-white text-[13px]">
                          giảm {items.sale.percent} %
                        </p>
                      </div>
                      <div className="absolute top-3 left-4">
                        <BsFillBookmarkFill className="text-red-600 text-[45px] " />
                        <p className="absolute top-1 left-[7px] text-white text-[12px]">
                          SALE
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-4 d:hidden p:block">
          <Swiper
            slidesPerView={2}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[FreeMode]}
            className="mySwiper "
          >
            {Data.map((items, idx) => (
              <SwiperSlide>
                <Link to={`/product/1`}>
                  <div className="mx-4 py-4 my-8 h-full w-auto bg-white hover:scale-110 duration-500 cursor-pointer">
                    <div className=" mx-7 py-2 border flex flex-col items-center gap-2 bg-[#f0eeee]  relative">
                      <div>
                        <img
                          src={items.image}
                          alt=""
                          className="h-[249px] object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-center text-gray-600 font-semibold">
                        <h4 className="uppercase hover:underline hover:text-blue-500">
                          {items.name}
                        </h4>
                        <span className="line-through text-[14px]">
                          {items.price} VNĐ
                        </span>
                        <span className="text-red-600">
                          {items.sale.newprice} VNĐ
                        </span>
                      </div>
                      <div>
                        <div className="flex text-yellow-500 gap-1">
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          {items.evaluate === 5 ? (
                            <BsStarFill />
                          ) : (
                            <BsStarHalf />
                          )}
                        </div>
                        <span className="text-gray-400 italic">
                          Đã bán ({items.sold})
                        </span>
                      </div>
                      <div className="absolute top-4 right-3">
                        <img
                          src="https://ntd.vieclam24h.vn/img/price-list/label-discount.png"
                          alt="discount"
                          className="w-[100px] h-[40px]"
                        />
                        <p className="absolute top-1 right-3 text-white text-[13px]">
                          giảm {items.sale.percent} %
                        </p>
                      </div>
                      <div className="absolute top-3 left-4">
                        <BsFillBookmarkFill className="text-red-600 text-[45px] " />
                        <p className="absolute top-1 left-[7px] text-white text-[12px]">
                          SALE
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute -top-14 right-5 border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 cursor-pointer duration-500 rounded-lg">
          <div className="flex items-center gap-2 p-3">
            <AiOutlineClockCircle className="text-[24px]" />
            <p>{timeRemaining}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
