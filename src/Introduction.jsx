import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import mypic from "./Img/mypic.jpg";

export default function Introduction() {
  return (
    <div className="relative flex md:flex-row flex-col md:h-700 h-800 bg-gray-200">
      <div className="absolute md:mt-44 md:left-4 mt-32 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
      <div className="absolute md:mt-44 mt-10 left-2 md:left-56 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
      <div className="absolute md:mt-64 mt-60 left-4 md:left-32 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
      <div className="flex flex-1 flex-col animate-slide-in ">
        <div className="p-10 mt-20 flex flex-col items-center space-y-2 font-medium font-Lobster">
          <h1 className=" text-6xl text-yellow-500">Hi</h1>
          <h1 className="text-3xl text-red-600">My name is</h1>
          <h1 className="text-3xl text-cyan-400">Yohannes Misganaw</h1>
        </div>
        <div className="flex mt-2 mb-4 flex-col items-center space-y-2 font-medium">
          <div className=" text-3xl font-black text-green-500 font-Tinos">
            *
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={60}
              delaySpeed={1000}
              words={[
                "Programming Enthusiast",
                "Senior Student",
                "Drawing Artist",
              ]}
            />
          </div>
          <div className="hidden md:block p-10 font-bold text-xl font-Courgette">
            <p>
              I am a senior student in Ethiopia.And I'm passionate about using
              modern technologies, STEM, programming and Web development to
              change the world.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-end">
        <div className=" relative bg-fav h-full md:w-656 w-600 rounded-l-xl place-items-end">
          <img
            className="flex absolute bottom-0 right-0 rounded-l-xl "
            src={mypic}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
