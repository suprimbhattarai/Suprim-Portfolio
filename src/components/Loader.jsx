import React from "react";
import bgimg from "../assets/bgone.png";

const Loader = () => {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-50"  >
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-8 border-black border-t-transparent rounded-full animate-spin"></div>
        <h1 className="mt-4 text-black italic font-bold text-2xl">Wait for SUPRIM</h1>
      </div>
    </div>
  );
};

export default Loader;
