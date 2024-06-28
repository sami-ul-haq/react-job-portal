import { Outlet } from "react-router-dom";
import Navbar from "../componenets/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
