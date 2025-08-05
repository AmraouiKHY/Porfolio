import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import { Experience, PageInfo, Skill, Project, Social, Education } from "../typings";
import { pageInfo, experiences, projects, skills, socials, education } from "../data/staticData";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import EducationComponent from "../components/Education";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  education: Education[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials, education }: Props) => {
  return (
    <motion.div
      className="bg-lightBackground text-darkBlack h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{"Khireddine's Portfolio"}</title>
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LV1LN9VBT0"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-LV1LN9VBT0')`}
        ;
      </Script>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <motion.section 
        id="hero" 
        className="snap-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Hero pageInfo={pageInfo} />
      </motion.section>

      {/* About */}
      <motion.section 
        id="about" 
        className="snap-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <About pageInfo={pageInfo} />
      </motion.section>

      {/* Education */}
      <motion.section 
        id="education" 
        className="snap-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <EducationComponent education={education} />
      </motion.section>

      {/* Experiences */}
      <motion.section 
        id="experience" 
        className="snap-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <WorkExperience experiences={experiences} />
      </motion.section>

      {/* Skills */}
      <motion.section 
        id="skills" 
        className="snap-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Skills skills={skills} />
      </motion.section>

      {/* Projects */}
      <motion.section 
        id="projects" 
        className="snap-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Projects projects={projects} />
      </motion.section>

      {/* Contact */}
      <motion.section 
        id="contact" 
        className="snap-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactMe />
      </motion.section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="h-10 w-10 bg-darkGreen/80 rounded-full flex items-center justify-center">
              <HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
            </div>
          </div>
        </footer>
      </Link>
    </motion.div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      education,
    },
    revalidate: 10,
  };
};
