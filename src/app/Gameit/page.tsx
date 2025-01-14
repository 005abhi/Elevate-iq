"use client";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

const Page: React.FC = () => {
  return (
    <main className="layout w-full h-screen flex flex-col lg:flex-row m-0 p-0">
      {/* Sidebar */}
      <div className="sidebar h-full lg:w-64 w-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content flex flex-col flex-1 h-full">
        {/* Header for Main Content */}
        <div className="gameit-container flex items-center justify-center">
          <div className="gameit-box p-6 rounded-xl text-white shadow-lg transform transition duration-300 ease-out hover:scale-105 hover:shadow-2xl">
            <h1 className="gameit-title text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Gameit
            </h1>
          </div>
        </div>

        <div className="byte flex flex-col lg:flex-row w-full h-full main-gradient">
          {/* First Section */}
          <section className="flex-1 text-gray-400 body-font px-4 py-2 flex flex-col items-center justify-center h-full">
            <div className="p-4 rounded-lg transition-transform transform hover:scale-95 text-center">
              <img
                src="https://media.tenor.com/tGFp68ulbMIAAAAi/pom-bot.gif"
                alt="GIF from Giphy"
                className="py-2 mx-auto max-w-[250px] sm:max-w-[300px] w-full"
              />
              <h1 className="title-font text-xl sm:text-2xl mb-2 font-medium text-white">
                QUIZBOT
              </h1>
              <p className="mb-2 text-white text-sm sm:text-base leading-relaxed">
                "Unlock your full potential in computer science with our
                personalized Quizbot."
              </p>
              <div className="flex justify-center">
                <a
                  href="../Gameit/Aiquizbot/"
                  className="relative inline-flex items-center justify-center p-3 px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                  <span className="relative text-white text-sm">Let's Go</span>
                </a>
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="flex-1 text-gray-400 body-font px-4 py-2 flex flex-col items-center justify-center h-full">
            <div className="p-4 rounded-lg transition-transform transform hover:scale-95 text-center">
              <img
                src="https://media.tenor.com/2YQj1-QHrtMAAAAi/vutura-chatbot.gif"
                alt="GIF from Giphy"
                className="py-2 mx-auto max-w-[250px] sm:max-w-[300px] w-full"
              />
              <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">
                VirtuHire
              </h1>
              <p className="mb-3 text-white text-sm sm:text-base">
                "Meet your AI virtual interviewer."
              </p>
              <div className="flex justify-center">
                <a
                  href="../Gameit/AI/interBit"
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                  <span className="absolute bottom-0 right-0 block w-32 h-32 sm:w-64 sm:h-64 mb-24 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative text-white text-sm sm:text-base">
                    Let's Go
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 z-20 flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-600 to-orange-500 text-white w-32 sm:w-48 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
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
        <span className="font-semibold text-sm sm:text-base">TEAMBOTS</span>
      </div>
    </main>
  );
};

export default Page;
