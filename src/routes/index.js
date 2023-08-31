import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../components/Client/Home/Home";
import ProductDetail from "../components/Client/ProductDetail/ProductDetail";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";

import ClientLayout from "../Layout/ClientLayout/ClientLayout";
import Cart from "../components/Client/Cart/Cart";

export const AllRoutes = [
  {
    path: "/login",
    component: Login,
    Layout: DefaultLayout,
  },
  {
    path: "/admin",
    component: Admin,
    Layout: AdminLayout,
  },
  {
    path: "/",
    component: Home,
    Layout: ClientLayout,
  },
  {
    path: "/san-pham/:id",
    component: ProductDetail,
    Layout: ClientLayout,
  },
  {
    path: "/thanh-toan",
    component: Cart,
    Layout: ClientLayout,
  },
];
