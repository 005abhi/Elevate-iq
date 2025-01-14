import React from "react";
import { Sidebar } from "../../../components/Sidebar";

const Page = () => {
  return (
    <main className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="byte"></div>
    </main>
  );
};

export default Page;
