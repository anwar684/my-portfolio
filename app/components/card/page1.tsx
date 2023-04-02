"use client";
import React from "react"
import { useRouter } from "next/navigation";



type Props = {

  titles : string,
  links: string,
};

export default function Card({titles , links}: Props) {

  const router = useRouter();
  return (
    <div onClick={() => router.push(links)} className=" m-2 card-color shadow-md font-inter text-2xl  text-white  font-bold hover:text-amber-700 flex text-center w-full h-28 flex-col lg:w-[48%] lg:h-[47%] lg:flex justify-center cursor-pointer">{titles}</div>
  );
}
