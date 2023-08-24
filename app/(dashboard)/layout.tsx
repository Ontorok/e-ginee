import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { PropsWithChildren } from "react";

type Props = {};

const DashboardLayout = ({ children }: Props & PropsWithChildren) => {
  return (
    <div className="h-full relative">
      <Sidebar />
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
