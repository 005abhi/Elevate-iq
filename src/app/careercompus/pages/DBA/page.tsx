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
   A Database Administrator (DBA) is responsible for the installation, configuration, maintenance, and security of database systems. They ensure data is stored, organized, and managed efficiently while optimizing performance and safeguarding against data breaches.

For engineering students, the path to becoming a DBA involves mastering database management systems (DBMS), SQL, data modeling, and backup/recovery strategies. Practical hands-on experience with real-world scenarios is essential.


    
`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
     Beginner Level (0–6 months)

Goals:
-Understand basic database concepts and build foundational skills in SQL.
-Gain familiarity with database management systems (DBMS).

Steps:

1.Learn Database Fundamentals (1–2 months)
-Understand relational databases, tables, and relationships.
-Learn basic concepts: ACID properties, normalization, primary/foreign keys, indexes.
-Resources: Database Fundamentals on YouTube, Khan Academy, or DBMS books.

2.Learn SQL Basics (2–3 months)
-Master basic SQL commands: SELECT, INSERT, UPDATE, DELETE.
-Study filtering, sorting, and joining tables.
-Practice with tools like MySQL, PostgreSQL, or SQLite.
-Platforms: LeetCode (SQL), HackerRank (SQL challenges).

3.Familiarize Yourself with DBMS (1–2 months)
-Install and set up a DBMS like MySQL, PostgreSQL, or SQL Server.
-Explore database creation, user management, and permissions.
-Perform basic backups and restores.

4.Work on a Simple Project (1–2 months)
-Example: Create a database for an e-commerce website.
-Include tables for products, customers, orders, and inventory.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)

Goals:
-Develop skills in database optimization, security, and advanced query writing.
-Learn about non-relational (NoSQL) databases.

Steps:

1.Master Advanced SQL (3–4 months)
-Learn advanced concepts: subqueries, stored procedures, functions, and triggers.
-Understand window functions, indexing, and query optimization.
-Practice optimizing queries for performance.

2.Study Database Design and Modeling (2–3 months)
-Learn ER (Entity-Relationship) modeling and schema design.
-Understand normalization vs. denormalization.
-Use tools like MySQL Workbench or Lucidchart for designing schemas.

3.Understand Database Security (2–3 months)
-Study user authentication, roles, and permissions.
-Learn about encryption, data masking, and auditing logs.
-Explore backup and disaster recovery strategies.

4.Get Familiar with NoSQL Databases (3–4 months)
-Study NoSQL concepts: document, key-value, column, and graph databases.
-Explore NoSQL databases like MongoDB, Cassandra, or Redis.
-Compare NoSQL with traditional relational databases.

5.Work on Medium-Scale Projects (3–6 months)
-Examples:
-Design a library management system database.
-Build and optimize a database for a social media platform.`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Master database performance tuning and high availability techniques.
-Specialize in enterprise-level database management and cloud database solutions.

Steps:

1.Learn Database Performance Tuning (6–12 months)
-Explore advanced indexing, partitioning, and sharding.
-Monitor and optimize database performance using tools like pgAdmin, SQL Profiler, or SolarWinds DPA.
-Study query execution plans and optimize slow-running queries.

2.Master High Availability and Scalability (3–6 months)
-Learn about replication, clustering, and load balancing.
-Explore technologies like MySQL Replication, PostgreSQL Streaming Replication, and SQL Server Always On.
-Study distributed databases for scalability.

3.Explore Cloud Databases (6–12 months)
-Learn to use cloud-based database services like AWS RDS, Azure SQL Database, or Google Cloud Spanner.
-Study database migration to the cloud.

4.Contribute to Open-Source Database Projects (3–6 months)
-Contribute to open-source databases like PostgreSQL or MariaDB.
-Join forums and communities to gain insights and collaborate with other DBAs.

5.Work on Advanced Real-World Projects (6–12 months)
-Examples:
-Design a multi-tenant database for a SaaS application.
-Build a fault-tolerant database with disaster recovery for a critical application.
-Migrate a legacy database to the cloud and optimize for scalability.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Skills for Database Administrators

Programming and Scripting:
SQL: Core query language for relational databases.
Python, PowerShell, or Bash: Automate tasks like backups and monitoring.

Database Management Systems:
Relational: MySQL, PostgreSQL, SQL Server, Oracle Database.
NoSQL: MongoDB, Cassandra, Redis, DynamoDB.

Tools for Database Design and Optimization:
MySQL Workbench, pgAdmin, SSMS (SQL Server Management Studio).
Performance tuning: SolarWinds DPA, SQL Profiler.

Cloud Databases:
AWS RDS, Azure SQL Database, Google Cloud Spanner.

Security Tools:
Audit logs, encryption libraries, database firewalls.

Certifications:
Beginner: Microsoft Certified: Azure Data Fundamentals, Oracle Database SQL Certified Associate.
Intermediate: AWS Certified Database - Specialty, Microsoft Certified: Azure Database Administrator Associate.
Advanced: Oracle Database Administrator Certified Professional (OCP), MongoDB Certified DBA.

Soft Skills:
Problem-Solving: Quickly identify and fix database issues.
Communication: Explain technical concepts to non-technical stakeholders.
Attention to Detail: Maintain data integrity and security.`,
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
    backgroundImage: "url('https://img.freepik.com/free-vector/server-status-concept-illustration_114360-1538.jpg?t=st=1734917220~exp=1734920820~hmac=7052121ca7fecbae07ae78b77d97a3b97c90bde49ef53fe846152408e50b3e1e&w=1060')",backgroundSize: "cover",
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
