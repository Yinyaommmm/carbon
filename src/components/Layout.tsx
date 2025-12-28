// components/Layout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Navbar />

      <main className="pt-16">
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
