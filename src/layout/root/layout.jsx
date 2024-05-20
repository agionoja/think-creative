import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
        <div className="text-x5l uppercase">Route is set up!</div>
        <div className="text-x5l uppercase"></div>

      <Outlet />
    </div>
  );
};

export default RootLayout;
