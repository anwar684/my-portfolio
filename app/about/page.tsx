import React from "react";
import Image from "next/image";
import Head from "../components/heading/page1";
import styles from "./page.module.css";
import Tabs from "../components/Tabs/page";
import { useRouter } from "next/navigation";
type Props = {};

export default function About({}: Props) {
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

      <section className=" lg:bg-gray-800 lg:w-[68.5%] flex flex-col flex-wrap m-2 pt-4 h-auto lg:ml-[30.3%] ">
        <Head head="ABOUT" colorHead="ME" />
        <div className=" lg:w-full relative  flex flex-row flex-wrap justify-center m-2">
          <div className="border-t border-solid border-gray-600 lg:w-80 h-0 relative mt-6"></div>
          <Image
            className=" mx-2"
            src="/about.svg"
            alt="about"
            width={40}
            height={40}
            priority
          />
          <div className="border-t border-solid border-gray-600 lg:w-80 h-0 relative mt-6"></div>
        </div>
        <div className="m-4 flex flex-wrap font-inter text-white">
          <Image
            src="/about-icon.svg"
            alt="profile logo"
            width={12}
            height={12}
            priority
          />
          <h1 className="m-4 font-bold  text-23 leading-28 tracking-wider">
            PERSONAL INFO
          </h1>
          <p className="lg:pr-20">
            I am a Telecommunication engineer with experience in Internet of
            Things projects. Currently, I am learning web development to expand
            my skillset and explore new opportunities.
          </p>
        </div>
        <div className="m-4 flex flex-wrap font-inter text-white justify-between leading-loose lg:mr-44">
          <div>
            <span className="flex flex-row">
              <p className=" font-bold mx-2">Name:</p>
              <p> Anwar ul Islam </p>
            </span>
            <span className="flex flex-row">
              <p className=" font-bold mx-2">Date of Birth:</p>
              <p> 25-Aug-1994 </p>
            </span>
            <span className="flex flex-row">
              <p className=" font-bold mx-2">Nationality:</p>
              <p> Pakistani </p>
            </span>
            <span className="flex flex-row">
              <p className=" font-bold mx-2">Freelance:</p>
              <p> Available </p>
            </span>
          </div>
          <div>
            <span className="flex flex-row">
              <p className=" font-bold mx-2">Phone:</p>
              <p>+92 334 5111684 </p>
            </span>
            <span className="flex flex-row">
              <p className=" font-bold mx-2">Email:</p>
              <p>anwarulislam684@gmail.com </p>
            </span>
            <span className="flex flex-row">
              <p className=" font-bold mx-2">Skype:</p>
              <p> anu684 </p>
            </span>
            <span className="flex flex-row">
              <p className=" font-bold mx-2">LinkedIn:</p>
              <p> anu684 </p>
            </span>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:justify-start mt-10 lg:items-center">
            <div className=" px-10 py-1 mb-4 lg:mb-0 bg-amber-500 cursor-pointer lg:mx-10 text-center">
              Download Resueme
            </div>
            <div className=" px-10 py-1 border border-gray-500 cursor-pointer text-center">
              My Blogs
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-600 mt-10 mx-4"></hr>
        <div className="m-4">
          <Tabs />
        </div>
        <hr className="border-t border-gray-600 mt-2 mx-4"></hr>
        <span className=" py-10 flex lg:flex-row flex-col items-center lg:justify-evenly">
          <div className="flex flex-col items-center">
          <Image
                className=""
                src="/image/breifcase.svg"
                alt="about"
                width={60}
                height={60}
                priority
              />
            <div className=" text-3xl text-amber-500 my-2 lg:my-6 font-bold">7+</div>
            <div className="text-2xl text-white">Year Experience</div>
          </div>
          <div className="flex flex-col items-center mt-8 lg:mt-0">
          <Image
                className=""
                src="/image/done.svg"
                alt="about"
                width={60}
                height={60}
                priority
              />
            <div className=" text-3xl text-amber-500 my-2 lg:my-6 font-bold">20+</div>
            <div className="text-2xl text-white">Projects Done</div>
          </div>
          <div className="flex flex-col items-center mt-8 lg:mt-0">
          <Image
                className=""
                src="/image/heart.svg"
                alt="about"
                width={60}
                height={60}
                priority
              />
            <div className=" text-3xl text-amber-500 my-2 lg:my-6 font-bold">10+</div>
            <div className="text-2xl text-white">Happy Customers</div>
          </div>
        </span>
      </section>
    </main>
  );
}
