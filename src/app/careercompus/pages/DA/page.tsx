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
    A Data Analyst is responsible for collecting, organizing, and interpreting data to provide actionable insights for decision-making. They use statistical tools, programming, and visualization techniques to identify patterns, trends, and opportunities in data.

Key responsibilities include data cleaning, creating reports, developing dashboards, and collaborating with business teams to solve problems using data-driven approaches.`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner Level (0–6 months)

Goals:
-Build a foundation in data analysis, statistics, and tools.
-Learn basic programming and visualization skills.

Steps:
1.Learn Data Basics (1–2 months)
-Understand data types, formats (CSV, JSON, SQL), and data workflows.
-Learn Excel basics: formulas, pivot tables, charts, and conditional formatting.

2.Learn Programming for Data Analysis (2–3 months)
-Start with Python or R:
-Python: Learn libraries like Pandas, NumPy, and Matplotlib.
-R: Explore tidyverse and ggplot2.
-Learn SQL for data querying: SELECT, JOIN, GROUP BY, and WHERE clauses.

3.Explore Data Visualization Tools (1–2 months)
-Learn basic tools like Tableau, Power BI, or Python’s Seaborn.
-Build simple dashboards and charts to present insights.

4.Work on Small Projects (1 month)
-Examples:
-Analyzing sales data.
-Visualizing survey results.
-Building a small dashboard for stock price trends.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)

Goals:
-Develop advanced data wrangling, visualization, and analytical skills.
-Gain experience with real-world datasets and business scenarios.

Steps:

1.Deepen Programming Skills (3–4 months)
-Python: Learn Scikit-learn for predictive modeling and Plotly for interactive visualizations.
-SQL: Practice complex queries, window functions, and optimization techniques.

2.Learn Statistical Analysis (3–4 months)
-Understand concepts like hypothesis testing, regression, and probability distributions.
-Use Python or R for statistical calculations.

3.Master Visualization and Reporting Tools (2–3 months)
-Create interactive dashboards in Tableau or Power BI.
-Learn advanced Excel techniques like macros and VBA scripting.

4.Work on Real-World Projects (3–6 months)
-Examples:
-Customer segmentation using clustering.
-Analyzing website traffic data to improve user engagement.
-Building dashboards for KPIs in marketing, sales, or operations.
`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Handle complex datasets and large-scale analytics.
-Explore advanced topics like machine learning, big data, and business intelligence (BI).

Steps:

1.Learn Advanced Analytics and Big Data Tools (6–12 months)
-Explore machine learning basics: regression, classification, and clustering.
-Learn big data tools: Spark, Hadoop, or cloud-based data warehouses like Snowflake and BigQuery.

2.Master Data Wrangling and Automation (3–6 months)
-Automate data workflows with Python (e.g., Airflow or Pandas pipelines).
-Learn ETL tools like Alteryx or Talend.

3.Specialize in a Domain (3–6 months)
-Domains: Marketing analytics, financial analysis, healthcare, etc.
-Learn specific tools or frameworks used in your chosen industry.

4.Lead Projects and Mentor Others (6–12 months)
-Take ownership of end-to-end analytics projects.
-Present insights to stakeholders and mentor junior analysts.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: ` Technologies, Tools, and Skills for Data Analysts

Programming and Query Languages:
Python: Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn.
R: Tidyverse, dplyr, ggplot2.
SQL: MySQL, PostgreSQL, Microsoft SQL Server, Snowflake, BigQuery.

Visualization Tools:
Tableau, Power BI, Looker, QlikView.
Python: Matplotlib, Seaborn, Plotly, Dash.

Statistical and Analytical Tools:
Excel, SPSS, SAS, or R for statistical analysis.
Machine learning basics with Scikit-learn (Python).

Big Data Tools:
Hadoop, Spark, Hive.
Cloud Platforms: AWS (Redshift), Google Cloud (BigQuery), Azure (Synapse).

Data Management Tools:
ETL: Alteryx, Talend, Apache Airflow.
Data Warehousing: Snowflake, Amazon Redshift, Google BigQuery.

Soft Skills:
Communication: Present findings to non-technical audiences.
Critical Thinking: Analyze data and ask the right questions.
Collaboration: Work effectively with teams and stakeholders.`,
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
    backgroundImage: "url('https://img.freepik.com/free-vector/data-report-concept-illustration_114360-1131.jpg?uid=R180249399&ga=GA1.1.1301806546.1734892304&semt=ais_hybrid')",backgroundSize: "cover",
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
