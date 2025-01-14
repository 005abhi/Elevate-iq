"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChess,
  faCompass,
  faEnvelope,
  faEnvelopesBulk,
  faGamepad,
  faLaptop,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      icon: (
        <FontAwesomeIcon icon={faLaptop} className="text-3xl text-purple-500" />
      ),
      label: "Home",
      href: "/",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-3xl text-purple-500"
        />
      ),
      label: "Bytebriefs",
      href: "/ByteBriefs",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCompass}
          className="text-3xl text-purple-500"
        />
      ),
      label: "CareerCompass",
      href: "/careercompus",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faEnvelopesBulk}
          className="text-3xl text-purple-500"
        />
      ),
      label: "Whappning",
      href: "/Whappning",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faChess} className="text-3xl text-purple-500" />
      ),
      label: "Skillhive",
      href: "/skillhive",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faVideo} className="text-3xl text-purple-500" />
      ),
      label: "Jobbit",
      href: "/Jobbit",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faGamepad}
          className="text-3xl text-purple-500"
        />
      ),
      label: "Gameit",
      href: "/Gameit",
    },
  ];

  return (
    <div>
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden flex justify-between items-center p-4 bg-black text-white">
        <h1 className="text-2xl font-bold">ELEVATEIQ</h1>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-3xl"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`sidebar ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div
          style={{
            fontFamily: "'Emilys Candy', cursive",
          }}
          className="text-white font-bold text-2xl mb-6 text-center"
        >
          ELEVATEIQ
        </div>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} passHref>
            <div className="menu-item">
              {item.icon}
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background: rgb(0, 0, 0);
          position: fixed;
          top: 0;
          left: 0;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          transition: transform 0.3s ease-in-out;
        }
        .menu-item {
          display: flex;
          align-items: center;
          padding: 1rem;
          color: white;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .menu-item:hover {
          color: #00ffab;
          transform: scale(1.1);
        }
        .menu-item span {
          margin-left: 10px;
        }

        @media (min-width: 1024px) {
          .sidebar {
            transform: translateX(0);
            position: fixed;
          }
        }
      `}</style>
    </div>
  );
};
