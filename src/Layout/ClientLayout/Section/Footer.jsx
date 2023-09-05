import { Input, notification } from "antd";
import React, { useState } from "react";
import { useData } from "../../../Context/DataProviders";
import { IconMapping, SocialMediaCustom } from "../../../Utils/item";

const Footer = () => {
  const { TradeMarkData, ContactData, SocialMedia } = useData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !content) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      let data = {
        Tên: name,
        Email: email,
        ĐiệnThoại: phone,
        ÝKiến: content,
      };

      const response = await fetch(
        "https://formsubmit.co/ajax/thanhnd2512@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        notification["success"]({
          message: "Thành công !",
          description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
      } else {
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };

  return (
    <div className="font-LexendDeca bg-gradient-to-tr from-blue-400 to-blue-500 text-white">
      <div className="grid d:grid-cols-3 p:p-10  d:p-16 gap-10 p:grid-cols-1">
        <div>
          <h3 className="uppercase font-bold text-red-600 underline text-[18px]">
            ĐĂNG KÍ NHẬN THÔNG TIN ƯU ĐÃI VÀ XU HƯỚNG MỚI NHẤT
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
            <div className="flex flex-col gap-3 mb-5 ">
              <input
                className="outline-none border rounded-md p-2 w-full"
                placeholder="Họ Tên(*)"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="outline-none border rounded-md p-2 w-full"
                placeholder="Email(*)"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="outline-none border rounded-md p-2 w-full"
                placeholder="Điện thoại(*)"
                onChange={(e) => setPhone(e.target.value)}
              />

              <textarea
                placeholder="Ý kiến khách hàng"
                className="outline-none border rounded-md p-2 w-full"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="uppercase py-2 px-6 bg-white text-blue-500 hover:scale-110 duration-300"
              >
                gửi đi
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3 className="uppercase font-bold text-red-600 underline text-[25px]">
            Thông tin liên hệ
          </h3>
          <div className="flex flex-col gap-2 mt-2">
            <p>
              <strong>Shop:</strong> {TradeMarkData.websiteName}
            </p>
            <p>
              <strong>Hotline:</strong> {ContactData.phone}
            </p>

            <p>
              <strong>Email:</strong> {ContactData.gmail}
            </p>
            <div>
              <strong>Kênh truyền thông:</strong>
            </div>
            <div className="flex gap-3">
              {SocialMediaCustom.map((items, idx) => {
                let Icon = IconMapping[items.icon];
                let Point = SocialMedia[items.id];
                return (
                  <div
                    key={idx}
                    className={`text-[15px] cursor-pointer border p-1 border-white text-wborder-white hover:scale-125 duration-300`}
                  >
                    {Icon && (
                      <a href={`https://${Point} `} target="_blank">
                        <Icon />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold text-red-600 underline text-[25px]">
            Quy định và chính sách
          </h3>
          <div className="flex flex-col gap-2 mt-2">
            <p className="cursor-pointer hover:underline">
              Chính sách vận chuyển
            </p>
            <p className="cursor-pointer hover:underline">
              Chính sách bảo hành và đổi trả
            </p>
            <p className="cursor-pointer hover:underline">
              Hướng dẫn thanh toán
            </p>
            <p className="cursor-pointer hover:underline">
              Điều khoản sử dụng website
            </p>
            <p className="cursor-pointer hover:underline">
              An toàn và bảo mật thông tin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
