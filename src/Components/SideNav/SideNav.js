import { IoPersonSharp, IoNotifications } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const SideNav = () => {
  return (
    <div>
      <div className="bg-blue-950 min-h-screen text-white">
        <div className="flex items-center gap-4 p-4 border-b-2">
          <IoPersonSharp className="text-xl"/>
          <p className="font-bold">Hello,User</p>
          <div className="flex md:ml-40 relative">
            <IoNotifications className="text-2xl"/>
            <GoDotFill className="absolute text-red-500 right-0"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
