"use client";
import Disscussion from "@/Components/Disscussion/Disscussion";
import Market from "@/Components/Market/Market";
import SideNav from "@/Components/SideNav/SideNav";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

const Home = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);
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
      <div className="flex gap-4 md:hidden">
        <button onClick={() => handleDisscussionOpen()}>Disscussion</button>
        <button onClick={() => handleMarketOpen()}>Market</button>
      </div>

      {/* Large devices layout */}
      <div className="hidden md:flex">
        {isSideOpen && (
          <div className="md:w-3/12">
            <SideNav></SideNav>
          </div>
        )}
        <div
          className={`${
            !isSideOpen && "md:w-7/12"
          } md:w-6/12 relative min-h-screen`}
        >
          <Disscussion></Disscussion>
          {isSideOpen ? (
            <button
              onClick={() => setIsSideOpen(!isSideOpen)}
              className="absolute top-1/2 bg-blue-950 text-white py-8"
            >
              <FaCaretLeft />
            </button>
          ) : (
            <button
              onClick={() => setIsSideOpen(!isSideOpen)}
              className="absolute top-1/2 bg-blue-950 text-white py-8"
            >
              <FaCaretRight />
            </button>
          )}
        </div>
        <div className={`${!isSideOpen && "md:w-3/12"} md:w-3/12`}>
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
                  className={`absolute top-1/2 ${
                    isSideOpen && "left-1/2"
                  } bg-blue-950 text-white py-8`}
                >
                  <FaCaretLeft />
                </button>
              ) : (
                <button
                  onClick={() => setIsSideOpen(!isSideOpen)}
                  className={`absolute top-1/2 ${
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
