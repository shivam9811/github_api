import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function RootLayout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
