import Image from "next/image";
import sunsetImg from "../../assests/images/mountain.jpg";

const Market = () => {
  const data = [1, 2, 3, 4];  //array for data mapping to show market storage data
  return (
    <div>
      <div className="bg-base-100 pl-4 min-h-screen pt-2">
        <div>
          <h1 className="hidden md:block text-red-600 font-bold text-xl uppercase bg-gray-300 w-fit p-2 rounded-sm">
            Market Stories
          </h1>
          <div className="mt-3">
            {data.map((item, idx) => (
              <div key={idx} className="">
                <Image
                  className="w-full h-36 mb-2 rounded-lg"
                  src={sunsetImg}
                  width={100}
                  height={100}
                  alt="sunset Image"
                ></Image>
                <div className="pl-4 mb-4">
                  <h2 className="text-xl font-bold">The Coldest Sunset</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.Lorem ipsum is
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
