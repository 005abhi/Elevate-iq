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
    A Data Scientist uses data analysis, statistical modeling, and machine learning techniques to extract meaningful insights, solve complex problems, and make data-driven decisions. They work with large datasets, build predictive models, and communicate findings to stakeholders.

Data scientists bridge the gap between advanced data analysis and business strategy. They are skilled in programming, statistics, machine learning, and data visualization while collaborating with analysts, engineers, and business teams.

`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner Level (0–6 months)
Goals:
-Build foundational skills in programming, statistics, and data analysis.
-Understand the basics of data science workflows and tools.

Steps:
1.Learn Data Science Basics (1–2 months)
-Understand the data science lifecycle: data collection, cleaning, exploration, modeling, and communication.
-Familiarize yourself with key concepts like structured vs. unstructured data, data pipelines, and the importance of reproducibility.

2.Learn Programming (2–3 months)
-Start with Python or R:
-Python: Learn libraries like Pandas, NumPy, and Matplotlib.
-R: Explore tidyverse, dplyr, and ggplot2.

3.Learn Statistics and Mathematics Basics (1–2 months)
-Probability, mean/median/mode, variance, standard deviation.
-Linear algebra and basic calculus for machine learning.

4.Work on Small Projects (1 month)
-Examples:
-Exploratory data analysis (EDA) on public datasets (e.g., Kaggle or UCI).
-Analyzing stock market trends or social media sentiment.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)
Goals:
-Develop machine learning, advanced analytics, and big data skills.
-Work on real-world projects with diverse datasets.

Steps:

1.Master Machine Learning Basics (3–4 months)
-Supervised learning: regression, classification.
-Unsupervised learning: clustering, dimensionality reduction (PCA).
-Use Scikit-learn or R caret to implement models.

2.Learn Data Wrangling and Big Data Tools (3–4 months)
-Advanced SQL: window functions, optimization.
-Use tools like Spark, Hadoop, or Dask for processing large datasets.

3.Develop Advanced Statistical Skills (2–3 months)
-Hypothesis testing, time series analysis, Bayesian statistics.
-A/B testing for experimentation.

4.Work on Medium-Scale Projects (3–6 months)
-Examples:
-Predictive modeling (e.g., predicting house prices).
-Customer segmentation using clustering.
-Fraud detection using classification algorithms.
`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)
Goals:
-Build scalable, deployable data science solutions.
-Explore advanced machine learning, deep learning, and domain-specific specializations.

Steps:

1.Master Advanced Machine Learning (6–12 months)
-Learn ensemble methods: Random Forest, Gradient Boosting (XGBoost, LightGBM).
-Explore deep learning frameworks: TensorFlow, PyTorch.
-Natural Language Processing (NLP): sentiment analysis, transformers (Hugging Face)

2.Work on Scalable Systems and Deployment (6–12 months)
-Learn MLOps: Docker, Kubernetes, CI/CD for models.
-Use cloud platforms like AWS, GCP, or Azure for deployment.

3.Specialize in a Domain (3–6 months)
-Domains: Healthcare, finance, marketing, or supply chain.
-Learn tools and datasets specific to your chosen domain.

4.Work on Complex Real-World Projects (6–12 months)
-Examples:
-Build and deploy a recommendation system.
-Create a fraud detection pipeline with real-time alerts.
-Use computer vision for image recognition tasks.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Skills for Data Scientists

Programming Languages:
Python: Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, PyTorch.
R: Tidyverse, caret, ggplot2, Shiny.
SQL: PostgreSQL, MySQL, Snowflake.
Scala/Java: For working with Apache Spark.
Machine Learning and Deep Learning Frameworks:
Scikit-learn, XGBoost, LightGBM.
Deep Learning: TensorFlow, PyTorch, Keras, Hugging Face.

Big Data Tools:
Apache Spark, Hadoop, Dask.
Data Lakes and Warehousing: AWS S3, Azure Synapse, Snowflake.
Visualization Tools:
Tableau, Power BI, Looker.
Python: Matplotlib, Seaborn, Plotly.
Data Processing and Workflow Automation:
Apache Airflow, Luigi, Prefect.
ETL Tools: Alteryx, Talend.

Cloud and Deployment Tools:
AWS (SageMaker, Redshift), Google Cloud (BigQuery, Vertex AI), Microsoft Azure (Machine Learning Studio).
MLOps: Docker, Kubernetes, MLflow.

Soft Skills:
Communication: Explain technical findings to non-technical stakeholders.
Business Acumen: Understand business problems and frame data solutions.
Collaboration: Work effectively in interdisciplinary teams.`,
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
    backgroundImage: "url('https://img.freepik.com/free-vector/visual-data-concept-illustration_114360-1713.jpg?t=st=1734897874~exp=1734901474~hmac=7052186427dba724ce981ef73b42ec37192fc9bb1c6519d32a052a832524afea&w=1060')",backgroundSize: "cover",
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
