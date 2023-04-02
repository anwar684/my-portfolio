import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "./components/card/page1";
import NameCard from "./components/name_card/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bground h-screen  flex flex-col lg:flex-row">
      <div className=" hidden md:block w-1/3 relative m-1 ">
        <Image
          className="w-1/4"
          src="/image/aa_pic.jpg"
          alt="background image"
          fill
        />
      </div>

      <div className="w-2/3 h-screen flex flex-wrap justify-center lg:justify-between">
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-200 h-48 mb-4 lg:mb-0"></div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-300 h-48 mb-4 lg:mb-0"></div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-400 h-48 mb-4 lg:mb-0"></div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-500 h-48"></div>
        </div>
      </div>
    </div>
  );
}
