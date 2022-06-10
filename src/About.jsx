import React from "react";
import me from "./Img/me.jpg";

export default function About() {
  return (
    <div className="relative flex md:flex-row flex-col md:h-700 h-840 bg-gray-200">
      <div className="absolute md:mt-32 md:left-4 mt-44 w-72 h-72 bg-purple-300 rounded-full animate-blob filter blur-lg opacity-80"></div>
      <div className="absolute md:mt-40 mt-320 md:left-500 w-72 h-72 bg-yellow-300 rounded-full animate-blob animation-delay-2000  filter blur-lg opacity-80"></div>
      <div className="absolute md:mt-96 mt-500 md:left-800 w-72 h-72 bg-cyan-300 rounded-full animate-blob animation-delay-4000  filter blur-lg opacity-80"></div>

      <div className=" relative flex flex-1 items-center h-full">
        <div className="relative mt-50 ml-50 overflow-hidden md:w-8/12 md:h-90 rounded-alg h-60">
          <img src={me} alt="" className="a-img w-full h-full object-cover" />
        </div>
      </div>

      <div className="ml-4 mr-4 items-center mb-32 flex flex-col flex-1 z-20">
        <h1 className="md:mt-32 mt-18 text-5xl mb-6 mt-4 font-soul font-extrabold text-cyan-400 underline decoration-4">
          About Me
        </h1>
        <p className="a-sub font-bold font-Courgette text-3xl text-violet-600 mb-2 ">
          I am hopefull student who want to help others with his power, passion
          and ability.
        </p>
        <p className="a-desc font-light text-2xl font-Courgette text-violet-600  ">
          As Sir Ken Robinson said "The role of a creative leader is not to have
          all the ideas; it's to create a culture where everyone can have ideas
          and feel that they're valued. So it's much more about creating
          climates." and really believe in this quote and I'm motivated with
          this words.
        </p>
      </div>
    </div>
  );
}
