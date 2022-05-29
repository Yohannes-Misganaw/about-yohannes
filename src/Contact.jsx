import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import telegram from "./Img/telegram.png";
import instagram from "./Img/instagram.png";
import Email from "./Img/email.png";
import Address from "./Img/address.png";
import Linkdin from "./Img/Linkdin.png";
import Github from "./Img/Github.png";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gplninq",
        "template_8h6r05q",
        formRef.current,
        "i29WwI_o4rv0DTgaY"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative flex md:flex-row flex-col md:h-700 h-1200 bg-gray-200">
      <div className="absolute md:mt-32 md:left-4 mt-44 w-72 h-72 bg-purple-300 rounded-full animate-blob filter blur-lg opacity-80"></div>
      <div className="absolute md:mt-40 mt-320 md:left-500 w-72 h-72 bg-yellow-300 rounded-full animate-blob animation-delay-2000  filter blur-lg opacity-80"></div>
      <div className="absolute md:mt-96 mt-500 md:left-800 w-72 h-72 bg-cyan-300 rounded-full animate-blob animation-delay-4000  filter blur-lg opacity-80"></div>
      <div className="">
        <div className=" relative flex flex-none flex-col md:mr-32 mb-10 ">
          <h1 className="text-5xl font-Oleo ml-12 mb-3 md:ml-24 text-cyan-500">
            My Social Contact
          </h1>
          <p className="  text-3xl font-Oleo ml-14 md:ml-28 text-cyan-500">
            Feel free to contact me.
          </p>
        </div>

        <div className="relative font-Oleo text-lg z-20 mt-0 md:ml-8">
          <div className="flex items-start ml-4 my-4 md:w-3/4 ">
            <img className="w-50 h-50 mr-4" src={Address} alt="" />
            <p>Addis Ababa, Ethiopia</p>
          </div>
          <div className="flex items-start ml-4 my-4 md:w-3/4 ">
            <img className="w-50 h-50 mr-4" src={Email} alt="" />
            <p>Yomifalsa@gmail.com</p>
          </div>
          <div className="flex items-start ml-4 my-4 md:w-3/4 hover:text-sky-400">
            <img className="w-50 h-50 mr-4" src={telegram} alt="" />
            <a href="https://t.me/pr_sher_l" target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
          <div className="flex items-start ml-4 my-4 md:w-3/4 hover:text-sky-400">
            <img className="w-50 h-50 mr-4" src={instagram} alt="" />
            <a
              href="https://www.instagram.com/jomeyehu/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="flex items-start ml-2 my-4 md:w-3/4 hover:text-sky-400">
            <img className="h-50 mr-4" src={Linkdin} alt="" />
            <a
              href="https://www.linkedin.com/in/yohannes-misganaw/"
              target="_blank"
              rel="noreferrer"
            >
              Linkdin
            </a>
          </div>
          <div className="flex items-start ml-4 my-4 md:w-3/4 hover:text-sky-400">
            <img className="w-50 h-50 mr-4" src={Github} alt="" />
            <a
              href="https://github.com/Yohannes-Misganaw"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 z-20 mt-10 ml-8 ">
        <div className=" mb-4">
          <p className=" text-3xl font-Oleo ml-2 md:ml-28 text-red-500">
            Direct Message to my email.
          </p>
        </div>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="flex flex-row mb-6">
            <input
              className="mr-2 h-10 w-32 rounded-lg border-2 border-black"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="h-10 w-32 rounded-lg border-2 border-black"
            />
          </div>
          <div className="my-6">
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              className="h-12 w-60 rounded-lg border-2 border-black"
              required
            />
          </div>
          <div className="my-2 ">
            <textarea
              rows="8"
              placeholder="Message"
              name="message"
              className="w-72 rounded-lg md:w-96 border-2 border-black"
              required
            />
          </div>
          <button className="bg-cyan-300 hover:bg-cyan-400 w-24 h-12 rounded-lg mr-4">
            Submit
          </button>
          <div className="font-Oleo text-lg">
            {done && "Your message is sent Thank you ✨😉"}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
