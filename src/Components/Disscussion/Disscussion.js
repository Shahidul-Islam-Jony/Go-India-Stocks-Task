import Image from "next/image";
import userIcon from "../../assests/images/user.png";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { GoComment } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";

const Disscussion = () => {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className="bg-base-100 pl-4 min-h-screen pt-2">
        <h1 className="text-red-600 font-bold text-xl uppercase bg-gray-300 w-fit p-2 rounded-sm">
          Disscussion Fourm
        </h1>

        <div className="mt-4 flex flex-col gap-6">
          {data.map((item, idx) => (
            <div className="shadow-lg rounded-lg p-2 mx-2" key={idx}>
              <div className="flex gap-2">
                <Image
                  src={userIcon}
                  className="bg-blue-500 w-14 h-14 rounded-full"
                  width={50}
                  height={50}
                  alt="user pic"
                ></Image>
                <div className="flex flex-col text-sm justify-center md:text-base">
                  <div className="flex gap-2">
                    <h3 className="text-lg font-medium">Lorem Ipsum</h3>
                    <div className="flex flex-1 justify-between">
                      <p className="bg-blue-600 h-fit px-2 text-white rounded-xl">
                        Sector 2
                      </p>
                      <p className="text-blue-500">2 min ago</p>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem ipsum is
                  </p>
                  <div className="flex justify-between text-sm md:text-base">
                    <div className="flex items-center md:gap-1">
                      <FaRegHeart />
                      <p>2k</p>
                    </div>
                    <div className="flex items-center md:gap-1">
                      <LuEye />
                      <p>2k</p>
                    </div>
                    <div className="flex items-center md:gap-1">
                      <GoComment />
                      <p>2k Comments</p>
                    </div>
                    <div className="flex items-center md:gap-1">
                      <FiShare2 />
                      <p>Share</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Disscussion;
