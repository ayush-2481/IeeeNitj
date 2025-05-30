"use client";
import React from "react";
import { Montserrat as MontserratFont } from "next/font/google";
import { Michroma as MichromaFont } from "next/font/google";

const Montserrat = MontserratFont({ weight: ["400"], subsets: ["latin"] });
const michroma = MichromaFont({ weight: ["400"], subsets: ["latin"] });

const textStyling = {
  color: "#1F41BB",
};

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => (
  <div
    className={`${michroma.className} text-center text-[1.8rem] sm:text-[2.2rem] font-bold pb-6`}
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

const Aboutsection = () => {
  return (
    <div className="flex justify-center px-4 sm:px-8 lg:px-16 py-10">
      <div className="w-full  rounded-2xl md:rounded-3xl text-black p-6 sm:p-10 ">
        <Heading text="ABOUT US" />

        <div className="flex flex-col gap-14 sm:gap-20 mt-10">
          {/* ABOUT IEEE Section */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="flex-1">
              <h2
                className={`text-black font-bold text-3xl sm:text-4xl mb-4 ${Montserrat.className}`}
              >
                ABOUT IEEE
              </h2>
              <p className="text-black text-base sm:text-lg">
                The IEEE Student Chapter at NIT Jalandhar is a dynamic community
                of tech enthusiasts, innovators, and leaders committed to
                fostering professional growth, technical excellence, and
                impactful contributions to society.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {[
                <>
                  Over <span style={textStyling}>460,000</span> members in more
                  than <span style={textStyling}>190</span> countries.
                </>,
                <>
                  IEEE was formed in <span style={textStyling}>1963</span>
                </>,
                <>
                  <span style={textStyling}>300</span> conferences each year
                </>,
                <>
                  <span style={textStyling}>344</span> sections,{" "}
                  <span style={textStyling}>2,709</span> chapters,{" "}
                  <span style={textStyling}>3,635</span> student branches
                </>,
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border-2 border-black p-4 font-bold rounded-xl bg-[#BDD6FB33] cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ABOUT NITJ Section */}
          <div className="flex flex-col-reverse lg:flex-row gap-12 sm:gap-20 items-center">
            <div
              className="w-full sm:w-[400px] md:w-[500px] h-[200px] sm:h-[300px] lg:h-[320px] rounded-[30px] drop-shadow-md"
              style={{
                backgroundImage: "url('/nitj.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex-1">
              <h1
                className={`text-black font-bold text-3xl sm:text-4xl mb-4 ${Montserrat.className}`}
              >
                ABOUT NITJ
              </h1>
              <p className="text-black text-base sm:text-lg">
                Dr B R Ambedkar National Institute of Technology was established
                in 1987 as Regional Engineering College and was given the status
                of National Institute of Technology (Deemed University) by the
                Government of India on October 17, 2002 under the aegis of the
                Ministry of Education (Shiksha Mantralaya), New Delhi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
