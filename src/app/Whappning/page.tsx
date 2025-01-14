import React from "react";
import Link from "next/link";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

export const page = () => {
  return (
    <main className="layout w-full h-screen flex flex-col lg:flex-row m-0 p-0">
      {/* Sidebar */}
      <div className="sidebar h-full lg:w-64 w-full">
        <Sidebar />
      </div>
      <div className="main-content flex flex-col flex-1 h-full">
        <div className="gameit-container flex items-center justify-center">
          <div className="gameit-box p-6 rounded-xl text-white shadow-lg transform transition duration-300 ease-out hover:scale-105 hover:shadow-2xl">
            <h1 className="gameit-title text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Whappning{" "}
            </h1>
          </div>
        </div>
        <div className="byte flex flex-col lg:flex-row w-full h-full main-gradient">
          <div className="flex flex-col lg:flex-row w-full">
            {/* First Section */}
            <section className="text-gray-400 body-font flex-1  transition duration-300 ease-in-out transform hover:scale-90 w-full">
              <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img
                  className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                  alt="hero"
                  src="https://31.media.tumblr.com/980aa32387b22f82a878f252324e8db4/tumblr_mg1wabRW301qbe0gto1_500.gif"
                />
                <div className="text-center lg:w-2/3 w-full">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    ONLINE HACKATHONS
                  </h1>
                  <p className="leading-relaxed mb-8">
                    "Code, Compete, Conquer – Online Hackathons Unleashed!"
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      <Link href="../Whappning/online">Lets Go</Link>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Second Section */}
            <section className="text-gray-400 body-font flex-1  transition duration-300 ease-in-out transform hover:scale-90 w-full">
              <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img
                  className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                  alt="hero"
                  src="https://media0.giphy.com/media/RKGZNZLTbFkeJ7kZ4h/200w.webp?cid=ecf05e47zqqtjz9vlwgrejlq0bhur0gncxb203jyuux9k6u2&ep=v1_gifs_search&rid=200w.webp&ct=g"
                />
                <div className="text-center lg:w-2/3 w-full">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    OFFLINE HACKATHONS
                  </h1>
                  <p className="leading-relaxed mb-8">
                    "Hack, Build, Thrive – All Offline!"
                  </p>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      <Link href="../Whappning/onfline">Lets Go</Link>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
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

export default page;
