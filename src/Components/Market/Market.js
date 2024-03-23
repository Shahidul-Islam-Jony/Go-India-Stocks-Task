import Image from "next/image";
import sunsetImg from "../../assests/images/mountain.jpg";

const Market = () => {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div className="bg-base-100 pl-4 min-h-screen pt-2">
        <div>
          <h1 className="text-red-600 font-bold text-xl uppercase bg-gray-300 w-fit p-2 rounded-sm">
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
                <h2>The Coldest Sunset</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem ipsum is
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
