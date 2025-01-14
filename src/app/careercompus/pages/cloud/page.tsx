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
   A Cloud Engineer specializes in designing, deploying, and managing cloud-based systems. They ensure the scalability, reliability, and security of cloud infrastructure, enabling businesses to operate efficiently.

For engineering students, becoming a Cloud Engineer involves learning cloud platforms (AWS, Azure, GCP), networking basics, and automation tools. The role is ideal for students with a passion for technology, problem-solving, and scalable systems.
    
`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner Level (0–6 months)
Goals:
-Build a strong foundation in cloud computing concepts and networking.
-Learn the basics of at least one cloud platform and scripting.

Steps:

1.Understand Cloud Computing Basics (1–2 months)
-Learn what cloud computing is: public, private, and hybrid clouds.
-Understand key concepts: IaaS, PaaS, SaaS, and virtualization.
-Free resources: AWS Educate, Microsoft Learn, or Google Cloud Training.

2.Learn Basic Networking (1–2 months)
-Understand networking concepts: IP addresses, DNS, VPN, firewalls.
-Learn how cloud networks work (VPC in AWS, VNET in Azure).
-Hands-on: Set up a simple private network in a cloud platform.

3.Get Started with a Cloud Platform (2–3 months)
-Pick a platform: AWS, Microsoft Azure, or Google Cloud Platform (GCP).
-Learn basics like launching virtual machines (EC2 in AWS), storage (S3), and databases (RDS).
-Use free tiers to practice:
-AWS Free Tier.
-Azure for Students.
-Google Cloud Free Tier.

4.Learn Scripting (1–2 months)
-Start with Python or Bash for automating cloud tasks.
-Practice basic scripts to create, monitor, or delete resources.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)
Goals:
-Gain expertise in cloud services and infrastructure management.
-Learn automation, monitoring, and security basics.

Steps:

1.Explore Advanced Cloud Services (3–4 months)
-Compute: Auto Scaling, Load Balancers.
-Storage: Glacier (AWS), Blob Storage (Azure).
-Databases: DynamoDB, BigQuery.
-Networking: Content Delivery Networks (CDN), Route 53.

2.Learn Infrastructure as Code (IaC) (2–3 months)
-Tools: Terraform, AWS CloudFormation.
-Automate creating resources like VPCs, EC2, or storage buckets.

3.Master Monitoring and Logging (2–3 months)
-Tools: AWS CloudWatch, Azure Monitor, Google Cloud Operations Suite.
-Set up alerts, dashboards, and logs to monitor system performance.

4.Learn Cloud Security Basics (3–4 months)
-Understand Identity and Access Management (IAM).
-Learn encryption, security groups, and best practices for securing resources.

5.Work on Medium-Scale Projects (3–6 months)
-Examples:
-Deploy a web application using EC2 and S3.
-Set up a CI/CD pipeline with Jenkins and AWS CodePipeline.
-Design a secure, highly available cloud architecture.
`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Build expertise in multi-cloud and hybrid cloud architectures.
-Learn cloud cost optimization and advanced scaling techniques.

Steps:

1.Master Advanced Cloud Concepts (6–12 months)
-Serverless computing: AWS Lambda, Azure Functions, GCP Cloud Functions.
-Containerization and orchestration: Docker, Kubernetes (EKS, AKS, GKE).
-Learn disaster recovery and fault-tolerant architecture.

2.Specialize in Multi-Cloud or Hybrid Cloud (6–12 months)
-Tools: Terraform, Ansible, and Kubernetes for multi-cloud setups.
-Understand inter-cloud networking and security.

3.Learn Cloud Cost Management (2–3 months)
-Tools: AWS Cost Explorer, Azure Cost Management, GCP Billing Reports.
-Optimize resource usage and automate cost alerts.

4.Work on Real-World, Scalable Projects (6–12 months)
-Examples:
-Build a serverless application using AWS Lambda and DynamoDB.
-Create a hybrid cloud architecture using on-premise and cloud services.
-Migrate an existing application to the cloud.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Skills for Cloud Engineers

Cloud Platforms:
AWS: EC2, S3, RDS, Lambda, CloudFormation, CloudWatch.
Azure: Virtual Machines, Blob Storage, Azure Functions, Azure DevOps.
GCP: Compute Engine, Cloud Storage, BigQuery, Cloud Functions.

Programming and Scripting:
Python: Boto3 for AWS automation.
Bash or PowerShell: Automating routine tasks.

Infrastructure as Code (IaC):
Terraform, AWS CloudFormation, Azure Resource Manager (ARM).

Containerization and Orchestration:
Docker, Kubernetes (EKS, AKS, GKE).

Monitoring and Logging:
AWS CloudWatch, Prometheus, Grafana, ELK Stack.

Version Control and CI/CD:
Git, Jenkins, GitLab CI/CD, Azure DevOps.

Networking and Security:
VPCs, IAM, encryption, security groups, firewalls.
Tools like AWS Shield and Azure Defender.

Soft Skills:
Communication: Explain technical cloud architectures to peers and stakeholders.
Team Collaboration: Work effectively with developers and operations teams.
Problem-Solving: Debug and optimize cloud infrastructures.`,
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
    backgroundImage: "url('https://img.freepik.com/premium-vector/cloud-interface-that-shows-data-uploading-internet_49459-544.jpg?uid=R180249399&ga=GA1.1.1301806546.1734892304&semt=ais_hybrid')",backgroundSize: "cover", backgroundPosition: "center",
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
