"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Correct import for app directory
import "./globals.css";
import { Sidebar } from "../../components/Sidebar";
import { Url } from "next/dist/shared/lib/router/router";

const programs = [
  {
    title: "UI Designer",
    description:
      "A UI Designer focuses on crafting visually appealing, user-friendly interfaces that enhance user interactions with digital products.",
    buttonText: "View program",
    route: "/careercompus/pages/UI", // Route for this program
    color: "#2196F3",
  },
  {
    title: "UX Designer",
    description:
      "UX Designer: Enhances user satisfaction by optimizing the usability, accessibility, and interaction experience of digital products.",
    buttonText: "View program",
    route: "/careercompus/pages/UX", // Route for this program
    color: "#FF6F61",
  },
  {
    title: "Frontend Developer",
    description:
      "Frontend Developer: Builds the visual and interactive aspects of a website or application using HTML, CSS, and JavaScript.",
    buttonText: "View program",
    route: "/careercompus/pages/FR", // Route for this program
    color: "#6A67CE",
  },
  {
    title: "Backend Developer",
    description:
      "Backend Developer: Develops the server-side logic, databases, and APIs that power applications..",
    buttonText: "View program",
    route: "/careercompus/pages/BK", // Route for this program
    color: "#4CAF50",
  },
  {
    title: "Full Stack Developer",
    description:
      "Full Stack Developer: Handles both frontend and backend development to create complete web or mobile applications.",
    buttonText: "View program",
    route: "/careercompus/pages/FS", // Route for this program
    color: "#2196F3",
  },
  {
    title: "Mobile App Developer",
    description:
      "Mobile App Developer: Designs and develops applications for mobile platforms like Android and iOS.",
    buttonText: "View program",
    route: "/careercompus/pages/MA", // Route for this program
    color: "#FF6F61",
  },
  {
    title: "Game Developer",
    description:
      "Game Developer: Creates interactive video games by coding gameplay mechanics, graphics, and user interfaces.",
    buttonText: "View program",
    route: "/careercompus/pages/GD", // Route for this program
    color: "#6A67CE",
  },
  {
    title: "Data Analyst",
    description:
      "Data Analyst: Extracts, cleans, and interprets data to provide actionable insights and support decision-making.",
    buttonText: "View program",
    route: "/careercompus/pages/DA", // Route for this program
    color: "#4CAF50",
  },
  {
    title: "Data Scientist",
    description:
      "Data Scientist: Analyzes complex data to extract meaningful insights, build predictive models, and solve business problems.",
    buttonText: "View program",
    route: "/careercompus/pages/DS", // Route for this program
    color: "#2196F3",
  },
  {
    title: "DevOps Engineer",
    description:
      "DevOps Engineer: Bridges development and operations by automating workflows and ensuring seamless software deployment.",
    buttonText: "View program",
    route: "/careercompus/pages/Dev", // Route for this program
    color: "#FF6F61",
  },
  {
    title: "Cloud Engineer",
    description:
      "Cloud Engineer: Designs, deploys, and manages cloud-based infrastructure and services for scalable applications.",
    buttonText: "View program",
    route: "/careercompus/pages/cloud", // Route for this program
    color: "#6A67CE",
  },
  {
    title: "Security Analyst",
    description:
      "Security Analyst: Protects organizational systems and data by identifying vulnerabilities and responding to security incidents.",
    buttonText: "View program",
    route: "/careercompus/pages/security", // Route for this program
    color: "#4CAF50",
  },
  {
    title: "Cybersecurity Engineer",
    description:
      "Cybersecurity Engineer: Builds and implements secure systems and strategies to protect against cyber threats and attacks.",
    buttonText: "View program",
    route: "/careercompus/pages/cyber", // Route for this program
    color: "#2196F3",
  },
  {
    title: "Blockchain Developer",
    description:
      "Blockchain Developer: Designs and develops decentralized applications and systems using blockchain technology.",
    buttonText: "View program",
    route: "/careercompus/pages/BC", // Route for this program
    color: "#FF6F61",
  },
  {
    title: "Database Administrator (DBA)",
    description:
      "Database Administrator (DBA): Manages and maintains databases to ensure data integrity, security, and optimal performance.",
    buttonText: "View program",
    route: "/careercompus/pages/DBA", // Route for this program
    color: "#6A67CE",
  },
  {
    title: "Big Data Engineer",
    description:
      "Big Data Engineer: Develops and manages systems that process and analyze large volumes of structured and unstructured data.",
    buttonText: "View program",
    route: "/careercompus/pages/bigdata", // Route for this program
    color: "#4CAF50",
  },
  {
    title: "QA Tester",
    description:
      "QA Tester: Ensures software quality by testing applications for bugs and verifying that they meet requirements.",
    buttonText: "View program",
    route: "/careercompus/pages/QA", // Route for this program
    color: "#2196F3",
  },
  {
    title: "Automation Tester",
    description:
      "Automation Tester: Writes scripts and uses tools to automate testing processes, improving efficiency and accuracy.",
    buttonText: "View program",
    route: "/careercompus/pages/AT", // Route for this program
    color: "#4CAF50",
  },
];

export default function ProgramCards() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <main className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="byte">
        <div className="container">
          <div className="card-grid">
            {programs.map((program, index) => (
              <div
                key={index}
                className="card"
                style={{ backgroundColor: program.color }}
              >
                <h2 className="title">{program.title}</h2>
                <p className="description">{program.description}</p>
                <button
                  className="button"
                  onClick={() => handleNavigation(program.route)}
                >
                  {program.buttonText}
                </button>
              </div>
            ))}
          </div>
          <style jsx>{`
            .header {
              text-align: center;
              font-size: 2rem;
              margin-bottom: 20px;
              color: white;
            }

            .container {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 20px;
              background-color: rgb(0, 0, 0);
            }

            .card-grid {
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
              justify-content: center;
            }

            .card {
              border-radius: 12px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              padding: 20px;
              width: 300px;
              display: flex;
              flex-direction: column;
              gap: 10px;
              transition: transform 0.3s ease;
              color: white;
            }

            .card:hover {
              transform: translateY(-10px);
            }

            .title {
              font-size: 1.5rem;
              font-weight: 600;
            }

            .description {
              font-size: 1rem;
            }

            .button {
              background-color: white;
              color: black;
              border: none;
              padding: 10px 15px;
              font-size: 1rem;
              border-radius: 8px;
              cursor: pointer;
              margin: 10px 0;
            }

            .button:hover {
              background-color: #f1f1f1;
            }

            @media (max-width: 768px) {
              .card-grid {
                flex-direction: column;
                align-items: center;
              }
            }
          `}</style>
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
}
