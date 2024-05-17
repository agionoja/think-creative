import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      {/* <div className="text-x5l uppercase">Route is set up!</div> */}
      <Outlet />
    </div>
  );
};

export default RootLayout;
