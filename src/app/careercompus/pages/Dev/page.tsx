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
   A DevOps Engineer bridges the gap between development and operations teams, automating and streamlining software delivery and infrastructure management. Their role focuses on ensuring continuous integration, continuous delivery (CI/CD), infrastructure as code (IaC), and efficient collaboration across teams to deliver reliable and scalable systems.

Key responsibilities include automating deployment pipelines, managing cloud infrastructure, monitoring systems, and ensuring high availability of services.
    
`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner Level (0–6 months)

Goals:
-Build foundational knowledge in system administration, programming, and version control.
-Learn the basics of CI/CD and containerization.

Steps:

1.Learn System Administration (1–2 months)
-Understand operating systems: Linux (Ubuntu, CentOS) and Windows basics.
-Learn shell scripting (Bash, PowerShell).
-Practice setting up and managing servers.

2.Learn Programming Basics (1–2 months)
-Pick a scripting language: Python or Ruby.
-Learn loops, conditionals, functions, and file handling.

3.Master Version Control (1 month)
-Use Git: branching, merging, and resolving conflicts.
-Collaborate with repositories on GitHub, GitLab, or Bitbucket.

4.Introduction to CI/CD (1–2 months)
-Understand the CI/CD concept and benefits.
-Explore tools like Jenkins, GitHub Actions, or GitLab CI/CD.

5.Learn Basic Containerization (1–2 months)
-Understand containers and why they’re used.
-Learn Docker: creating images, managing containers, and networking.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)
Goals:

-Automate deployments and scale systems effectively.
-Work with cloud platforms and infrastructure-as-code tools.

Steps:

1.Master CI/CD Tools (3–4 months)
-Set up pipelines with tools like Jenkins, GitHub Actions, or CircleCI.
-Automate testing, deployment, and monitoring.

2.Learn Infrastructure as Code (IaC) (3–4 months)
-Understand IaC principles.
-Learn Terraform or AWS CloudFormation for managing infrastructure.
-Explore Ansible or Chef for configuration management.

3.Dive into Cloud Platforms (3–4 months)
-Start with AWS, Azure, or Google Cloud:
-Learn basics: EC2, S3, VPC, and IAM.
-Practice deploying applications in the cloud.
-Learn managed Kubernetes services like EKS (AWS) or GKE (Google Cloud).

4.Advance Container Orchestration (3–6 months)
-Learn Kubernetes: deploying pods, scaling, and managing clusters.
-Practice setting up monitoring tools like Prometheus and Grafana.

5.Work on Medium-Scale Projects (3–6 months)
-Examples:
-Deploy a web application using Docker and Kubernetes.
-Set up a CI/CD pipeline for a microservices project.
-Automate cloud infrastructure using Terraform.
`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)
Goals:
-Build resilient and highly scalable systems.
-Explore advanced DevOps practices like security automation and observability.

Steps:

1.Master Advanced Cloud Features (6–12 months)
-Learn advanced AWS/Azure/GCP services:
-AWS: Lambda, CloudWatch, DynamoDB.
-Azure: Functions, Monitor, and Cosmos DB.
-GCP: Cloud Functions, BigQuery.

2.Learn Advanced Monitoring and Logging (3–6 months)
-Tools: ELK Stack (Elasticsearch, Logstash, Kibana), Prometheus, Datadog.
-Set up alerting and dashboards for system health.

3.Integrate DevSecOps Practices (3–6 months)
-Automate security checks in CI/CD pipelines using tools like Snyk, Aqua, or Trivy.
-Implement compliance policies with Open Policy Agent (OPA).

4.Optimize for Scalability and High Availability (6–12 months)
-Learn load balancing and horizontal/vertical scaling.
-Use tools like HAProxy, Nginx, and AWS Auto Scaling.

5.Lead Large-Scale Projects (6–12 months)
-Examples:
-Build a fault-tolerant architecture with disaster recovery.
-Implement multi-cloud or hybrid cloud solutions.
-Design and optimize CI/CD pipelines for enterprise-scale projects.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Skills for DevOps Engineers

Programming and Scripting:
Languages: Python, Ruby, Shell Scripting, Go.
Configuration Tools: Ansible, Chef, Puppet.

CI/CD Tools:
Jenkins, GitHub Actions, GitLab CI/CD, CircleCI, ArgoCD.

Infrastructure as Code (IaC):
Terraform, AWS CloudFormation, Azure Resource Manager (ARM).
Containerization and Orchestration:
Docker, Kubernetes, Podman, OpenShift.

Cloud Platforms:
AWS: EC2, S3, Lambda, CloudFormation.
Google Cloud: GKE, Compute Engine, BigQuery.
Azure: Virtual Machines, Azure Functions, AKS.

Monitoring and Logging:
Tools: Prometheus, Grafana, ELK Stack, Datadog, Splunk.

Version Control and Collaboration:
Git, GitHub, GitLab, Bitbucket.
Security and Compliance:
Tools: Snyk, Trivy, Aqua Security.
Concepts: Identity and Access Management (IAM), Secure Shell (SSH), TLS/SSL.

Soft Skills:
Communication: Collaborate with developers and operations teams.
Problem-Solving: Debug and optimize complex systems.
Teamwork: Facilitate cross-team collaboration.`,
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
    backgroundImage: "url('https://img.freepik.com/free-vector/isometric-devops-illustration_52683-84175.jpg?t=st=1734898566~exp=1734902166~hmac=63f282e7017790e7573fa892456db4c8cf307d20cfe93f5d9d1b2d77d57c45f6&w=1800')",backgroundSize: "cover",
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
