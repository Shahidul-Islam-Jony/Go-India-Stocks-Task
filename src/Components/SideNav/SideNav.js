import { IoPersonSharp, IoNotifications } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { TbArrowUpRight } from "react-icons/tb";
import { BiSolidDollarCircle } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { MdChat } from "react-icons/md";
import Link from "next/link";

const SideNav = () => {
  return (
    <div>
      <div className="bg-blue-950 min-h-screen text-white">
        <div className="flex items-center gap-4 p-4 border-b-2">
          <IoPersonSharp className="text-xl" />
          <p className="font-bold">Hello,User</p>
          <div className="flex md:ml-5 relative">
            <IoNotifications className="text-2xl" />
            <GoDotFill className="absolute text-red-500 right-0" />
          </div>
        </div>
        <div className="flex flex-col p-4">
          <Link href="#" className="flex items-center md:gap-2 mb-4">
            <MdChat className="md:text-xl" /> Disscussion Fourm
            <FaCaretDown className="" />
          </Link>
          <Link href="#" className="flex items-center gap-2 mb-4">
            <span className="relative flex">
              <BiSolidDollarCircle className="md:text-lg"/>
              <TbArrowUpRight className="absolute left-2 bottom-2"/>
            </span>
            Market Stories
          </Link>
          <Link href="#" className="mb-4 pl-6">Sentiment</Link>
          <Link href="#" className="mb-4 pl-6">Market</Link>
          <Link href="#" className="mb-4 pl-6">Sector</Link>
          <Link href="#" className="mb-4 pl-6">Watchlist</Link>
          <Link href="#" className="mb-4 pl-6">Events</Link>
          <Link href="#" className="mb-4 pl-6">News/Interview</Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
