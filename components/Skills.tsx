import { motion } from "framer-motion";
import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = { skills: SkillType[] };

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center py-20"
    >
      <h3 className="absolute top-16 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] text-professionalDark text-xl md:text-2xl font-semibold">
        Skills
      </h3>
      <h3 className="absolute top-28 md:top-32 left-1/2 transform -translate-x-1/2 uppercase tracking-[3px] text-professionalBlue text-xs md:text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 lg:gap-5 mt-16 px-4">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
