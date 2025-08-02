import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, the name's ${pageInfo?.name}`,
      "I like riding my 🚲",
      "I_like_to_code.py",
      "And I'm addicted to ☕️",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden bg-gradient-to-b from-lightBackground to-professionalBlue/5">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover shadow-2xl border-4 border-professionalBlue/30"
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${pageInfo?.heroImage}`}
        alt={pageInfo?.name || "Hero image"}
      />

      <div className="z-20 space-y-6">
        <h2 className="text-sm uppercase text-professionalBlue pb-2 tracking-[10px] md:tracking-[15px] font-medium">
          {pageInfo?.role}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10 text-professionalDark">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#34495E" />
        </h1>

        <div className="pt-5 space-x-2">
          <Link href="#about">
            <button className="heroButton border-professionalBlue text-professionalDark hover:bg-professionalBlue hover:text-white transition-all duration-300">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton border-professionalBlue text-professionalDark hover:bg-professionalBlue hover:text-white transition-all duration-300">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton border-professionalBlue text-professionalDark hover:bg-professionalBlue hover:text-white transition-all duration-300">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton border-professionalBlue text-professionalDark hover:bg-professionalBlue hover:text-white transition-all duration-300">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
