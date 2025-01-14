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
   A Big Data Engineer designs, develops, and manages systems that process large volumes of data efficiently. They are responsible for building robust data pipelines, optimizing storage solutions, and enabling analytics to derive insights from big data.

For engineering students, the journey involves mastering distributed computing frameworks, programming languages, data storage technologies, and data processing tools. Hands-on experience with real-world datasets and projects is crucial for success.




    
`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
     Beginner Level (0–6 months)

Goals:
-Understand fundamental data concepts and programming basics.
-Gain a foundational understanding of big data technologies.

Steps:

1.Learn Data Fundamentals (1–2 months)
-Understand concepts: data types, structures, and data lifecycle.
-Study relational databases and SQL for basic data querying.
-Resources: SQL courses on Khan Academy, W3Schools, or Codecademy.

2.Learn a Programming Language (2–3 months)
-Master programming basics using Python or Java:
-Data structures: lists, dictionaries, arrays.
-File handling, APIs, and libraries for data processing.
-Platforms: Codecademy, LeetCode (basic Python/Java problems).

3.Understand Big Data Basics (1–2 months)
-Learn what big data is: characteristics (volume, velocity, variety, veracity, value).
-Study the architecture of big data systems (batch vs. stream processing).
-Read articles or beginner guides on Apache Hadoop and Spark.

4.Build a Simple Data Pipeline Project (1–2 months)
-Example: Create a pipeline to fetch, clean, and store weather data using Python.
-Use tools like Pandas for data manipulation.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)

Goals:
-Gain expertise in big data frameworks, storage solutions, and data pipeline development.
-Learn about distributed computing and real-time processing.

Steps:

1.Master Distributed Computing Frameworks (3–6 months)
-Learn Apache Hadoop:
-HDFS (Hadoop Distributed File System), MapReduce.
-Master Apache Spark for faster, in-memory data processing.
-Spark Core, SQL, Streaming, and MLlib.
-Practice with datasets: Kaggle or public repositories.

2.Understand Data Storage and Management (2–3 months)
-Learn about NoSQL databases:
-Document-based: MongoDB.
-Column-based: Apache Cassandra, HBase.
-Explore data warehouses: Snowflake, Amazon Redshift, Google BigQuery.
-Study file formats: Parquet, Avro, ORC.

3.Learn Workflow Orchestration Tools (1–2 months)
-Tools: Apache Airflow, Luigi, or Prefect for scheduling and managing workflows.
-Build simple workflows to automate data extraction and transformation.

4.Understand Real-Time Data Processing (2–3 months)
-Learn Apache Kafka or RabbitMQ for messaging and streaming.
-Explore real-time frameworks like Flink or Storm.
-Example: Build a real-time dashboard using Kafka and Spark Streaming.

5.Work on Medium-Scale Projects (3–6 months)
-Examples:
-Build an ETL pipeline to process e-commerce data.
-Create a real-time recommendation system for streaming services.`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Specialize in advanced big data solutions, cloud integration, and scalability.
-Gain proficiency in data governance and security.

Steps:

1.Master Big Data Optimization Techniques (3–6 months)
-Explore query optimization in Hive and Spark SQL.
-Learn partitioning, bucketing, and indexing in distributed systems.
-Practice on large datasets to fine-tune performance.

2.Integrate Big Data with Cloud Platforms (6–12 months)
-Learn cloud services:
-AWS: EMR, S3, Athena.
-Azure: Data Lake, HDInsight.
-Google Cloud: BigQuery, Dataproc.
-Study data migration and hybrid cloud architecture.

3.Focus on Data Governance and Security (3–6 months)
-Learn about data privacy regulations (GDPR, CCPA).
-Implement role-based access, encryption, and auditing.
-Tools: Apache Ranger, Atlas.

4.Contribute to Open-Source Big Data Projects (3–6 months)
-Participate in Apache projects like Hadoop or Spark.
-Collaborate on GitHub to enhance distributed data systems.

5.Work on Advanced Real-World Projects (6–12 months)
-Examples:
-Design a scalable architecture for a real-time fraud detection system.
-Build a data lakehouse for an enterprise-level data analytics solution.
-Implement a streaming pipeline for IoT sensor data.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Skills for Big Data Engineers

Programming and Frameworks:
Programming: Python, Java, Scala.
Distributed Frameworks: Apache Hadoop, Apache Spark.

Data Storage and Management:
NoSQL Databases: MongoDB, Cassandra, HBase.
Data Warehousing: Snowflake, Redshift, BigQuery.
File Formats: Parquet, Avro, ORC.

Workflow and Orchestration:
Tools: Apache Airflow, Luigi, Prefect.
Real-Time Data Processing:
Streaming: Apache Kafka, Flink, Storm.

Cloud Platforms:
AWS: EMR, S3, Redshift.
Azure: Data Lake, HDInsight.
Google Cloud: BigQuery, Dataproc.
Security and Governance:
Tools: Apache Ranger, Atlas, Kerberos.

Certifications:
Beginner: Google Cloud Certified Data Engineer, AWS Certified Big Data - Specialty.
Intermediate: Cloudera Certified Associate (CCA) Spark and Hadoop Developer.
Advanced: Databricks Certified Data Engineer Professional.

Soft Skills:
Problem-Solving: Develop efficient pipelines for diverse data sources.
Analytical Thinking: Optimize systems to handle large-scale data.
Collaboration: Work with data scientists, analysts, and engineers.`,
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
    backgroundImage: "url('https://img.freepik.com/premium-vector/big-data-coworking_18591-46011.jpg?w=1380')",backgroundSize: "cover", backgroundPosition: "center",
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
