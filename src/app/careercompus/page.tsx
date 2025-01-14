"use client";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

const Page: React.FC = () => {
  return (
    <main className="layout w-full h-screen overflow-hidden flex">
      {/* Sidebar */}
      <div className="sidebar h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content flex flex-col flex-1 h-full">
        <div className="gameit-container flex items-center justify-center">
          <div className="gameit-box p-6 rounded-xl text-white shadow-lg transform transition duration-300 ease-out hover:scale-105 hover:shadow-2xl">
            <h1 className="gameit-title text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              CareerCompass
            </h1>
          </div>
        </div>
        <div className="byte flex flex-row w-full h-full main-gradient">
          {/* First Section */}
          <section className="flex-1 text-gray-400 body-font p-5 flex items-center justify-center h-full">
            <div className="p-7 rounded-lg transition-transform transform hover:scale-90 text-center">
              <img
                src="/images/abhi.png"
                alt="Roadmap illustration"
                className="py-1 mx-auto"
              />

              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Roadmap
              </h1>
              <p className="mb-3 text-white">
                "A career roadmap starts with identifying your strengths and
                goals, building skills and experience, and advancing by setting
                milestones and adapting to industry trends."
              </p>
              <div className="flex justify-center">
                <a
                  href="../careercompus/roadmap/"
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative text-white">Let's Go</span>
                </a>
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="flex-1 text-gray-400 body-font p-5 flex items-center justify-center h-full">
            <div className="p-7 rounded-lg transition-transform transform hover:scale-90 text-center">
              <img
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejE4M2RkNDdhbWc2b2p6eW9panpibzd6azVwaDM2NGJ2aXcxYXRjeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S60CrN9iMxFlyp7uM8/giphy.webp"
                alt="GIF from Giphy"
                className="py-3 mx-auto"
                style={{
                  width: "400px", // Adjust width
                  height: "auto", // Maintain aspect ratio
                }}
              />

              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                BotX
              </h1>
              <p className="mb-3 text-white">
                "Your personalized guide to explore, learn, and excel in AI and
                tech-driven career paths."
              </p>
              <div className="flex justify-center">
                <a
                  href="../careercompus/ai/interBit"
                  className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                  <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                  <span className="relative text-white">Let's Go</span>
                </a>
              </div>
            </div>
          </section>
        </div>
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
};

export default Page;
