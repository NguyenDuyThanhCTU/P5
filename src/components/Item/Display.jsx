import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

const Display = ({ Data, title, background }) => {
  return (
    <div
      className={`py-10 font-Montserrat ${background} bg-no-repeat bg-cover`}
    >
      <div>
        <h3 className="text-center text-[28px] uppercase text-black font-semibold">
          {title}
        </h3>
        <div className="grid d:grid-cols-4 p:grid-cols-2  d:grid-rows-3 p:grid-rows-6 gap-5 d:mx-20 mt-5 p:mx-2">
          {Data.map((items, idx) => (
            <Link to="product/1">
              <div className="border bg-white  hover:scale-105 duration-500 cursor-pointer">
                <div className="p-5 flex flex-col items-center gap-3">
                  <div>
                    <img
                      src={items.image}
                      alt="product"
                      className="h-[380px]"
                    />
                  </div>
                  <div className="flex flex-col items-center text-gray-600 font-semibold ">
                    <h4 className="uppercase hover:underline hover:text-blue-500">
                      {items.name}
                    </h4>
                    <span className="text-red-600">{items.price} VNĐ</span>
                  </div>
                  <div className="">
                    <div className="flex text-yellow-500 gap-1">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      {items.evaluate === 5 ? <BsStarFill /> : <BsStarHalf />}
                    </div>
                    <span className="text-gray-400 italic">
                      Đã bán ({items.sold})
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
