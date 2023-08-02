import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { ProductDetailItems } from "../../../../Utils/item";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useData } from "../../../../Context/DataProviders";

const Section1 = () => {
  const [isCombo, setIsCombo] = useState(1);
  const { ContactData } = useData();
  const onMinus = () => {
    if (isCombo > 0) {
      setIsCombo(isCombo - 1);
    }
  };

  const DataFetch = {
    name: "Ba khía ba can",
    price: "320 000",
    image:
      "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/334092632_573098178103439_6639006136047838964_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PmuCKkVfvR4AX89z6sy&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfC0vorlNoy_IYSZoWwFYOCYNgNM7OHXaWnSRJtOOvu2IQ&oe=64CF6335",
    state: true,
    material: "đang cập nhật",
    color: "đang cập nhật",
    size: "đang cập nhật",
    ingredient: "đang cập nhật",
    sold: 28,
    sale: { newprice: "160 000", percent: "50" },
    evaluate: 5,
    type: "",
    typeName: "",
    childrenType: "",
    childrenTypeName: "",
    createdAt: "July 30, 2023 at 3:42:52 PM UTC+7",
  };

  return (
    <div>
      <div className="flex d:mx-16 gap-16 font-LexendDeca d:flex-row p:flex-col p:mx-2">
        <div className="border flex-1">
          <img
            src={DataFetch.image}
            alt="product image"
            className="p-2 h-[820px]  w-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-[28px] uppercase">{DataFetch.name}</h3>
          <div className="flex gap-1 flex-col">
            {DataFetch.sale.lenth > 1 ? (
              <>
                <span className="line-through text-[14px]">
                  {DataFetch.price} VNĐ
                </span>
                <span className="text-red-600 text-[24px">
                  {DataFetch.sale.newprice} VNĐ
                </span>
              </>
            ) : (
              <>
                {" "}
                <span className="text-red-600 text-[24px]">
                  {DataFetch.price} VNĐ
                </span>
              </>
            )}
            <div className="flex gap-3 items-center">
              <div className="flex text-yellow-500 gap-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                {DataFetch.evaluate === 5 ? <BsStarFill /> : <BsStarHalf />}
              </div>
              <span className="text-gray-400 italic">
                Đã bán ({DataFetch.sold})
              </span>
            </div>
          </div>
          <div className="w-[200px] ">
            {DataFetch.state ? (
              <div className="p-3 text-green-500 border border-green-500 rounded-xl font-bold">
                Tình trạng: Còn hàng
              </div>
            ) : (
              <div className="p-3 text-red-500 border border-red-500 rounded-xl font-bold">
                Tình trạng: Hết hàng
              </div>
            )}
          </div>
          <div className="flex flex-col font-normal text-gray-500 gap-3">
            <p>
              Mua sỉ lẻ liên hệ{" "}
              <strong className="text-red-500 font-semibold">
                {ContactData.phone}
              </strong>{" "}
              để được báo giá và tư vấn.
            </p>
            <span>
              <strong className="text-black font-semibold">Chất liệu:</strong>{" "}
              {DataFetch.material}
            </span>
            <span>
              <strong className="text-black font-semibold">Màu sắc:</strong>{" "}
              {DataFetch.color}
            </span>
            <span>
              <strong className="text-black font-semibold">Kích cỡ:</strong>{" "}
              {DataFetch.size}
            </span>
            <span>
              <strong className="text-black font-semibold">Thành phần:</strong>{" "}
              {DataFetch.ingredient}.
            </span>
          </div>

          <div className="border border-blue-500   h-12 rounded-sm w-[200px] ">
            <div className="flex justify-between items-center h-full mx-5">
              <BiMinus onClick={() => onMinus()} className="cursor-pointer" />
              <input
                type="text"
                value={`Số lượng: ${isCombo}`}
                className=" focus-visible:outline-none w-full text-center border-0 px-0 py-[9px] h-auto text-13 "
              />
              <BiPlus
                onClick={() => setIsCombo(isCombo + 1)}
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="p-3 bg-blue-500 text-white hover:bg-blue-600 rounded-sm cursor-pointer">
              Thêm vào giỏ hàng
            </div>
            <div className="p-3 bg-orange-500 text-white hover:bg-orange-600 rounded-sm cursor-pointer">
              Mua ngay
            </div>
          </div>
          <div className="bg-slate-200">
            <div className="p-3 flex flex-col gap-3">
              {ProductDetailItems.map((items, idx) => (
                <>
                  <div className="flex gap-5 items-center">
                    <div className="rounded-full bg-orange-400 p-2 w-10 h-10 flex items-center justify-center">
                      <span> {idx}</span>
                    </div>
                    <p>{items.name}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
