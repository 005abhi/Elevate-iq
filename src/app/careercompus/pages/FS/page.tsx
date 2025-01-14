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
     A Full-Stack Developer is proficient in both frontend and backend development, enabling them to build complete web or mobile applications from end to end. They handle the visual design and user experience (frontend), as well as server-side logic, databases, and APIs (backend).

Key skills include proficiency in programming, frameworks, databases, version control, and DevOps practices. Full-stack developers are versatile, making them highly valuable in modern software development.`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner Level (0–6 months)
Goals:
-Understand the basics of frontend and backend development.
-Build foundational skills in programming and web technologies.

Steps:
1.Learn HTML, CSS, and JavaScript (2 months)
-Master web development basics: structure (HTML), styling (CSS), and interactivity (JavaScript).
-Build small projects like a personal portfolio or landing page.

2.Explore Frontend Basics (1–2 months)
-Learn frontend frameworks/libraries like React.js, Vue.js, or Angular.
-Understand responsive design and CSS frameworks (Bootstrap, Tailwind CSS).

3.Start with Backend Basics (2 months)
-Pick a backend language like Node.js (JavaScript), Python, or PHP.
-Learn to build REST APIs and work with a simple database like SQLite or MongoDB.

4.Build a Small Full-Stack Project (1 month)
-Example: A simple blog or to-do app with frontend, backend, and database integration.`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)
Goals:
-Develop advanced skills in frontend and backend.
-Build dynamic, scalable, and secure applications.

Steps:
1.Deepen Frontend Knowledge (3–4 months)
-Learn advanced features of your chosen frontend framework (e.g., React hooks, state management with Redux).
-Explore advanced CSS techniques (Sass, animations) and testing tools (Jest, Cypress).

2.Advance Backend Skills (3–4 months)
-Master backend frameworks like Express.js (Node.js), Django (Python), or Spring Boot (Java).
-Learn advanced database management, authentication, and APIs (GraphQL, JWT).

3.Learn Deployment and DevOps Basics (2–3 months)
-Understand server deployment (Heroku, AWS, or DigitalOcean).
-Learn version control (Git), CI/CD pipelines, and basic containerization (Docker).

4.Work on Larger Full-Stack Projects (3–6 months)
Examples:
-E-commerce platform.
-Real-time chat application.
-Job portal or booking system.`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Build production-grade applications and take on leadership roles.
-Learn advanced concepts like system design, scalability, and microservices.

Steps:

1.Master System Design (6–12 months)
-Learn principles of scalability, caching, and load balancing.
-Understand microservices, serverless architecture, and design patterns.

2.Master Frontend and Backend Collaboration (3–6 months)
-Learn advanced API integrations (GraphQL, WebSockets).
-Optimize frontend performance (lazy loading, caching strategies).

3.Focus on DevOps and Cloud (3–6 months)
-Master Docker, Kubernetes, and orchestration.
-Learn advanced cloud services like AWS Lambda, Azure Functions, and Google Cloud.

4.Lead Teams and Mentor (6–12 months)
-Take ownership of full-stack projects.
-Mentor junior developers and contribute to open-source projects or technical blogs.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Languages for Full-Stack Developers

Frontend Technologies:
-Languages: HTML, CSS, JavaScript, TypeScript
-Frameworks: React.js, Vue.js, Angular
-CSS Frameworks: Bootstrap, Tailwind CSS
-Testing: Jest, Cypress

Backend Technologies:
-Languages: Node.js, Python, PHP, Java, Ruby, Go
-Frameworks: Express.js (Node.js), Django (Python), Laravel (PHP), Spring Boot (Java)

Databases:
-Relational: MySQL, PostgreSQL
-NoSQL: MongoDB, DynamoDB, Firebase

APIs and Tools:
-RESTful APIs, GraphQL, Postman, Swagger/OpenAPI

Cloud and DevOps Tools:
-Docker, Kubernetes, Jenkins, GitHub Actions
-Cloud Platforms: AWS, Azure, Google Cloud

Version Control and Collaboration:
-Git, GitHub, GitLab, Bitbucket
-Agile tools: Jira, Trello
-

Additional Skills:
-Authentication: OAuth, JWT, Passport.js
-Performance Optimization: Redis, CDN integration
-Mobile Integration: React Native, Flutter`,
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
    backgroundImage: "url('https://img.freepik.com/free-vector/flat-hand-drawn-web-developers-illustration_52683-55034.jpg?t=st=1734895471~exp=1734899071~hmac=57c2aaa13ef03c28e442265775912354719878e8fc32f5ff106edf45b74be08a&w=1800')",backgroundSize: "cover",
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
