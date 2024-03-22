"use client";
import Disscussion from "@/Components/Disscussion/Disscussion";
import Market from "@/Components/Market/Market";
import SideNav from "@/Components/SideNav/SideNav";
import { useState } from "react";

const page = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [isDisscussionOpen, setDesscussionOpen] = useState(true);
  const [isMarketOpen, setMarketOpen] = useState(false);

  const handleDisscussionOpen=()=>{
    setDesscussionOpen(true);
    setMarketOpen(false);
  }
  const handleMarketOpen=()=>{
    setMarketOpen(true);
    setDesscussionOpen(false);
  }

  return (
    <div>
      <div className="flex gap-4 md:hidden">
        <button onClick={() =>handleDisscussionOpen()}>
          Disscussion
        </button>
        <button onClick={() => handleMarketOpen()}>
          Market
        </button>
      </div>
      <div className="hidden md:flex">
        {isSideOpen && (
          <div className="md:w-2/12">
            <SideNav></SideNav>
          </div>
        )}
        <div
          className={`${
            !isSideOpen && "md:w-8/12"
          } md:w-7/12 relative min-h-screen`}
        >
          <Disscussion></Disscussion>
          <button
            onClick={() => setIsSideOpen(!isSideOpen)}
            className="absolute top-1/2"
          >
            open
          </button>
        </div>
        <div className={`${!isSideOpen && "md:w-4/12"} md:w-3/12`}>
          <Market></Market>
        </div>
      </div>

      {/* small devices */}
      <div className="md:hidden">
        {isSideOpen && (
          <div className="md:w-2/12">
            <SideNav></SideNav>
          </div>
        )}
        {isDisscussionOpen && (
          <div
            className={`${
              !isSideOpen && "md:w-8/12"
            } md:w-7/12 relative min-h-screen`}
          >
            <Disscussion></Disscussion>
            <button
              onClick={() => setIsSideOpen(!isSideOpen)}
              className="absolute top-1/2"
            >
              open
            </button>
          </div>
        )}
        {isMarketOpen && (
          <div className={`${!isSideOpen && "md:w-4/12"} md:w-3/12`}>
            <Market></Market>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
