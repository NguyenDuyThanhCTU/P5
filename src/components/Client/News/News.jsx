import React from "react";
import { useData } from "../../../Context/DataProviders";
import { AiOutlineClockCircle } from "react-icons/ai";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const News = () => {
  const { Posts } = useData();

  return (
    <div className="mt-5 min-h-screen bg-gradient-to-br from-blue-800 to-blue-300 text-white d:pt-10 p:pt-0 flex justify-center">
      <div className="d:w-[1250px]">
        <h3 className="w-full flex justify-center items-center font-LexendDeca  text-[50px] ">
          Tin tức
        </h3>
        <div className="grid gap-10 font-Montserrat grid-cols-1 items-center justify-center">
          {Posts.map((items, idx) => {
            const formattedDate = moment
              .unix(items.createdAt.seconds)
              .format("MMMM DD, YYYY");
            return (
              <Link to={`/tin-tuc/${items.id}`} className="cursor-pointer ">
                <div className="flex gap-5 border-b pb-4">
                  <div>
                    <div className="w-20 h-20 overflow-hidden flex-[10%]">
                      <img
                        src={items.image}
                        alt=""
                        className="w-full h-full hover:scale-110 duration-300 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-[90%]">
                    <h3 className="text-[18px] hover:text-mainpink truncate1">
                      {items.title}
                    </h3>

                    <div className="flex items-center gap-1 text-white">
                      <AiOutlineClockCircle />
                      <p className="">{formattedDate}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
