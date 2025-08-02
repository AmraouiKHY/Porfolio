import { motion } from "framer-motion";
import React from "react";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center py-20"
    >
      <h3 className="mt-16 absolute top-16 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] text-professionalDark text-xl md:text-2xl font-semibold">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="mb-8 md:mb-0 flex-shrink-0 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full md:rounded-lg object-cover shadow-2xl border-4 border-professionalBlue/20"
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${pageInfo?.profilePic}`}
        alt={pageInfo?.name || "Profile picture"}
      />
      
      <div className="space-y-6 md:space-y-8 px-4 md:px-8 lg:px-12 max-w-2xl">
        <h4 className="text-xl md:text-3xl lg:text-4xl font-semibold text-professionalDark">
          Here is a{" "}
          <span className="underline decoration-professionalBlue/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base lg:text-lg text-justify leading-relaxed text-professionalDark/80">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
