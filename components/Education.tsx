import React from "react";
import { motion } from "framer-motion";
import { Education } from "../typings";

type Props = { education: Education[] };

export default function EducationComponent({ education }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-6 md:px-10 justify-evenly mx-auto items-center py-20"
    >
      <h3 className="absolute top-16 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] text-professionalDark text-xl md:text-2xl font-semibold">
        Education
      </h3>

      {/* Education cards */}
      <div className="w-screen md:w-full text-left pb-5 md:pb-10 flex space-x-5 overflow-x-scroll p-6 md:p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-professionalBlue/80 mt-16">
        {education
          ?.slice() // make a shallow copy so we don't mutate the original array
        //   .sort(
        //     (a, b) =>
        //       new Date(b.dateStarted).getTime() -
        //       new Date(a.dateStarted).getTime()
        //   )
          .map((edu) => (
            <article 
              key={edu._id} 
              className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-4 flex-shrink-0 w-72 md:w-[600px] xl:w-[700px] snap-center bg-white bg-gradient-to-tr from-white to-professionalBlue/10 p-6 md:p-8 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200 border border-professionalBlue/20"
            >
              {/* Institution Logo */}
              <motion.img
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="h-20 md:h-20 rounded-full object-cover shadow-lg border-2 border-professionalBlue/20 mb-2"
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}${edu?.institutionLogo}`}
                alt={edu?.institution || "Institution logo"}
              />

              <div className="w-full px-0 md:px-6 text-center">
                {/* Degree Title */}
                <h4 className="text-lg md:text-2xl lg:text-3xl font-semibold text-professionalDark mb-2">
                  {edu?.degree}
                </h4>
                
                {/* Institution Name */}
                <p className="font-bold text-md md:text-xl lg:text-2xl mt-1 text-professionalBlue mb-3">
                  {edu?.institution}
                </p>

                {/* Date Range */}
                <p className="uppercase py-2 md:py-4 text-professionalBlue/70 text-xs md:text-sm font-medium">
                  {new Date(edu?.dateStarted).toDateString()} -{" "}
                  {edu.isCurrentlyStudying
                    ? "Present"
                    : edu?.dateEnded ? new Date(edu.dateEnded).toDateString() : "Unknown"}
                </p>

                {/* Status Badge */}
                {edu.isCurrentlyStudying && (
                  <div className="inline-block bg-professionalBlue/20 text-professionalDark px-3 py-1 rounded-full text-xs font-medium mb-4">
                    Currently Studying
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="px-0 md:px-6 text-professionalDark/80 text-sm md:text-base leading-relaxed text-justify">
                <p>{edu?.description}</p>
              </div>

              {/* Institution Website Link */}
              {edu?.institutionWebsite && (
                <div className="mt-4">
                  <a
                    href={edu.institutionWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-professionalBlue text-white rounded-lg hover:bg-professionalDark transition-colors duration-300 text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit Institution
                  </a>
                </div>
              )}
            </article>
          ))}
      </div>
    </motion.div>
  );
}