import React from "react";
import { motion } from "framer-motion";
import { Skill as mySkill } from "../typings";

type Props = {
  skill: mySkill;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border-2 border-professionalBlue object-cover w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out shadow-lg"
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${skill?.image}`}
        alt={skill?.title || "Skill"}
      />
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-professionalDark w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm md:text-lg lg:text-xl font-bold text-white opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
