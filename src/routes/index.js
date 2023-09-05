import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../components/Client/Home/Home";
import ProductDetail from "../components/Client/ProductDetail/ProductDetail";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";

import ClientLayout from "../Layout/ClientLayout/ClientLayout";
import Cart from "../components/Client/Cart/Cart";
import Contact from "../components/Client/Contact/Contact";
import Video from "../components/Client/Video/Video";
import News from "../components/Client/News/News";
import Product from "../components/Client/ProductDetail/Product";
import PostDetail from "../components/Client/News/PostDetail";

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
  {
    path: "/lien-he",
    component: Contact,
    Layout: ClientLayout,
  },
  {
    path: "/video",
    component: Video,
    Layout: ClientLayout,
  },
  {
    path: "/tin-tuc",
    component: News,
    Layout: ClientLayout,
  },
  {
    path: "/tin-tuc/:id",
    component: PostDetail,
    Layout: ClientLayout,
  },
  {
    path: "/san-pham",
    component: Product,
    Layout: ClientLayout,
  },
];
