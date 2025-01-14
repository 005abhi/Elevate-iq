"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    id: "overview",
    title: "OVERVIEW",
    content: `
    A Game Developer designs, programs, and builds interactive video games for platforms like PCs, consoles, and mobile devices. They combine programming skills, creativity, and an understanding of game mechanics to create immersive experiences. Game developers work in teams with artists, designers, and sound engineers to bring games to life.

Key responsibilities include game mechanics, physics, graphics rendering, and optimizing performance. They may specialize in roles like gameplay programming, AI development, or tools programming.`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner Level (0–6 months)

Goals:
-Understand the fundamentals of game development.
-Learn a game engine and basic programming skills.

Steps:
1.Learn Programming Basics (2 months)
-Choose a language: C# (Unity), C++ (Unreal Engine), or Python (simple prototypes).
-Master basic concepts: loops, functions, OOP, and data structures.

2.Explore Game Engines (2 months)
-Start with a beginner-friendly engine:
-Unity (C#) for versatility.
-Godot (GDScript/Python) for simplicity.
-Unreal Engine (C++) for AAA-quality visuals.

3.Build Small Games (2 months)
-Create simple projects:
-2D platformer.
-Pong or Breakout clone.
-Basic endless runner.
-Focus on learning the engine’s interface and scripting basics.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)

Goals:
-Develop intermediate programming and game mechanics skills.
-Create polished, playable games with advanced features.

Steps:
1.Deepen Programming Knowledge (3–4 months)
-Learn advanced concepts like physics, AI, and multithreading.
-Practice design patterns like Singleton, Factory, and Component.

2.Master Game Engine Features (3–4 months)
-Unity: Physics, animation, UI, particle systems.
-Unreal Engine: Blueprints, visual scripting, and C++ customization.
-Godot: Scene system, scripting, and signals.

3.Explore Game Mechanics and Systems (3–6 months)
-Create advanced mechanics like inventory, quest systems, and combat.
-Work on AI behaviors (pathfinding, state machines).
-Integrate audio systems and effects.

4.Build a Complete Game (3–6 months)
-Examples:
-A 2D RPG or adventure game.
-A 3D shooter or exploration game.
-Add polish: menus, save systems, and animations.
`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Build production-ready games with scalability, optimization, and multiplayer features.
-Explore specialization and advanced tools.

Steps:
1.Learn Optimization and Advanced Techniques (6–12 months)
-Optimize performance (frame rate, memory usage).
-Master shaders, rendering pipelines, and lighting systems.

2.Specialize in an Area (3–6 months)
-Gameplay Programming: Focus on mechanics and user interactions.
-AI Development: Design complex NPC behaviors.
-Graphics Programming: Work on shaders, rendering, and visual effects.

3.Create Multiplayer Games (6–12 months)
-Learn networking basics: Photon, Mirror (Unity), or Unreal’s networking system.
-Build features like matchmaking, leaderboards, and chat systems.

4.Contribute to a Team Project (6–12 months)
-Work with artists and designers on a larger project.
-Focus on scalability, debugging, and project management.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: ` Technologies, Tools, and Languages for Game Developers
Programming Languages:
Beginner: C#, Python, GDScript
Intermediate: C++, JavaScript (web games), Lua (Roblox, scripting)
Advanced: Rust, Java (Android games), HLSL/GLSL (shader programming)

Game Engines:
Unity: Versatile for 2D/3D games (C#).
Unreal Engine: High-quality 3D games and simulations (C++, Blueprints).
Godot: Lightweight and beginner-friendly (GDScript, C#).
Other Engines: CryEngine, GameMaker Studio, Construct 3.

Graphics Tools:
Blender, Maya, 3ds Max (3D modeling).
Photoshop, GIMP, or Krita (2D art).
Game Design and Prototyping Tools:
Tiled Map Editor, RPG Maker, or Figma (level design and UI prototyping).

Audio Tools:
Audacity, FMOD, Wwise (sound design and integration).
Networking and Multiplayer:
Photon Engine, Mirror (Unity), Unreal’s replication system.
Version Control and Collaboration:
Git, GitHub, Perforce.

Specialized Tools:
AI/Pathfinding: A* Pathfinding, NavMesh.
Physics: NVIDIA PhysX, Havok.
Scripting: Lua, Visual Scripting (Blueprints in Unreal).`,
  },
];

const HomePage = () => {
  const router = useRouter();

  const handleSectionClick = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={styles.mainContainer}>
      {/* Background */}
      <div style={styles.backgroundImage}></div>

      {/* Navigation Bar */}
      <header style={styles.navbar}>
        <div style={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            style={{ cursor: "pointer", color: "#fff" }}
            title="Back to Home"
            onClick={() => router.push("/careercompus")}
          />
        </div>
        <nav style={styles.nav}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              style={styles.navItem}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <div id="main-content" style={styles.content}>
        {sections.map((section) => (
          <section key={section.id} id={section.id} style={styles.section}>
            <h2 style={styles.sectionTitle}>{section.title}</h2>
            {section.content.split("\n").map((line, index) =>
              line.trim() ? (
                <p key={index} style={styles.paragraph}>
                  {line.trim()}
                </p>
              ) : (
                <br key={index} />
              )
            )}
          </section>
        ))}
      </div>
    </main>
  );
};

const styles: Record<string, React.CSSProperties> = {
  mainContainer: {
    position: "relative",
    minHeight: "100vh",
    fontFamily: "'Roboto', sans-serif",
    color: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url('https://img.freepik.com/free-vector/mobile-games-entertainment-poster_1284-8070.jpg?uid=R180249399&ga=GA1.1.1301806546.1734892304&semt=ais_hybrid')",backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
    filter: "brightness(0.5)",
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  iconContainer: {
    flex: "0 0 auto",
  },
  nav: {
    display: "flex",
    gap: "15px",
    flex: "1",
    justifyContent: "center",
  },
  navItem: {
    padding: "10px 15px",
    fontSize: "16px",
    background: "transparent",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "color 0.3s",
  },
  content: {
    padding: "20px",
    marginTop: "70px",
    maxWidth: "900px",
    margin: "70px auto 0",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  },
  section: {
    marginBottom: "40px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#00FF7F",
  },
  paragraph: {
    marginBottom: "10px",
    lineHeight: "1.6",
  },
};

export default HomePage;
