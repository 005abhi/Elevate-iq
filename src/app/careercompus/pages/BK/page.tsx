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
     A Backend Developer focuses on building and maintaining the server-side logic, databases, and APIs that power a web or mobile application. They ensure data flows smoothly between the server and user interface, handle application logic, and optimize performance.

Key skills include programming, database management, API integration, problem-solving, and knowledge of backend frameworks. Backend developers collaborate with frontend developers, DevOps engineers, and other stakeholders to deliver scalable and robust applications.
    `,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner Level (0–6 months)

Goals:
-Learn programming fundamentals and understand backend basics.
-Get hands-on experience with a basic project.

Steps:
1.Learn a Programming Language (1–2 months)

-Start with Python, JavaScript (Node.js), or Java.
-Study syntax, data types, loops, functions, and object-oriented programming (OOP).

2.Understand Backend Basics (1 month)
-Learn about client-server architecture, REST APIs, and HTTP methods.
-Study how databases work (SQL vs NoSQL).

3.Learn Tools and Technologies (2–3 months)
-Databases: PostgreSQL, MySQL, or MongoDB.
-Version Control: Git and GitHub.
-Basic Deployment: Familiarize yourself with platforms like Heroku or AWS.

4.Build a Small Project (1 month)
-Examples: A to-do list app or a simple API for user registration and authentication.
    `,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)

Goals:
-Work on real-world projects and build scalable backend solutions.
-Understand advanced concepts like authentication, security, and optimization.

Steps:
1.Learn Advanced Backend Frameworks (3–4 months)
-Node.js with Express.js, Django (Python), or Spring Boot (Java).
-Study middleware, routing, and error handling.

2.Master Databases (2–3 months)
-Advanced queries, indexing, and optimization.
-Learn about ORMs (Object-Relational Mappers) like Sequelize, TypeORM, or Hibernate.

3.Understand Authentication and Security (2–3 months)
-Learn OAuth, JWT, session management, and secure password storage.
-Implement basic security practices like data validation and HTTPS.

4.Work on Real-World Projects (3–6 months)
-Examples: An e-commerce API, a blog platform, or a chat application.
-Deploy projects to cloud platforms (AWS, Azure, or Google Cloud).`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)
Goals:

-Design scalable, robust, and high-performance systems.
-Explore specialized areas like microservices, DevOps, or cloud architecture.

Steps:

1.Deep Dive into Architecture (6–12 months)
-Learn about microservices, monolith vs distributed systems, and design patterns.
-Study load balancing, caching (Redis, Memcached), and message queues (RabbitMQ, Kafka).
-Master Cloud Services (6 months)

2.Learn containerization (Docker) and orchestration (Kubernetes).
-Get hands-on with cloud platforms (AWS Lambda, Azure Functions, or Google Cloud).
-Focus on Optimization (3–6 months)

3.Database optimization, profiling tools, and performance benchmarking.
-Understand horizontal vs vertical scaling.

4.Lead Projects and Mentor (6–12 months)
-Take ownership of backend architecture for larger projects.
-Mentor junior developers and contribute to open-source projects.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Languages for Backend Developers

Programming Languages:
Beginner: Python, JavaScript (Node.js), Java, PHP
Intermediate: C#, Ruby, Go, Kotlin
Advanced: Rust, Scala, Elixir

Frameworks and Libraries:
Beginner: Express.js (Node.js), Flask (Python), Spring Boot (Java)
Intermediate: Django (Python), ASP.NET (C#), Laravel (PHP)
Advanced: NestJS, Micronaut, Phoenix

Databases:
Relational Databases: MySQL, PostgreSQL, SQL Server
NoSQL Databases: MongoDB, DynamoDB, Cassandra

Tools for APIs:
Postman, Swagger/OpenAPI, GraphQL

Cloud and DevOps Tools:
AWS, Azure, Google Cloud, Docker, Kubernetes, Jenkins

Security Tools:
OWASP ZAP, Snyk, HashiCorp Vault

Collaboration and Version Control:
Git, GitHub, GitLab, Bitbucket`,
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
    backgroundImage: "url('https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?uid=R180249399&ga=GA1.1.1301806546.1734892304&semt=ais_hybrid')",backgroundSize: "cover",
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
