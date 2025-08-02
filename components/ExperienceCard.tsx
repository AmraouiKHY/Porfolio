import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";

type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72 md:w-[600px] xl:w-[700px] snap-center bg-white bg-gradient-to-tr from-white to-professionalBlue/10 p-5 md:p-8 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 border border-professionalBlue/20">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="md:invisible xl:visible md:h-0 w-24 h-24 md:w-0 rounded-full xl:w-[120px] xl:h-[120px] mb-2 object-cover object-center shadow-lg border-2 border-professionalBlue/20"
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${experience?.companyImage}`}
        alt={experience?.company || "Company logo"}
      />
      <div className="w-full px-0 md:px-6">
        <div className="md:flex md:justify-between items-center">
          <div>
            <h4 className="text-lg md:text-2xl lg:text-3xl font-semibold text-professionalDark">
              {experience?.jobTitle}
            </h4>
            <p className="font-bold text-md md:text-xl lg:text-2xl mt-1 text-professionalBlue">
              {experience?.company}
            </p>
            <div className="flex space-x-2 my-3 flex-wrap gap-1">
              {experience?.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover border border-professionalBlue/20 shadow-sm"
                  src={`${process.env.NEXT_PUBLIC_SERVER_URL}${technology?.image}`}
                  alt={technology?.title || "Technology"}
                />
              ))}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-24 md:w-24 rounded-full mb-0 object-cover object-center shadow-lg border-2 border-professionalBlue/20"
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${experience?.companyImage}`}
            alt={experience?.company || "Company logo"}
          />
        </div>
        <p className="uppercase py-2 md:py-4 text-professionalBlue/70 text-xs md:text-sm font-medium">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : experience?.dateEnded ? new Date(experience.dateEnded).toDateString() : "Unknown"}
        </p>
      </div>
      <ul className="px-0 md:px-6 list-disc text-professionalDark/80 space-y-2 pr-3 text-justify ml-0 text-sm md:text-base pl-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-professionalBlue/60 leading-relaxed">
        {experience?.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
