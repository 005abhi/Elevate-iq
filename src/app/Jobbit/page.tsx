"use client";
import React, { useEffect, useRef } from "react";
import { Sidebar } from "../components/Sidebar";
import "./globals.css";

const videoUrls = [
  "https://youtube.com/embed/4Fannua_qiU?autoplay=0",
  "https://youtube.com/embed/qHGw8TqEGm8?autoplay=0",
  "https://youtube.com/embed/kZdipCwbc2I?autoplay=0",
  "https://youtube.com/embed/GTpGEtmyE9s?autoplay=0",
  "https://youtube.com/embed/Y2J27N1Bino?autoplay=0",
  "https://youtube.com/embed/CdN697NiTjA?autoplay=0",
  "https://youtube.com/embed/_nqSoFzD4i8?autoplay=0",
  "https://youtube.com/embed/-x51PAj_3-4?autoplay=0",
  "https://youtube.com/embed/TqFsheq2vTw?autoplay=0",
  "https://youtube.com/embed/WAURIqycgaQ?autoplay=0",
  "https://youtube.com/embed/pO9x6wahrg?autoplay=0",
  "https://youtube.com/embed/nC82yp64Q2Q?autoplay=0",
  "https://youtube.com/embed/dtjw8AaPJpg?autoplay=0",
  "https://youtube.com/embed/mPQtlia0F2o?autoplay=0",
  "https://youtube.com/embed/wKRCnQ0EEB8?autoplay=0",
];

const Page = () => {
  const videoRefs = useRef<HTMLIFrameElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iframe = entry.target as HTMLIFrameElement;
          const iframeSrc = iframe.src;

          if (entry.isIntersecting) {
            // Resume video playback when in view
            if (!iframeSrc.includes("autoplay=1")) {
              iframe.src = iframeSrc.replace("autoplay=0", "autoplay=1");
            }
          } else {
            // Pause video playback when out of view
            iframe.src = iframeSrc.replace("autoplay=1", "autoplay=0");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    videoRefs.current.forEach((iframe) => {
      if (iframe) observer.observe(iframe);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
              Jobbit
            </h1>
          </div>
        </div>
        <div
          className="byte"
          style={{
            height: "100vh",
            overflowY: "scroll",
            scrollSnapType: "y mandatory",
          }}
        >
          {videoUrls.map((videoUrl, index) => (
            <div
              key={index}
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                scrollSnapAlign: "start",
              }}
            >
              <iframe
                ref={(el) => {
                  if (el) {
                    videoRefs.current[index] = el;
                  }
                }}
                width="500"
                height="700"
                src={videoUrl}
                title={`YouTube video player ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                style={{
                  border: "none",
                  borderRadius: "10px",
                }}
              ></iframe>
            </div>
          ))}
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
