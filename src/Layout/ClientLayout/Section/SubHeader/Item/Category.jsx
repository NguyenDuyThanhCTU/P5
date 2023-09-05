import React, { useState } from "react";
import { category } from "../../../../../Utils/temp";
import { BiChevronDown } from "react-icons/bi";
import { useStateProvider } from "../../../../../Context/StateProvider";
import { useData } from "../../../../../Context/DataProviders";
import { Link } from "react-scroll";

const Category = () => {
  const [isSelected, setSelected] = useState();
  const [isDropDown, setIsDropDown] = useState(false);
  const { productTypes } = useData();
  const { setSearchKey } = useStateProvider();
  const HandleSelect = (idx) => {
    if (isSelected !== idx) {
      setIsDropDown(true);
      setSelected(idx);
    } else {
      setIsDropDown(!isDropDown);
      setSelected(idx);
    }
  };

  const HandleClick = (keywork) => {
    setSearchKey(keywork);
  };

  return (
    <div className="font-LexendDeca text-white">
      <h3 className="uppercase font-bold text-blue-500 text-[25px] text-center ">
        Danh mục
      </h3>
      <div className="flex flex-col overflow-y-scroll h-[300px]">
        {productTypes.map((items, idx) => (
          <div>
            <div className="flex items-center justify-between py-4 px-4 border-b cursor-pointer">
              <Link
                to="product"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => HandleClick(items.name)}
              >
                <div className="uppercase hover:text-main duration-300">
                  {items.name}
                </div>
              </Link>
              {items.children.length > 0 && (
                <div onClick={() => HandleSelect(idx)}>
                  {" "}
                  <BiChevronDown
                    className={`${
                      isDropDown && isSelected === idx && "-rotate-90"
                    } duration-300`}
                  />
                </div>
              )}
            </div>

            <div
              className={`${
                isDropDown && isSelected === idx ? " h-max" : " h-0"
              } w-full overflow-hidden duration-500 bg-gray-300 cursor-pointer`}
            >
              {items.children.map((items, idx) => (
                <Link to="product" spy={true} smooth={true} duration={500}>
                  <div
                    className="py-2 ml-4 text-[14px] text-gray-500 hover:text-white uppercase duration-300"
                    onClick={() => HandleClick(items.name)}
                  >
                    {items.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
