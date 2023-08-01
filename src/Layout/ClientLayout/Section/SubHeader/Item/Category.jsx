import React, { useState } from "react";
import { category } from "../../../../../Utils/temp";
import { BiChevronDown } from "react-icons/bi";
import { useStateProvider } from "../../../../../Context/StateProvider";

const Category = () => {
  const [isSelected, setSelected] = useState();
  const [isDropDown, setIsDropDown] = useState(false);
  const { setIsSort, isSort } = useStateProvider();
  console.log(isSort);
  const HandleSelect = (idx, name) => {
    setIsSort(name);
    if (isSelected !== idx) {
      setIsDropDown(true);
      setSelected(idx);
    } else {
      setIsDropDown(!isDropDown);
      setSelected(idx);
    }
  };

  const HandleClick = (name) => {
    setIsDropDown(false);
    setIsSort(name);
  };

  return (
    <div className="font-LexendDeca">
      <h3 className="uppercase font-bold text-blue-500 text-[25px] text-center">
        Danh mục
      </h3>
      <div className="flex flex-col overflow-y-scroll h-[300px]">
        {category.map((items, idx) => (
          <div>
            <div
              className="flex items-center justify-between py-4 px-4 border-b cursor-pointer"
              onClick={() => HandleSelect(idx, items.params)}
            >
              <div className="uppercase hover:text-main">{items.name}</div>
              <BiChevronDown
                className={`${
                  isDropDown && isSelected === idx && "-rotate-90"
                } duration-300`}
              />
            </div>

            <div
              className={`${
                isDropDown && isSelected === idx ? " h-auto" : " h-0"
              } w-full overflow-hidden duration-500 bg-gray-300 cursor-pointer`}
            >
              {items.children.map((items, idx) => (
                <>
                  <div
                    className="py-2 ml-4 text-[14px] text-gray-500 hover:text-white uppercase"
                    onClick={() => HandleClick(items.params)}
                  >
                    {items.name}
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
