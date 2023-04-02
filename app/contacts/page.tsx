"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "../components/heading/page1";
import Form from "../components/form/page1";

type Props = {};

export default function GetINTouch({}: Props) {
  const router = useRouter();
  return (
    <main className="bground w-full flex flex-col items-center lg:items-stretch justify-start lg:flex-row">
      <section className="  flex  w-40 h-40 lg:w-[30%] lg:h-screen relative lg:fixed">
        <Image
          className=" rounded-full lg:rounded-none p-2 "
          src="/image/aa_pic.jpg"
          alt="background image"
          fill
        />
      </section>

      <section className=" lg:bg-gray-800 lg:w-[68.5%] flex flex-col flex-wrap pt-4 h-auto lg:ml-[30.3%] ">
        <Head head="GETIN" colorHead="TOUCH" />
        <div className=" lg:w-full relative  flex flex-row flex-wrap justify-center m-2">
          <div className="border-t border-solid border-gray-600 lg:w-80 h-0 relative mt-6"></div>
          <Image
            className=" mx-2"
            src="image/mail.svg"
            alt="about"
            width={40}
            height={40}
            priority
          />
          <div className="border-t border-solid border-gray-600 lg:w-80 h-0 relative mt-6"></div>
        </div>
        <div
          onClick={() => router.push("/")}
          className=" w-12 h-12 right-4 top-4 fixed cursor-pointer"
        >
          <Image
            className=" mx-2"
            src="/image/cros.svg"
            alt="about"
            width={40}
            height={40}
            priority
          />
        </div>
        <span className=" w-full flex flex-col lg:flex-row flex-wrap">
          <section className=" w-full lg:w-[30%] bground border border-gray-700 h-auto mt-6 lg:m-6">
            <div className="flex flex-col">
              <div className=" font-semibold text-amber-500 text-2xl font-inter m-4">
                PHONE
              </div>
              <div className="flex">
                <Image
                  className=" mx-2"
                  src="image/phone.svg"
                  alt="about"
                  width={20}
                  height={20}
                  priority
                />
                <div className="text-lg mx-2 text-white">+92 334 5111684</div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className=" font-semibold text-amber-500 text-2xl font-inter m-4">
                EMAIL
              </div>
              <div className="flex">
                <Image
                  className=" mx-2"
                  src="image/email.svg"
                  alt="about"
                  width={20}
                  height={20}
                  priority
                />
                <div className="text-lg mx-2 text-white">
                  anwarulislam684@gmail.com
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className=" font-semibold text-amber-500 text-2xl font-inter m-4">
                SKYPE
              </div>
              <div className="flex">
                <Image
                  className=" mx-2"
                  src="image/skype.svg"
                  alt="about"
                  width={20}
                  height={20}
                  priority
                />
                <div className="text-lg mx-2 text-white">anu684</div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className=" font-semibold text-amber-500 text-2xl font-inter m-4">
                ADDRESS
              </div>
              <div className="flex">
                <Image
                  className=" mx-2"
                  src="image/map.svg"
                  alt="about"
                  width={30}
                  height={30}
                  priority
                />
                <div className="text-lg mx-2 text-white">
                  Islamabad, Pakistan
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className=" font-semibold text-amber-500 text-2xl font-inter m-4">
                SOCIAL PROFILE
              </div>
              <div className="flex justify-evenly pb-6 ">
                <Image
                  className="  cursor-pointer"
                  src="image/facebook.svg"
                  alt="about"
                  width={30}
                  height={30}
                  priority
                />

                <Image
                  className=" cursor-pointer"
                  src="image/linkedin.svg"
                  alt="about"
                  width={30}
                  height={30}
                  priority
                />
                <Image
                  className=" cursor-pointer"
                  src="image/twitter.svg"
                  alt="about"
                  width={30}
                  height={30}
                  priority
                />
                <Image
                  className=" cursor-pointer"
                  src="image/googleplus.svg"
                  alt="about"
                  width={30}
                  height={30}
                  priority
                />
              </div>
            </div>
          </section>
          <section className=" w-full lg:w-[60%] h-auto mt-6">
            <h1 className=" uppercase font-bold text-white lg:ml-10 mb-5">Feel free to drop me a line</h1>
            <p className="text-white lg:ml-10">If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.</p>
            <Form link="/about-icon.svg" label="YOUR NAME" />
            <Form link="image/mail.svg" label="EMAIL" />
            <Form link="image/message.svg" label="YOUR MESSAGE" />
            <div className=" px-10 py-1 mb-4 lg:mb-0 bg-amber-500 cursor-pointer lg:mx-10 text-center lg:w-60">
              SEND MESSAGE
            </div>
          </section>
        </span>
      </section>
    </main>
  );
}
