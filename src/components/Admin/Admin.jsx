import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthProviders";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";

import Sidebar from "./Sidebar/Sidebar";
import { RxCrossCircled } from "react-icons/rx";
import { FaList } from "react-icons/fa";

import { useStateProvider } from "../../Context/StateProvider";

import Content from "../Admin/Content/Content";
import AddPost from "../Admin/Content/Post/AddPost/AddPost";
import AddType from "./Item/AddType/AddType";
import Profile from "./Header/Profile/Profile";
import AddProduct from "./Item/AddProduct/AddProduct";
import ProductDetail from "./Item/ProductDetail";

const Admin = () => {
  const { verify } = useAuth();
  const { isUploadProduct } = useStateProvider();
  const [Hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!verify) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="grid grid-flow-col font-LexendDeca relative ">
      <div
        className={`duration-300 absolute left-0 right-0  ${
          isUploadProduct === "" ? "h-0" : "h-[100vh]"
        }`}
      >
        {isUploadProduct === "Tin Tức Khác" ? (
          <AddPost type="Other" />
        ) : isUploadProduct === "Tin tức công ty" ? (
          <AddPost type="Company" />
        ) : isUploadProduct === "add-types" ? (
          <AddType />
        ) : isUploadProduct === "add-product" ? (
          <AddProduct />
        ) : isUploadProduct === "product-detail" ? (
          <ProductDetail />
        ) : isUploadProduct === "profile" ? (
          <Profile type="Home" />
        ) : null}
      </div>

      <div className="flex w-full">
        <div className="overflow-hidden flex-[20%]">
          <Sidebar />
        </div>
        <div className="flex-[80%]  bg-[#292929] ">
          <Header />
          <div>
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
