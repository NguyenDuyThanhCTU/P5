import Login from "../components/Login/Login";
import Admin from "../components/Admin/Admin";
import DefaultLayout from "../Layout/DefaultLayout";
import Home from "../components/Client/Home/Home";
import ProductDetail from "../components/Client/ProductDetail/ProductDetail";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
// import Introduction from "../components/Client/Introduction/Introduction";
// import Contact from "../components/Client/Contact/Contact";
// import News from "../components/Client/News/News";
// import Designs from "../components/Client/Designs/Designs";
// import PostDesign from "../components/Client/Post/PostDesign";
// import PostDetail from "../components/Client/Post/PostDetail";
// import Construction from "../components/Client/Construction/Construction";
// import PostConstruction from "../components/Client/Post/PostConstruction";
import ClientLayout from "../Layout/ClientLayout/ClientLayout";

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
    path: "/product/:id",
    component: ProductDetail,
    Layout: ClientLayout,
  },
];
