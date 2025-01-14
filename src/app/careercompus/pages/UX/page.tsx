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
      A User Experience (UX) Designer is responsible for creating meaningful and satisfying experiences for users when interacting with digital products or systems. They focus on understanding user needs, designing intuitive interfaces, and ensuring the overall usability of a product. UX designers work on aspects like user research, wireframing, prototyping, usability testing, and collaboration with developers and stakeholders.

Key skills of a UX designer include empathy, creativity, problem-solving, communication, and technical proficiency in design tools and technologies.

    `,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner Level (0–6 months)
Goals:
-Understand the basics of UX design and build foundational skills.
-Learn design principles, tools, and workflows.

Steps:

1.Learn UX Basics (1–2 months)
-Study UX principles (usability, accessibility, user-centered design).
-Read books like Don’t Make Me Think by Steve Krug and The Design of Everyday Things by Don Norman.

2.Understand the Design Process (2–3 months)
-Research: User personas, surveys, interviews.
-Ideation: Sketching, wireframes, and user flows.
-Testing: Usability testing basics.

3.Learn Tools (2 months)
-Design: Figma, Adobe XD, or Sketch.
-Prototyping: InVision, Marvel, or Figma.
-Research: Optimal Workshop or Hotjar.

4.Build a Portfolio Project (1 month)
-Create a case study based on a hypothetical app redesign.
-Showcase your understanding of research, wireframes, and prototypes.
    `,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)
Goals:
-Refine your skills and start building real-world experience.
-Specialize in an area like UX research, interaction design, or usability testing.

Steps:

1.Deepen Your Knowledge (2–4 months)
-Learn about advanced UX concepts: heuristics, accessibility standards, and responsive design.
-Study tools for analytics and research (Google Analytics, UXCam).

2.Start Freelancing or Internships (4–6 months)
-Work on real projects to improve your skills.
-Contribute to open-source projects or volunteer work to expand your portfolio.

3.Master Advanced Tools (2–3 months)
-Learn motion design for interactive prototypes (e.g., Principle, After Effects).
-Get comfortable with collaboration tools like Jira, Slack, and Trello.

4.Expand Your Portfolio (3 months)
-Add diverse projects showcasing your expertise in different areas.
-Emphasize user research, iterations, and results.`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `
Advanced Level (18–36 months)

Goals:
-Become an expert in UX design and build a strong personal brand.
-Lead projects and mentor others.

Steps:
1.Specialize and Stay Updated (6–12 months)
-Explore subfields like UX strategy, information architecture, or service design.
-Stay updated with industry trends (follow Nielsen Norman Group, UX Collective).

2.Build a Personal Brand (6 months)
-Write articles, create a blog, or speak at UX events.
-Share insights on platforms like LinkedIn, Medium, or Dribbble.

3.Learn Front-End Basics (3–6 months)
-Understand HTML, CSS, and JavaScript to collaborate effectively with developers.

4.Seek Leadership Roles (6–12 months)
-Take on responsibilities like leading UX projects or mentoring junior designers.
-Aim for roles like UX Lead or Product Designer.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Languages for UX Designers

1.Design and Prototyping Tools
Beginner: Figma, Adobe XD, Sketch
Intermediate: InVision, Axure RP, Marvel
Advanced: Principle, After Effects

2.Research and Testing Tools
Google Analytics, Hotjar, Optimal Workshop, UsabilityHub

3.Collaboration Tools
Jira, Trello, Miro, Slack

4.Front-End Technologies
Languages: HTML, CSS, JavaScript
Frameworks: Bootstrap, Tailwind CSS

5.Other Key Technologies
Motion Design: Principle, Lottie
Analytics and Heatmaps: UXCam, Crazy Egg
Accessibility Testing: Wave, Axe

This roadmap ensures structured progression, helping you evolve from beginner to expert in UX design. Let me know if you'd like any part elaborated!






`,
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
    backgroundImage: "url('https://media.istockphoto.com/id/1189378904/vector/mobile-apps-creation-of-a-mobile-application-web-page-created-from-separate-blocks-user.jpg?s=2048x2048&w=is&k=20&c=Gh6JCMl-X8f0XYfrHAnTHu31IDkk7WtAlo-GH-mFoMU=')",
    backgroundSize: "cover",
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
