import { Outlet } from "react-router-dom";
import MainHeader from "@/layout/root/components/MainHeader.jsx";
import Footer from "@/layout/root/components/Footer.jsx";

const RootLayout = () => {
  return (
    <div>
      <div className="text-x5l mx-auto max-w-screen-2xl uppercase"></div>
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
