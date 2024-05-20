import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl"></div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
