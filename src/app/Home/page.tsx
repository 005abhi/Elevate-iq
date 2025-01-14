"use client";

import { ReactElement } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Spline from "@splinetool/react-spline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChess,
  faCompass,
  faEnvelopesBulk,
  faGamepad,
  faLaptop,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import {} from "@fortawesome/free-solid-svg-icons";

import { AlarmClockOff, ArrowDownNarrowWide } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      {/* Background Spline */}
      <div>
        <Spline
          scene="https://prod.spline.design/OCgT0c6ZNdIkM3dt/scene.splinecode"
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        />
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <header
          id="home"
          className="flex flex-col w-full h-screen items-center justify-center relative overflow-hidden"
        >
          <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 text-center md:w-2/3">
            <div className="flex flex-col gap-2">
              <h1
                className="text-3xl sm:text-5xl md:text-8xl font-black text-white"
                style={{
                  fontFamily: "Playfair Display",
                  display: "flex", // Use flexbox
                  justifyContent: "center", // Center horizontally
                  alignItems: "center", // Center vertically
                  height: "100%", // Ensure it takes the full container height
                }}
              >
                ElevateIQ
              </h1>
              <h2 className="text-sm sm:text-lg md:text-2xl text-white">
                Reskilling Workforce
              </h2>
            </div>
            <p className="max-w-xs sm:max-w-md text-xs sm:text-base text-zinc-300">
              ElevateIQ is a comprehensive platform that serves as a bridge
              between educational institutions and industry demands,
              facilitating seamless skill alignment and boosting employability
              among Indian youth.
            </p>
          </div>
        </header>

        <section
          id="about"
          className="h-auto min-h-screen w-full flex relative items-center justify-center p-4 sm:p-8"
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 sm:gap-8 max-w-7xl">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white">
              Stay Ahead in Tech with These Features!!
            </h3>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {infoCards.map((infoCard, index) => (
                <InfoCard
                  key={index}
                  Icon={infoCard.icon}
                  title={infoCard.title}
                >
                  <div className="flex flex-col items-center justify-center mb-4 p-4">
                    <p className="text-xs sm:text-base text-center text-white">
                      {infoCard.bodyText}
                    </p>
                    <a
                      href={infoCard.href}
                      className="bg-fuchsia-700 rounded p-2 text-xs sm:text-sm transition-colors hover:bg-fuchsia-800 mt-2"
                    >
                      {infoCard.buttonText}
                    </a>
                  </div>
                </InfoCard>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="fixed bottom-4 right-4 z-20 flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 text-white w-48 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4H9m1 4h1v-4h3l1.586 2.586a2 2 0 11-1.707 1.707L13 16zm6 0h3m-3 0h3m-6 0h3m-3 0H9m3-4V6h3"
            />
          </svg>
        </span>
        <span className="font-semibold text-sm">TEAMBOTS</span>
      </div>
    </main>
  );
}

interface IInfoCardProps {
  title: string;
  Icon: JSX.Element;
  children: ReactElement<any, any>;
}

function InfoCard({ title, Icon, children }: IInfoCardProps) {
  return (
    <div className="w-full h-72 sm:h-80 flex flex-col justify-around items-center p-6 sm:p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
      <div className="p-4 bg-fuchsia-700 rounded-full">{Icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-center">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

interface IInfoCard {
  title: string;
  bodyText: string;
  buttonText: string;
  icon: JSX.Element;
  id: number;
  href: string;
}

const infoCards: IInfoCard[] = [
  {
    title: "Gameit",
    bodyText:
      "Encourage fun, interactive learning by gamifying educational content with quizzes and interview challenges.",
    buttonText: "Explore",
    icon: <FontAwesomeIcon icon={faGamepad} style={{ color: "#f0f2f4" }} />,
    id: 1,
    href: "../Gameit",
  },
  {
    title: "Skillhive",
    bodyText:
      "Create a centralized platform where students can showcase their projects, gain visibility, and connect with potential recruiters.",
    buttonText: "Explore",
    icon: <FontAwesomeIcon icon={faChess} style={{ color: "#f0f2f4" }} />,
    id: 2,
    href: "../SkillHive/Login",
  },
  {
    title: "Bytebriefs",
    bodyText:
      "Keep users informed about the latest trends and developments in the software industry through curated news updates.",
    buttonText: "Explore",
    icon: (
      <FontAwesomeIcon icon={faEnvelopesBulk} style={{ color: "#f0f2f4" }} />
    ),
    id: 3,
    href: "../ByteBriefs",
  },
  {
    title: "Jobbit",
    bodyText:
      "Deliver engaging and accessible educational content through short, visually appealing videos.",
    buttonText: "Explore",
    icon: <FontAwesomeIcon icon={faLaptop} style={{ color: "#f0f2f4" }} />,
    id: 4,
    href: "../Jobbit",
  },
  {
    title: "Whappning",
    bodyText:
      "Help students stay updated on hackathons, coding competitions, and industry events to foster participation and networking.",
    buttonText: "Explore",
    icon: <FontAwesomeIcon icon={faVideo} style={{ color: "#f0f2f4" }} />,
    id: 5,
    href: "../Whappning",
  },
  {
    title: "CareerCompass",
    bodyText:
      "Guide students toward suitable career paths in the tech industry by providing detailed role insights and skill-building resources.",
    buttonText: "Explore",
    icon: <FontAwesomeIcon icon={faCompass} style={{ color: "#f0f2f4" }} />,
    id: 6,
    href: "../Whappning",
  },
];
