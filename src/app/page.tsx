import Image from "next/image";
import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col p-24 items-center bg-red-100 bg-gradient-to-r from-red-100 to-red-300 w-full h-24">
      <div id="profile" className="md:flex p-10  max-w-4xl place-items-center">
        <img src="/image.jpg" className="rounded-full w-32 h-32 mr-12"></img>
        <div>
          <p className=" text-3xl font-serif mr-6" >About Me </p>
          <h1 className="flex">
            Hi, I'm Elle Zou, a Full-Stack Software Engineer. Currently pursuing my Master's degree in Software Engineering at SMU Dallas, I specialize in developing web, mobile and GIS applications, focusing on creating seamless user experiences. I'm also exploring the fascinating realm of machine learning.
          </h1>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com/ElleZou">
                <FaGithub /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/elle-zou/"><FiLinkedin /></a>
            </li>
            <li>
              <a href="mailto:xiaoqingz@smu.edu"><FiMail /></a>
            </li>
          </ul>
        </div>
      </div>
      <div id="cardlist" className="max-w-4xl place-content-center">
        <div className="flex justify-center mb-8 font-bold text-3xl ">projects</div>
        <div className="flex">
          <ul className="flex justify-center flex-wrap">
            <li ><img src="/image2.jpg" className="flex-1 h-48 w-56 mr-10"></img>
            <h2 className="text-xl font-semibold">Incoming</h2>
              
            </li>
            <li ><img src="/image2.jpg" className="flex-1 h-48 w-56 mr-10"></img>
            <h2 className="text-xl font-semibold">Incoming</h2>
            </li>
            <li ><img src="/image2.jpg" className="flex-1 h-48 w-56 mr-10"></img>
            <h2 className="text-xl font-semibold">Incoming</h2>
            </li>
          </ul>
        </div>

      </div>
    </main>
  );
}
