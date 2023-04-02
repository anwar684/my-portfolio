"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function NameCard({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Telecom Engineer", "Web Developer"],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="w-full h-28 lg:w-[48%] lg:h-[48%] m-2 text-white lg:pt-24 font-inter text-lg  ">
      <div className="flex justify-center w-full ">Hi There! I’m</div>
      <div className=" flex justify-center font-bold  text-3xl m-1 w-full">Anwar ul Islam</div>
      <span className="flex justify-center w-full" style={{ color: "chocolate", fontWeight: "bold" }}>{text}</span>
    </div>
  );
}
