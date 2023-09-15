import { ILayout } from "@/lib/Types";
import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

const DashboardLayout = ({ children }: ILayout) => {
  return (
    <>
      <div className="flex">
        <div className="flex-col grow-1"> 
          <Sidebar />
        </div>
        <div className="flex flex-col grow-[2]">
          <main className="py-8 px-14 min-h-[93vh]">
            <TopBar />
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
