import { Input } from "antd";
import React from "react";
import { useData } from "../../../Context/DataProviders";

const Footer = () => {
  const { TradeMarkData, ContactData, SocialMedia } = useData();
  return (
    <div className="font-LexendDeca">
      <div className="grid d:grid-cols-3 p:p-10  d:p-16 gap-10 p:grid-cols-1">
        <div>
          <h3 className="uppercase font-bold text-red-500 text-[18px]">
            ĐĂNG KÍ NHẬN THÔNG TIN ƯU ĐÃI VÀ XU HƯỚNG MỚI NHẤT
          </h3>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex flex-col gap-3 mb-5 ">
              <Input placeholder="Họ Tên(*)" />
              <Input placeholder="Email(*)" />
              <Input placeholder="Điện thoại(*)" />
              <textarea
                placeholder="Ý kiến khách hàng"
                className="outline-none border rounded-md p-2 w-full"
              />
            </div>
            <div>
              <span className="uppercase py-2 px-6 bg-blue-600 text-white">
                gửi đi
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold text-red-500 text-[25px]">
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
              <strong>Zalo:</strong> {}
            </p>
            <p>
              <strong>Email:</strong> {ContactData.email}
            </p>
            <p>
              <strong>Fanpage:</strong>
              {SocialMedia[2]}
            </p>
            <p>
              <strong>Youtube:</strong>
              {SocialMedia[7]}
            </p>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-bold text-red-500 text-[25px]">
            Quy định và chính sách
          </h3>
          <div className="flex flex-col gap-2 mt-2">
            <p>Chính sách vận chuyển</p>
            <p>Chính sách bảo hành và đổi trả</p>
            <p>Hướng dẫn thanh toán</p>
            <p>Điều khoản sử dụng website</p>
            <p>An toàn và bảo mật thông tin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
