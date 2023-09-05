import React, { useEffect } from "react";

import { useData } from "../../Context/DataProviders";
import { Helmet } from "react-helmet";
import Loading from "../../components/Item/Loading";
import Header from "./Section/Header";
import Hotline from "./Section/Hotline";
import OnTop from "./Section/OnTop";
import Copyright from "./Section/Copyright";
import Footer from "./Section/Footer";
import SubHeader from "./Section/SubHeader/SubHeader";
import TopFooter from "./Section/TopFooter";
import { useLocation } from "react-router-dom";

const ClientLayout = ({ children }) => {
  const { TradeMarkData } = useData();
  console.log(TradeMarkData.websiteIco);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet>
      <Loading />
      {location.pathname === "/thanh-toan" ? (
        <>
          <Header />

          <div className=" ">{children}</div>

          <Footer />
        </>
      ) : (
        <>
          <div className="relative z-50">
            <Header />
          </div>
          <div className="relative z-0">
            <SubHeader />
          </div>
          <div className=" ">{children}</div>
          <TopFooter />
          <Footer />
        </>
      )}

      <div className="relative z-50">
        <OnTop />
        <Hotline />
      </div>

      <Copyright />
    </>
  );
};

export default ClientLayout;
