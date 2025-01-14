import React from "react";
import {
  FaChess,
  FaCompass,
  FaEnvelope,
  FaGamepad,
  FaLaptop,
  FaVideo,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="z-50">
      {/* Mobile View */}
      <div className=" top-0 left-0 right-0 flex justify-between items-center px-4 py-2 md:hidden bg-transparent">
        <a href="/skillhive" className="text-white hover:text-blue-500">
          <FaChess size={24} />
        </a>
        <a href="/careercompus" className="text-white hover:text-blue-500">
          <FaCompass size={24} />
        </a>
        <a href="/ByteBriefs" className="text-white hover:text-blue-500">
          <FaEnvelope size={24} />
        </a>
        <a href="/Gameit" className="text-white hover:text-blue-500">
          <FaGamepad size={24} />
        </a>
        <a href="/Jobbit" className="text-white hover:text-blue-500">
          <FaLaptop size={24} />
        </a>
        <a href="/Whappning" className="text-white hover:text-blue-500">
          <FaVideo size={24} />
        </a>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex max-w-screen-xl mx-auto items-center justify-center p-4">
        <ul className="font-bold text-xl flex flex-row space-x-8">
          <li>
            <a
              href="/ByteBriefs"
              className="py-2 px-3 text-white hover:text-blue-500"
            >
              Bytebriefs
            </a>
          </li>
          <li>
            <a
              href="/careercompus"
              className="py-2 px-3 text-white hover:text-blue-500"
            >
              CareerCompass
            </a>
          </li>
          <li>
            <a
              href="/Whappning"
              className="py-2 px-3 text-white hover:text-blue-500"
            >
              Whappning
            </a>
          </li>
          <li>
            <a
              href="/skillhive"
              className="py-2 px-3 text-white hover:text-blue-500"
            >
              Skillhive
            </a>
          </li>
          <li>
            <a
              href="/Jobbit"
              className="py-2 px-3 text-white hover:text-blue-500"
            >
              Jobbit
            </a>
          </li>
          <li>
            <a
              href="/Gameit"
              className="py-2 px-3 text-white hover:text-blue-500"
            >
              Gameit
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
