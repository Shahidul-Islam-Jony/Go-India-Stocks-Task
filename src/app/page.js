"use client";
import Disscussion from "@/Components/Disscussion/Disscussion";
import Market from "@/Components/Market/Market";
import SideNav from "@/Components/SideNav/SideNav";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";


const Home = () => {
  const [isSideOpen, setIsSideOpen] = useState(true);     // checking for sidebar is open or not.
  const [isDisscussionOpen, setDesscussionOpen] = useState(true);
  const [isMarketOpen, setMarketOpen] = useState(false);

  const handleDisscussionOpen = () => {
    setDesscussionOpen(true);
    setMarketOpen(false);
  };
  const handleMarketOpen = () => {
    setMarketOpen(true);
    setDesscussionOpen(false);
    setIsSideOpen(false);
  };

  return (
    <div>
      {/* small devices tab */}
      <div className="flex md:hidden">
        <button className="bg-blue-900  py-4 hover:bg-blue-950 w-full hover:border-b-2 hover:border-b-red-500 text-white" onClick={() => handleDisscussionOpen()}>Disscussion Fourm</button>
        <button className="bg-blue-900 hover:bg-blue-950 w-full hover:border-b-2 hover:border-b-red-500 text-white" onClick={() => handleMarketOpen()}>Market Stories</button>
      </div>

      {/* Large devices layout */}
      <div className="hidden md:flex">
        {isSideOpen && (
          <div className="w-3/12">
            <SideNav></SideNav>
          </div>
        )}
        <div
          className={`${
            !isSideOpen && "w-8/12"
          } w-6/12 relative min-h-screen`}
        >
          <Disscussion></Disscussion>
          {isSideOpen ? (
            <button
              onClick={() => setIsSideOpen(!isSideOpen)}
              className="absolute top-48 bg-blue-950 text-white py-8"
            >
              <FaCaretLeft />
            </button>
          ) : (
            <button
              onClick={() => setIsSideOpen(!isSideOpen)}
              className="absolute top-48 bg-blue-950 text-white py-8"
            >
              <FaCaretRight />
            </button>
          )}
        </div>
        <div className={`${!isSideOpen && "md:w-4/12"} md:w-3/12`}>
          <Market></Market>
        </div>
      </div>

      {/* small devices Layout*/}
      <div className="">
        <div className="relative flex md:hidden">
          {isSideOpen && (
            <div className="absolute z-50 w-1/2">
              <SideNav></SideNav>
            </div>
          )}
          {isDisscussionOpen && (
            <div className="z-10 w-full relative min-h-screen">
              <Disscussion></Disscussion>
              {isSideOpen ? (
                <button
                  onClick={() => setIsSideOpen(!isSideOpen)}
                  className={`absolute top-44 ${
                    isSideOpen && "left-1/2"
                  } bg-blue-950 text-white py-8`}
                >
                  <FaCaretLeft />
                </button>
              ) : (
                <button
                  onClick={() => setIsSideOpen(!isSideOpen)}
                  className={`absolute top-44 ${
                    isSideOpen && "left-1/2"
                  } bg-blue-950 text-white py-8`}
                >
                  <FaCaretRight />
                </button>
              )}
            </div>
          )}
          {isMarketOpen && (
            <div className="w-full">
              <Market></Market>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
