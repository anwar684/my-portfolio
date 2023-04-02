"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "./components/card/page";
import NameCard from "./components/name_card/page";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bground h-screen w-full flex flex-col items-center lg:items-stretch justify-center lg:flex-row">
      <div className="  flex w-40 h-40 lg:w-[30%] lg:h-full relative">
        <Image
          className=" rounded-full lg:rounded-none p-2"
          src="/image/aa_pic.jpg"
          alt="background image"
          fill
        />
      </div>

      <div className="lg:w-[70%] flex flex-wrap justify-evenly lg:justify-between ">
        <NameCard />
        <Card title="ABOUT ME" link="/about" />
        <Card title="MY PORTFOLIO" link="/portfolio" />
        <Card title="GETIN TOUCH" link="/contacts" />
      </div>
    </div>
  );
}
