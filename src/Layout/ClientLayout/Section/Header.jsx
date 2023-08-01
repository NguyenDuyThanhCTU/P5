import React, { useState } from "react";

import { Link } from "react-router-dom";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

import { HeaderItems } from "../../../Utils/item";
import DropDown from "../Item/DropDown";
import { useData } from "../../../Context/DataProviders";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const [Hidden, setHidden] = useState(false);
  const { TradeMarkData } = useData();
  return (
    <>
      {/* <--- Desktop ---> */}
      <div className="font-LexendDeca  bg-MainColor  shadow-lg h-[90px] bg-white text-main">
        <div className="p:hidden d:block w-full h-full  ">
          <div className="flex px-20 w-full justify-between h-full">
            <div className="flex gap-24">
              <Link to="/">
                <div className="cursor-pointer">
                  <img
                    src={TradeMarkData.websiteLogo}
                    alt="logo"
                    className="w-36"
                  />
                </div>
              </Link>
            </div>
            <div className="flex items-center w-[35vw] ">
              <div className="border flex items-center justify-between w-full rounded-sm">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="p-2 w-full outline-none"
                />
                <div className="p-2 bg-blue-500 w-[100px] cursor-pointer">
                  Tìm kiếm
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[30px] cursor-pointer text-black">
              <AiOutlineShoppingCart />
              <AiOutlineUser />
            </div>
          </div>
        </div>

        <div className="p:block d:hidden ">
          <div className="justify-between mx-5 flex items-center">
            <div className="py-2">
              <Link to="/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/demo2512.appspot.com/o/z4523416705991_6351c6fb45a2952326e387f039a1c368.jpg?alt=media&token=e5e78444-f2ab-44cf-a88d-5964e1f96208"
                  alt="logo"
                  className="w-14 object-cover"
                />
              </Link>
            </div>
            <div>
              <div className="flex items-center text-[65px]">
                {Hidden ? (
                  <RxCross1
                    className=" text-main p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                ) : (
                  <MdOutlineFormatListBulleted
                    className=" text-main p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`${
              Hidden ? "h-screen" : "h-0 "
            } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-hidden `}
          >
            {HeaderItems.map((items) => (
              <DropDown
                content={items.name}
                link={items.link}
                setHidden={setHidden}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
