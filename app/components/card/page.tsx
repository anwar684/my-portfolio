"use client";
import React from "react"
import { useRouter } from "next/navigation";

type Props = {
  title : string,
  link: string,
};

export default function Card(props: Props) {

  const router = useRouter();
  return (
    <div onClick={() => router.push(props.link)} className=" m-2 card-color shadow-md font-inter text-2xl  text-white  font-bold hover:text-amber-700 flex text-center w-full h-28 flex-col lg:w-[48%] lg:h-[47%] lg:flex justify-center cursor-pointer">{props.title}</div>
  );
}
