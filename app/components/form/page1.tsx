import React from "react";
import Image from "next/image";

type Props = {
  link: string,
  label: string,
};

export default function Form(props: Props) {
  return (
    <div className="relative w-[80%] lg:ml-10 my-10">
      <div className=" flex ">
        <Image
        className="mr-3"
          src={props.link}
          alt="profile logo"
          width={12}
          height={12}
          priority
        />
        <label
          htmlFor="name"
          className=" px-1 text-gray-300 text-xs uppercase "
        >
          {props.label}
        </label>
      </div>

      <input
        type="text"
        id="name"
        name="name"
        className="border-b border-gray-500 focus:border-amber-500 focus:outline-none bg-transparent w-full h-10 text-lg text-white"
      />
    </div>
  );
}
