import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "../../components/Sidebar";
import "../globals.css";

const page = () => {
  return (
    <main className="layout ">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="byte ">
        {/* body */}
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=12.936081682558926, 77.69876719587919+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Umiya Business Bay Tower 9th Floor, Tower 2, 2, Cessna
                    Business Park, Outer Ring Road (Marathahalli – Sarjapur
                    Sector) Internal Road, Kaverappa Layout Kadubeesanahalli
                    Bengaluru – 560103 Karnataka, India Bengaluru, KA 560103
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    {" "}
                    PECHACKS{" "}
                  </h2>
                  <a
                    href="https://kanini.com/kodeathon-competition/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    EMAIL
                  </h2>
                  <p className="leading-relaxed">letsconnect@kanini.com</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F924755693%2F2553876951581%2F1%2Foriginal.20241230-050155?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.0889748549323&fp-y=0.21589402963&s=782ab87c8a36f4167d3a68aff5bbce71"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  KANINI KODEATHON THE POWERSTACK CHALLENGE
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  We are thrilled to announce KANINI KODEATHON THE POWERSTACK
                  Challenge - an exciting hackathon event that brings together
                  Data Professionals and Full Stack Developers (.NET +
                  Angular/React experience) with 5+ years of expertise to tackle
                  the POWERSTACK Challenge!
                </p>
              </a>
            </div>
          </div>
        </section>
        {/*1*/}
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=23.23238987326168, 72.65352386800208+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">GANDHINAGAR GUJARAT</p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    {" "}
                    HACK THIS FALL 21-23 MARCH 2025{" "}
                  </h2>
                  <a
                    href="https://hackthisfall.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    EMAIL
                  </h2>
                  <p className="leading-relaxed">
                    mail:tohackthisfall@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/213/192/thumb/backsplash.jpg?1732871423"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />
                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl"></h3>
                HACK THIS FALL
                <p className="mt-2 max-w-sm text-gray-700">
                  Hack This Fall is one of India's most thriving hacker
                  communities. Join us to build groundbreaking solutions,
                  inspire problem-solvers, and grow together in a diverse,
                  supportive environment.
                </p>
              </a>
            </div>
          </div>
        </section>
        {/*4*/}

        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=18.6071348271535, 73.87518841986781+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    AIT Open Source Software Club at the prestigious Army
                    Institute of Technology (AIT), Pune
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    Innerve 9.0{" "}
                  </h2>
                  <a
                    href="https://innerve-9.devpost.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/166/868/datas/full_width.jpeg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  Innerve 9.0
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  Innerve 9 is India's Largest Student-Driven Hackathon,
                  organized by the AIT Open Source Software Club at the
                  prestigious Army Institute of Technology (AIT), Pune. This
                  flagship innovation event is designed to ignite creativity,
                  encourage technical problem-solving, and foster a spirit of
                  collaboration among the brightest young minds across the
                  nation. With no registration fees, the event is accessible to
                  all students who aspire to make a difference through
                  technology.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/*5*/}
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=23.12938023362739, 79.87514853559608 +(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">Gyan Ganga Group of Institutions</p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    GENETHON{" "}
                  </h2>
                  <a
                    href="https://genethonggits.devpost.com/register?flow%5Bdata%5D%5Bchallenge_id%5D=23195&flow%5Bname%5D=register_for_challenge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/161/459/datas/medium_square.jpg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  GENETHON
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  Gyanotsav 2025 Techfest of Gyan Ganga Group of Institutions
                  Jabalpur MP has launched a internal Hackathon “Genethon”
                  intending towards solving the problems faced by organizations,
                  society through innovative solutions developed by students.
                  The event will provide a platform to young students by
                  enabling them to identify real life problems and to think,
                  design and develop modern solutions for them which is viable
                  enough to be transformed into a business startup.
                </p>
              </a>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=13.048957158957775, 80.07543201349088+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Panimalar Engineering College, Nazarathpettai, Poonamallee,
                    Chennai, Tamil Nadu - 600123
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    {" "}
                    PECHACKS{" "}
                  </h2>
                  <a
                    href="https://pechacks.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    EMAIL
                  </h2>
                  <p className="leading-relaxed">team@pechacks.org</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://s3.amazonaws.com/assets.mlh.io/events/splashes/000/213/186/thumb/banner_300x300.png?1730224175"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  PEC HACKS 2.0 TAMILNADU'S LARGEST HACKATHON|DECEMBER 28TH 29TH
                  2024 36-HR HACKATHON IN CHENNAI
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  Welcome, Hackers! "Welcome to PEC HACKS 2.0, where innovation
                  meets impact! We are thrilled to invite you to this exciting
                  hackathon organized by Panimalar Engineering College. It is
                  your gateway to a world of possibilities, where passionate
                  individuals like you come together to unleash their
                  creativity, solve real-world challenges, and make a meaningful
                  difference." Prize Pool of ₹ 19 Lakh+ .
                </p>
              </a>
            </div>
          </div>
        </section>
        {/*2*/}

        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=13.08917006236919, 77.63597431789798+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                style={{
                  filter:
                    "grayscale(0.5) contrast(1.5) opacity(0.6) sepia(0.2)",
                }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    KNS INSTITUTE OF TECHNOLOGY,BENGALURU-560045
                  </p>
                </div>

                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    {" "}
                    Code Crusade: Ai Hackathon{" "}
                  </h2>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeBQ-B3KzTAtPIPn3oXv8j5e7eTuiHlLbLpQjqf9hemrYKUUw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text">
                      REGISTER HERE
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <a href="#" className="block">
                <img
                  alt="Art"
                  src="https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/149/609/datas/medium_square.jpg"
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  Code Crusade: Ai Hackathon
                </h3>

                <p className="mt-2 max-w-sm text-gray-700">
                  Tech Takshak 2024 is a national level tech fest organized by
                  the departments of Computer Science & Engineering (CSE),
                  Information Science & Engineering (ISE) and Data Science at
                  KNSIT. Tech Takshak will take place December 11th and 12th at
                  the KNSIT campus. The goal of the fest is to bring together
                  innovators, creators, and tech enthusiasts for 13 different
                  events. This 2 Days Hackathon event is your opportunity to
                  transform ideas into reality, network with tech enthusiasts,
                  and showcase your skills. Are you ready to innovate?
                </p>
              </a>
            </div>
          </div>
        </section>
        {/*3*/}
      </div>
    </main>
  );
};

export default page;
