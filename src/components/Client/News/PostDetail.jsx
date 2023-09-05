import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { getDocumentById } from "../../../Config/Services/Firebase/FireStoreDB";
import { useData } from "../../../Context/DataProviders";

const PostDetail = () => {
  const [sortData, setSortData] = useState();
  const { Posts } = useData();

  const { id } = useParams();

  useEffect(() => {
    const sort = Posts.filter((items) => items.id === id);
    if (sort) {
      setSortData(sort[0]);
    }
  }, [id, Posts]);

  const DetailPostDate = moment
    .unix(sortData?.createdAt?.seconds)
    .format("MMMM DD, YYYY");
  console.log(Posts);
  return (
    <div className="px-2 flex pt-10 font-Montserrat  justify-center bg-gradient-to-br from-blue-800 to-blue-300 text-white">
      <div className=" d:w-[1250px] py-10 p:w-auto px-2">
        <div className="  w-full  flex flex-col ">
          <div className=" pb-5 border-b flex flex-col gap-4">
            <h3 className="text-white text-[32px] font-light">
              {sortData?.title}
            </h3>
            <div className="flex gap-5">
              <div className="uppercase p-1 text-red-300 border border-red-300">
                Khác
              </div>
              <div className="flex items-center gap-1 text-white pr-5 border-r">
                <AiOutlineClockCircle />
                <p className="">{DetailPostDate}</p>
              </div>
              <div className="flex items-center gap-1 text-white">
                <AiOutlineUser />
                <p className=""> BaKhiaDamDoi</p>
              </div>
            </div>
          </div>

          <div
            className="py-10 flex flex-col gap-5 "
            dangerouslySetInnerHTML={{ __html: sortData?.content }}
          ></div>
          <div className="bg-black text-yellow-300 rounded-lg mt-5">
            <div className="p-3">
              <h3 className="text-[24px] font-bold">Bài viết khác :</h3>
              <div className="ml-5">
                {Posts.slice(0, 4).map((items, idx) => (
                  <Link to={`/tin-tuc/${items.id}`}>
                    <div className="font-LexendDeca">
                      <li className="hover:underline">{items.title}</li>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex-[45%] ">
          <h3 className="text-[#666666] text-[24px]">Tin Phổ biến</h3>
          {PostCompany?.map((items, idx) => {
            const formattedDate = moment
              .unix(items.createdAt.seconds)
              .format("MMMM DD, YYYY");

            return (
              <Link to={`/news/${items.id}`}>
                <div
                  className={`flex items-center  cursor-pointer border-b ${
                    idx === 0 ? "pb-10" : "py-10"
                  }`}
                >
                  <div className="flex-[30%] h-[155px]">
                    <img
                      src={items.image}
                      alt="postsimage"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="pl-6 flex flex-col gap-2 flex-[70%]">
                    <h3>{items.title}</h3>
                    <div className="flex items-center gap-1 text-gray-400">
                      <AiOutlineClockCircle />
                      <p className="">{formattedDate}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default PostDetail;
