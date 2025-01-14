import React from "react";
import { useState } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Link from "next/link";
import { ElementType, ReactElement } from "react";
import { FiMoreVertical } from "react-icons/fi";
import SignOut from "./components/ui/signout";
import SignIn from "./components/ui/signin";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";
export default async function page() {
  const session = await getServerSession(options);
  console.log(session);
  let urlLink = "/skillhive/STUDENT/profile";
  if (session) {
    switch (session.user.role) {
      case "student":
        urlLink = "/skillhive/STUDENT/profile";
        break;
      case "company":
        urlLink = "/skillhive/COMPANY/profile";
        break;
      default:
        urlLink = "/skillhive/COLLEGE/profile";
        break;
    }
  }

  return (
    <main className="bg-black min-h-screen">
      {/* <Navbar /> */}
      {session ? (
        <div className="layout flex min-h-screen bg-black text-white">
          {/* Sidebar */}
          <div className="sidebar w-1/4 bg-clack p-4">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className="main flex-grow p-6">
            {/* Welcome Header */}
            <h1 className="text-4xl font-bold mb-4">
              Welcome,{" "}
              <span className="text-black">{session.user.fullname}</span>
            </h1>

            {/* Dashboard Link */}
            <div className="mb-6">
              <Link
                href={urlLink}
                className="text-blue-500 hover:text-blue-300 underline transition duration-200"
              >
                Go to Dashboard
              </Link>
            </div>

            {/* Sign Out Button */}
            <div>
              <SignOut />
            </div>
          </div>
        </div>
      ) : (
        <div className="layout w-full h-screen flex flex-col lg:flex-row m-0 p-0">
          {/* Sidebar */}
          <div className="sidebar h-full lg:w-64 w-full">
            <Sidebar />
          </div>
          <div className="main-content flex flex-col flex-1 h-full">
            {/* Header for Main Content */}
            <div className="gameit-container flex items-center justify-center">
              <div className="gameit-box p-6 rounded-xl text-white shadow-lg transform transition duration-300 ease-out hover:scale-105 hover:shadow-2xl">
                <h1 className="gameit-title text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Skillhive
                </h1>
              </div>
            </div>
            <div className="byte flex flex-col lg:flex-row w-full h-full main-gradient">
              <section className="text-gray-400 bg-black flex-1 py-12">
                <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                  <img
                    className="lg:w-1/2 md:w-3/4 w-4/5 mb-8 object-cover rounded"
                    alt="hero"
                    src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                  />
                  <div className="text-center w-full max-w-lg">
                    <h1 className="title-font text-2xl md:text-3xl lg:text-4xl mb-4 font-medium text-white">
                      FOR STUDENT
                    </h1>
                    <p className="leading-relaxed mb-6 text-sm md:text-base lg:text-lg">
                      JOIN DEVELOPER , PRACTICE CODING SKILLS , GET UP SKILLED
                      AND PREPARE FOR INTERVIEWS
                    </p>
                    <div className="flex justify-center mb-4">
                      <SignIn
                        url="/skillhive/STUDENT/profile"
                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm md:text-lg"
                      />
                    </div>
                    <h6 className="text-sm">DONT HAVE AN ACCOUNT?</h6>
                    <div className="flex justify-center mt-4">
                      <Link href="/signup/?role=student">
                        <button className="text-indigo-500 underline text-sm md:text-base">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              <section className="text-gray-400 bg-black flex-1 py-12">
                <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                  <img
                    className="lg:w-1/2 md:w-3/4 w-4/5 mb-8 object-cover rounded"
                    alt="hero"
                    src="data:image/jpeg;base64,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"
                  />
                  <div className="text-center w-full max-w-lg">
                    <h1 className="title-font text-2xl md:text-3xl lg:text-4xl mb-4 font-medium text-white">
                      FOR COLLEGE
                    </h1>
                    <p className="leading-relaxed mb-6 text-sm md:text-base lg:text-lg">
                      EXHIBIT YOUR PROJECTS AND ACHIEVEMENTS
                    </p>
                    <div className="flex justify-center mb-4">
                      <SignIn
                        url="/skillhive/COLLEGE/profile"
                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm md:text-lg"
                      />
                    </div>
                    <h6 className="text-sm">DONT HAVE AN ACCOUNT?</h6>
                    <div className="flex justify-center mt-4">
                      <Link href="/signup/?role=college">
                        <button className="text-indigo-500 underline text-sm md:text-base">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              <section className="text-gray-400 bg-black flex-1 py-12">
                <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                  <img
                    className="lg:w-1/2 md:w-3/4 w-4/5 mb-8 object-cover rounded"
                    alt="hero"
                    src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg"
                  />
                  <div className="text-center w-full max-w-lg">
                    <h1 className="title-font text-2xl md:text-3xl lg:text-4xl mb-4 font-medium text-white">
                      FOR COMPANY
                    </h1>
                    <p className="leading-relaxed mb-6 text-sm md:text-base lg:text-lg">
                      WE ARE THE MARKET-LEADING PALTFORM TO IDENTFY AND HIRE
                      DEVOLOPERS WITH THE RIGHT SKILLS
                    </p>
                    <div className="flex justify-center mb-4">
                      <SignIn
                        url="/skillhive/COMPANY/profile"
                        className="inline-flex text-white bg-indigo-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm md:text-lg"
                      />
                    </div>
                    <h6 className="text-sm">DONT HAVE AN ACCOUNT?</h6>
                    <div className="flex justify-center mt-4">
                      <Link href="/signup/?role=company">
                        <button className="text-indigo-500 underline text-sm md:text-base">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
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
