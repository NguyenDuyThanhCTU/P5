import React, { useState } from "react";

import { Link as ScrollLink } from "react-scroll";
import { Link, Link as RouterLink } from "react-router-dom";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

import { HeaderItems } from "../../../Utils/item";
import DropDown from "../Item/DropDown";
import { useData } from "../../../Context/DataProviders";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStateProvider } from "../../../Context/StateProvider";

const Header = () => {
  const [Hidden, setHidden] = useState(false);
  const [keywork, setKeywork] = useState();
  const { TradeMarkData } = useData();
  const { setSearchKey } = useStateProvider();

  const HandleSearch = () => {
    setSearchKey(keywork);
  };

  return (
    <>
      {/* <--- Desktop ---> */}
      <div className="font-LexendDeca  bg-MainColor  shadow-blue-300 shadow-lg h-[90px] bg-white text-main z-10">
        <div className="p:hidden d:block w-full h-full  ">
          <div className="flex px-20 w-full justify-between h-full">
            <div className="flex gap-24">
              <RouterLink to="/">
                <div className="cursor-pointer">
                  <img
                    src={TradeMarkData.websiteLogo}
                    alt="logo"
                    className="w-36"
                  />
                </div>
              </RouterLink>
            </div>
            <div className="flex items-center w-[35vw] ">
              <div className="border flex items-center justify-between w-full rounded-sm text-black border-blue-600">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="p-2 w-full outline-none"
                  value={keywork}
                  onChange={(e) => setKeywork(e.target.value)}
                />
                <ScrollLink
                  to="product"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {" "}
                  <div
                    className="p-2 bg-blue-500 w-[100px] cursor-pointer text-white hover:bg-blue-600 duration-300 text-center"
                    onClick={() => HandleSearch()}
                  >
                    Tìm kiếm
                  </div>
                </ScrollLink>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[30px] cursor-pointer text-blue-700">
              <Link to="/thanh-toan">
                <AiOutlineShoppingCart />
              </Link>
            </div>
          </div>
        </div>

        <div className="p:block d:hidden ">
          <div className="justify-between mx-5 flex items-center">
            <div className="py-2">
              <RouterLink to="/">
                <img
                  src={TradeMarkData.websiteLogo}
                  alt="logo"
                  className="w-14 object-cover"
                />
              </RouterLink>
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
