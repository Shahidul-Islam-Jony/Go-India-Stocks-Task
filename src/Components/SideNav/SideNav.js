import { IoPersonSharp, IoNotifications } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
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
          <div className="flex md:ml-40 relative">
            <IoNotifications className="text-2xl" />
            <GoDotFill className="absolute text-red-500 right-0" />
          </div>
        </div>
        <div className="p-4">
          <Link href="#" className="flex items-center gap-2">
            <MdChat className="text-2xl" /> Disscussion Form <FaCaretDown className="ml-10 md:ml-20"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
