import React, { useEffect, useState } from "react";

import { useData } from "../../../Context/DataProviders";
import { IconMapping, SocialMediaCustom } from "../../../Utils/item";
import Input from "../../Admin/Item/Input";
import { notification } from "antd";
import { useStateProvider } from "../../../Context/StateProvider";

const Contact = () => {
  const { ContactData, SocialMedia } = useData();
  const { setIsRefetch } = useStateProvider();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const HandleDiscard = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setTitle("");
    setDescription("");
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!phone || !name || !email || !title || !description) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
    } else {
      let data = {
        HọTên: name,
        Email: email,
        SĐT: phone,
        ĐC: address,
        NộiDung: description,
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
        HandleDiscard();
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
    <div className="flex flex-col items-center gap-10 w-full">
      <div>
        {ContactData.location ? (
          <>
            {" "}
            <iframe
              src={ContactData.location}
              className="w-screen h-[50vh]"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </>
        ) : (
          <div className=" w-screen h-[50vh] overflow-hidden cursor-pointer">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bakhiadamdoi-8d789.appspot.com/o/Types%2Fz4649339660879_68a8e459074f2b7dd7495c01c2e9b76e.jpg?alt=media&token=4b6fcbd5-c85c-4652-85b5-0cf4020b7df9"
              alt="banner"
              className="w-full h-full hover:scale-110 duration-300 object-cover"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-5 py-5 mx-2 ">
        <h3 className="uppercase text-maincontent text-[40px] font-semibold text-center">
          Liên hệ để được tư vấn
        </h3>
        <div className="flex justify-center d:gap-32 d:flex-row p:flex-col p:gap-2">
          <div className="flex flex-col items-center">
            <p className="text-center text-[20px] font-normal text-maincontent">
              Hotline
            </p>
            <p> {ContactData.phone}</p>
          </div>
          <div>
            <p className="text-center text-[20px] font-normal text-maincontent">
              Email
            </p>
            <p className=" text-center">{ContactData.gmail} </p>
          </div>

          <div className="flex flex-col items-center">
            <h3>Kết nối với chúng tôi</h3>
            <div className="flex mt-2 gap-2">
              {SocialMediaCustom.map((items, idx) => {
                let Icon = IconMapping[items.icon];
                let Point = SocialMedia[items.id];

                return (
                  <div
                    key={idx}
                    className={`${items.style} p-2 border rounded-full hover:scale-110 duration-300 border-black hover:border-white`}
                  >
                    {Icon && (
                      <a href={`https://${Point}`} target="_blank">
                        <Icon />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-blue-800 to-blue-300 w-full text-white">
        <div className=" py-10 ">
          <h3 className="uppercase text-maincontent text-[40px] font-semibold text-center py-3 font-SVNDancing">
            Liên hệ nhanh
          </h3>
          <div className="p-2 flex  justify-center gap-5 p:flex-col d:flex-row">
            <div>
              <div className="flex flex-col gap-3 my-3">
                <p>
                  <strong>Văn phòng:</strong> {""}
                  {ContactData.address}
                </p>

                <p>
                  <strong>Hotline:</strong> {ContactData.phone}
                </p>

                <p>Để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất !</p>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bakhiadamdoi-8d789.appspot.com/o/Types%2Fz4649339660879_68a8e459074f2b7dd7495c01c2e9b76e.jpg?alt=media&token=4b6fcbd5-c85c-4652-85b5-0cf4020b7df9"
                alt="img"
                className="w-[600px]"
              />
            </div>
            <div className="border w-[400px]  ">
              <form
                onSubmit={HandleSubmit}
                className="flex flex-col gap-3 mb-5 p-3 w-full bg-white h-full shadow-xl text-black"
              >
                <Input
                  text="Họ Tên(*)"
                  Value={name}
                  setValue={setName}
                  Input={true}
                />
                <Input
                  text="Email"
                  Value={email}
                  setValue={setEmail}
                  Input={true}
                />
                <Input
                  text="Điện thoại(*)"
                  Value={phone}
                  setValue={setPhone}
                  Input={true}
                />
                <Input
                  text="Địa chỉ(*)"
                  Value={address}
                  setValue={setAddress}
                  Input={true}
                />
                <Input
                  text="Chủ đề"
                  Value={title}
                  setValue={setTitle}
                  Input={true}
                />
                <Input
                  text="Nội dung(*)"
                  Value={description}
                  setValue={setDescription}
                  Input={false}
                />
                <div className=" ">
                  <button
                    type="submit"
                    className="uppercase py-2 px-6 bg-maincontent text-white cursor-pointer hover:bg-blue-700 bg-blue-600"
                  >
                    gửi đi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
