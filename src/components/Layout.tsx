// components/Layout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-y-scroll">
      <Navbar />

      <main className="pt-16">
        <Outlet />
      </main>

      {/* 可选：在最下方添加一个页脚 Footer，使网站更像真实应用
        <footer className="bg-gray-800 text-white p-4 text-center text-sm">
            © 2025 ABC ESG-Link. All rights reserved.
        </footer> 
      */}
    </div>
  );
};

export default Layout;
