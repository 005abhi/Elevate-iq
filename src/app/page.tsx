"use client";
import Navbar from "./components/Navbar";
import HomeContent from "./Home/page";
import ".//globals.css";

export default function App() {
  return (
    <div>
      <div>
        <HomeContent />
      </div>
      <style jsx>{`
        .app {
          display: flex;
          height: 100vh;
          color: #fff;
        }
        .content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
