"use client";
import React from "react";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Degree from "../education/page1";
import Experience from "../experience/page1";
import SkillStars from "../skills/page1";

type Props = {};

const Tabs = (props: Props) => {
  const router = useRouter();
  return (
    <main className="flex justify-center">
      <Tab.Group defaultIndex={0}>
        <Tab.List className="hidden lg:flex lg:flex-col lg:w-[25%] lg:h-96 lg:justify-evenly ml-10 text-white">
          <Tab className="px-10 py-6 hover:bg-amber-500 border-gray-700 border mt-6 focus:bg-amber-500 ">
            EDUCATION
          </Tab>
          <Tab className="px-10 py-6  mt-6 hover:bg-amber-500 focus:bg-amber-500 border-gray-700 border">
            EXPERIENCE
          </Tab>
          <Tab className="px-10 py-6 mt-6 hover:bg-amber-500 focus:bg-amber-500 border-gray-700 border">
            SKILLS
          </Tab>
        </Tab.List>

        <Tab.Panels className=" w-full lg:w-[75%] lg:ml-4 hidden lg:flex flex-wrap justify-center ">
          <Tab.Panel className=" w-full lg:w-[80%] border border-gray-700 ">
            <div className=" w-full h-20 border-b flex justify-center items-center  border-gray-700 text-amber-500 bg-black ">
              <Image
                className=" mx-2"
                src="/image/education.svg"
                alt="about"
                width={40}
                height={40}
                priority
              />
              <p className=" text-3xl font-inter leading-loose">EDUCATION</p>
            </div>
            <Degree
              degree="BE-Telecommunication "
              universty="Hamdard University Karachi"
              date="2011-2015"
            />
            <Degree
              degree="Higher Secondary School Certificate "
              universty="BISE - D.G Khan"
              date="2009-2011"
            />
            <Degree
              degree="Secondary School Certificate (HSSC) "
              universty="BISE - D.G Khan"
              date="2007-2009"
            />
          </Tab.Panel>

          <Tab.Panel className=" w-[80%] border border-gray-700 ">
            <div className="w-full h-20 border-b flex justify-center items-center  border-gray-700 text-amber-500 bg-black ">
              <Image
                className=" mx-2"
                src="/image/suitcase.svg"
                alt="about"
                width={30}
                height={30}
                priority
              />
              <p className=" text-3xl font-inter ">EXPERIENCE</p>
            </div>
            <Experience
              job="Electronics Engineer"
              org="Micromerger pvt Ltd"
              date="2015-2019"
              description="Circuit designing, Simulation and microcontroller programming"
            />
            <Experience
              job="Senior Electronics Engineer"
              org="Micromerger pvt Ltd"
              date="2019-present"
              description="Project management and Development"
            />
          </Tab.Panel>
          <Tab.Panel className=" w-[80%] border border-gray-700 ">
            <div className="w-full h-20 border-b flex justify-center items-center  border-gray-700 text-amber-500 bg-black ">
              <Image
                className=" mx-2"
                src="/image/skill.svg"
                alt="about"
                width={30}
                height={30}
                priority
              />
              <p className=" text-3xl font-inter ">SKILLS</p>
            </div>
            <div className="flex flex-wrap w-full justify-evenly ">
            <SkillStars skill="Proteus" skillLevel={5} />
            <SkillStars skill="C++" skillLevel={4} />
          </div>
          <div className="flex flex-wrap w-full justify-evenly ">
            <SkillStars skill="HTML" skillLevel={5} />
            <SkillStars skill="CSS" skillLevel={4} />
          </div>
          <div className="flex flex-wrap w-full justify-evenly ">
            <SkillStars skill="JavaScript" skillLevel={4} />
            <SkillStars skill="TypeScript" skillLevel={4} />
          </div>
          <div className="flex flex-wrap w-full justify-evenly">
            <SkillStars skill="React" skillLevel={3} />
            <SkillStars skill="NextJs" skillLevel={3} />
          </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <section className=" w-full lg:hidden flex flex-wrap justify-center ">
        <div className=" w-full border border-gray-700 ">
          <div className=" w-full h-20 border-b flex justify-center items-center  border-gray-700 text-amber-500 bg-black ">
            <Image
              className=" mx-2"
              src="/image/education.svg"
              alt="about"
              width={40}
              height={40}
              priority
            />
            <p className=" text-3xl font-inter leading-loose">EDUCATION</p>
          </div>
          <Degree
            degree="BE-Telecommunication "
            universty="Hamdard University Karachi"
            date="2011-2015"
          />
          <Degree
            degree="Higher Secondary School Certificate "
            universty="BISE - D.G Khan"
            date="2009-2011"
          />
          <Degree
            degree="Secondary School Certificate (HSSC) "
            universty="BISE - D.G Khan"
            date="2007-2009"
          />
        </div>

        <section className=" w-full border border-gray-700 my-3">
          <div className="w-full h-20 border-b flex justify-center items-center  border-gray-700 text-amber-500 bg-black ">
            <Image
              className=" mx-2"
              src="/image/suitcase.svg"
              alt="about"
              width={30}
              height={30}
              priority
            />
            <p className=" text-3xl font-inter ">EXPERIENCE</p>
          </div>
          <Experience
            job="Electronics Engineer"
            org="Micromerger pvt Ltd"
            date="2015-2019"
            description="Circuit designing, Simulation and microcontroller programming"
          />
          <Experience
            job="Senior Electronics Engineer"
            org="Micromerger pvt Ltd"
            date="2019-present"
            description="Project management and Development"
          />
        </section>
        <section className=" w-full border border-gray-700 ">
          <div className="w-full h-20 border-b flex justify-center items-center  border-gray-700 text-amber-500 bg-black ">
            <Image
              className=" mx-2"
              src="/image/skill.svg"
              alt="about"
              width={30}
              height={30}
              priority
            />
            <p className=" text-3xl font-inter ">SKILLS</p>
          </div>
          <div className="flex flex-wrap w-full justify-evenly ">
            <SkillStars skill="Proteus" skillLevel={5} />
            <SkillStars skill="C++" skillLevel={4} />
          </div>
          <div className="flex flex-wrap w-full justify-evenly ">
            <SkillStars skill="HTML" skillLevel={5} />
            <SkillStars skill="CSS" skillLevel={4} />
          </div>
          <div className="flex flex-wrap w-full justify-evenly ">
            <SkillStars skill="JavaScript" skillLevel={4} />
            <SkillStars skill="TypeScript" skillLevel={4} />
          </div>
          <div className="flex flex-wrap w-full justify-evenly">
            <SkillStars skill="React" skillLevel={3} />
            <SkillStars skill="NextJs" skillLevel={3} />
          </div>
        </section>
      </section>
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
    </main>
  );
};

export default Tabs;
