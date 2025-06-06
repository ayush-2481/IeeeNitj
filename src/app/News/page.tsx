"use client";

import React from "react";
import { Michroma, Montserrat } from "next/font/google";
import Image from "next/image";
import { StaticImageData } from "next/image";
import NavigationBar from "../components/Navigation";

import newsImage1 from "../../../public/event-1.png";
import newsImage2 from "../../../public/event-2.png";
import newsImage3 from "../../../public/event-3.png";
import Footer from "../components/Footer";

const michroma = Michroma({ weight: ["400"], subsets: ["latin"] });
const montserrat = Montserrat({ weight: ["400"], subsets: ["latin"] });

interface HeadingProps {
  text: string;
}

interface NewsBubbleProps {
  text: string;
  imgSrc: string | StaticImageData;
}

const NewsPage = () => {
  const Heading: React.FC<HeadingProps> = ({ text }) => (
    <div
      className={`${michroma.className} text-center text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] font-bold pb-4`}
      style={{
        WebkitTextStrokeWidth: 1,
        WebkitTextStrokeColor: "#8A92DD",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        color: "black",
      }}
    >
      {text.split(" ").slice(0, -1).join(" ")}{" "}
      <span style={{ color: "#004E92" }}>{text.split(" ").slice(-1)}</span>
    </div>
  );

  const NewsBubble: React.FC<NewsBubbleProps> = ({ text, imgSrc }) => (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 px-4 py-4 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:scale-[1.02] transition-transform duration-300">
      <div className="w-full sm:w-1/3">
        <Image
          src={imgSrc}
          alt={text}
          layout="responsive"
          width={200}
          height={200}
          className="rounded-xl shadow-md object-cover"
        />
      </div>
      <div
        className={`w-full sm:w-[65%] mt-4 sm:mt-0 px-4 text-sm sm:text-base text-black ${montserrat.className}`}
      >
        {text}
      </div>
    </div>
  );
  

  const News = () => {
    const newsData = [
      {
        text: "Challenges in Design and Fabrication of DSM Transistor",
        imgSrc: newsImage1,
      },
      {
        text: "Expert Talk on “The Thrilling Odyssey of Trusted AI",
        imgSrc: newsImage2,
      },
      {
        text: "Expert Talk on “Algorithm-to-circuit design using the AHIR-V2 tool-set”",
        imgSrc: newsImage3,
      },
      {
        text: "One Day Workshop on Electromagnetics for Engineers",
        imgSrc: newsImage1,
      },
    ];

    return (
      <>
        
        <div className="w-full flex flex-col gap-8">
          <Heading text="LATEST NEWS" />
          <div className="flex flex-col gap-6 sm:gap-8 py-8 px-4 sm:px-6 lg:px-10">
            {newsData.map((data, i) => (
              <NewsBubble key={i} text={data.text} imgSrc={data.imgSrc} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
    <NavigationBar />
    <div className="w-full py-24 md:py-10 lg:py-12 min-h-screen px-4 sm:px-6 lg:px-10 bg-gradient-to-tl from-[#DDEEFF] to-[#B8D1F3] overflow-auto">
      <News />
    </div>
    <Footer/>
    </>
  );
};

export default NewsPage;
