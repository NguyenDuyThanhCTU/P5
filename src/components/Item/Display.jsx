import { Empty } from "antd";
import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

const Display = ({ Data, title, background }) => {
  return (
    <div
      className={`py-10 font-Montserrat ${background} bg-no-repeat bg-cover`}
    >
      {Data.length === 0 ? (
        <>
          {" "}
          <h3 className="text-center text-[28px] uppercase text-black font-semibold">
            {title}
          </h3>{" "}
          <div className="text-white min-h-screen flex justify-center items-center">
            <Empty />
          </div>
        </>
      ) : (
        <>
          {" "}
          <div>
            <h3 className="text-center text-[28px] uppercase text-white font-semibold">
              {title}
            </h3>
            <div className="grid d:grid-cols-4 p:grid-cols-2  d:grid-rows-3 p:grid-rows-6 gap-5 d:mx-20 mt-5 p:mx-2">
              {Data.map((items, idx) => (
                <Link to={`/san-pham/${items.id}`}>
                  <div className="border bg-[rgba(255,255,255,0.88)] p:h-[300px] d:h-[550px]  cursor-pointer">
                    <div className="p-5 flex flex-col items-center gap-3">
                      <div className="d:h-[380px] p:h-[150px] flex items-center justify-center overflow-hidden">
                        <img
                          src={items.image}
                          alt="product"
                          className="w-full h-full hover:scale-105 duration-500"
                        />
                      </div>
                      <div className="flex flex-col items-center text-gray-600 font-semibold ">
                        <h4 className="uppercase hover:underline hover:text-blue-500 truncate1">
                          {items.title}
                        </h4>
                        <span className="text-red-600">{items.price} VNĐ</span>
                      </div>
                      <div className="">
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
                          Đã bán ({items.access})
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Display;
