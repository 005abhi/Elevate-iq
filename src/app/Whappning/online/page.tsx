import React from "react";
import Link from "next/link";
import { Sidebar } from "../../components/Sidebar";
import "../globals.css";

export const page = () => {
  return (
    <main className="layout ">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="byte ">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center  w-full"
                    src="https://kalingauniversity.ac.in/kuhackathon2025/images/img/ku-logo.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  KU HACKATHON 2025
                </h2>
                <p className="text-white leading-relaxed mt-2">
                  The National Level Hackathon is a thrilling 24-hour event
                  starting at 11:00 AM on February 13, 2025, and ending at 11:00
                  AM on February 14, 2025. Participants from diverse backgrounds
                  will collaborate to develop innovative solutions and showcase
                  their skills. This competition offers a unique platform to
                  solve real-world challenges and gain national recognition.
                </p>
                <a
                  href="https://kalingauniversity.ac.in/kuhackathon2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                    REGISTER HERE
                  </button>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  ></svg>
                </a>
              </div>
              <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center  w-full"
                    src="https://vprayukti.bitsathy.ac.in/assets/logo-BNlefVaD.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  BIT V-PRAYUKTI'25
                </h2>
                <p className="text-white leading-relaxed mt-2">
                  BIT V-PRAYUKTI'25 is a National Level Event aims to showcase
                  technological and inventive skills from students across the
                  country, providing a platform for innovative minds to shine.
                  "Show off your innovations – Share it with the world." This
                  initiative invites students to display their creative
                  solutions for real-world problems through bold, imaginative,
                  and practical approaches. Leave your mark by demonstrating
                  your vision and ingenuity.
                </p>
                <a
                  href="https://vprayukti.bitsathy.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                    REGISTER HERE
                  </button>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  ></svg>
                </a>
              </div>
              <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center w-full"
                    src="https://codebeat.in/wp-content/uploads/2024/04/CODE-BELT-new-03.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  TechXcelerate 2025=
                </h2>
                <p className="text-white leading-relaxed mt-2">
                  Join us at TechXcelerate 2025, BITS Goa, from 7th to 9th
                  February, for three days of technology, innovation, and
                  creativity, featuring cutting-edge workshops and an
                  exhilarating 24-hour hackathon!
                </p>
                <a
                  href="https://codebeat.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                    REGISTER HERE
                  </button>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  ></svg>
                </a>
              </div>

              <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center  w-full"
                    src="https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBclFvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e11df45b0049b13cedd131085672dd03174930ea/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeU1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e95a9989726607e7d6ee02cb34a6a4d9a8bf29c1/website.jpg"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  Hacks for Hackers
                </h2>
                <p className="text-white leading-relaxed mt-2">
                  Friday January 3, 2025 We invite you to hack on projects that
                  define your hacker journey. Build creative hacks that empower
                  you and your fellow hackers to do more and celebrate the new
                  year with us. Whether you build something on the theme or not,
                  focus on having fun. While we'd love to have you build
                  something on the theme, our themes are only here for
                  inspiration. Please build whatever you'd like!
                </p>
                <a
                  href="https://events.mlh.io/events/11516?_gl=1*1obdtpf*_ga*NTk1MzU5NzExLjE3MzM2NzMzNTM.*_ga_E5KT6TC4TK*MTczMzY4MzI3OC40LjEuMTczMzY4Mzc1MC4wLjAuMA.."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                    REGISTER HERE
                  </button>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  ></svg>
                </a>
              </div>

              <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center w-full"
                    src="https://events.mlh.io/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBclFvIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e11df45b0049b13cedd131085672dd03174930ea/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFeU1EQjROakF3SVFZN0JsUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--e95a9989726607e7d6ee02cb34a6a4d9a8bf29c1/website.jpg"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  Global Hack Week: Beginners Week
                </h2>
                <p className="text-white leading-relaxed mt-2">
                  Friday January 10, 2025 Spend a week hacking with the MLH
                  community at GHW Beginners Week! Global Hack Week takes place
                  throughout the year to give you a chance to complete technical
                  challenges, network with the community, enjoy fun live
                  sessions, build technical projects, and make new memories.
                </p>
                <a
                  href="https://events.mlh.io/events/11516?_gl=1*1obdtpf*_ga*NTk1MzU5NzExLjE3MzM2NzMzNTM.*_ga_E5KT6TC4TK*MTczMzY4MzI3OC40LjEuMTczMzY4Mzc1MC4wLjAuMA.."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                    REGISTER HERE
                  </button>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  ></svg>
                </a>
              </div>

              <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://storage.googleapis.com/vision-hack2skill-production/innovator/USER00000008/1731997275507-SBI.Banner_2.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  HACK-AI-THON 2024 SUN, DEC 15, 2024 (IST)
                </h2>
                <p className="text-white leading-relaxed mt-2">
                  Welcome to SBI Life presents HACK-AI-THON 2024, powered by
                  Hack2skill, where innovation meets artificial intelligence to
                  shape the future of technology.
                </p>
                <a
                  href="https://vision.hack2skill.com/event/hackaithon2024/?utm_source=h2shomepage&utm_medium=h2shomepage&sectionid=66d9383074bcc1453eeb5a83"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                    REGISTER HERE
                  </button>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  ></svg>
                </a>
              </div>
              <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/213/153/thumb/IG.jpg?1728917585"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  Global Hack Week: DATA
                </h2>
                <p className="text-white leading-relaxed mt-2">
                  DECEMBER 6TH-12TH , 2024 Spend a week hacking with the MLH
                  community at GHW Data Week! Come learn job ready technical
                  skills like how to program in SQL, implement a database, and
                  build data visualizations.
                </p>
                <a
                  href="https://events.mlh.io/events/11596?_gl=1*jx48gs*_ga*NTk1MzU5NzExLjE3MzM2NzMzNTM.*_ga_E5KT6TC4TK*MTczMzY4MzI3OC40LjEuMTczMzY4MzU1Ny4wLjAuMA.."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                    REGISTER HERE
                  </button>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  ></svg>
                </a>
              </div>
              <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-10-08T07%3A09%3A24.386Z-homepage.AIFI.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  APAC Hackathon
                </h2>
                <p className="text-white leading-relaxed mt-2">
                  The AI for Impact Hackathon, presented by Google Cloud and
                  powered by Hack2skill, is a unique opportunity to leverage the
                  transformative power of AI to address pressing social
                  challenges across the APAC region. By utilizing Google’s GenAI
                  tools, including Gemma, Gemini, Vertex AI, and Gemini Code
                  Assist, participants will have the chance to create innovative
                  solutions that can drive meaningful change and improve lives.
                  By harnessing the potential of Google’s cutting-edge
                  technologies, develop solutions that address a wide range of
                  societal issues, from healthcare and education to
                  sustainability and accessibility.
                </p>
                <a
                  href="https://vision.hack2skill.com/event/aiforimpact_reg?utm_source=hack2skill&utm_medium=homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                    REGISTER HERE
                  </button>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  ></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
