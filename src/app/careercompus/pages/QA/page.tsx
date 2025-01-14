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
   A Quality Assurance (QA) Tester ensures that software applications meet quality standards and function as intended. QA testers identify bugs, verify fixes, and improve overall product reliability by conducting manual and automated testing.

For engineering students, becoming a QA tester involves mastering software testing principles, learning tools for test automation, and understanding the software development lifecycle (SDLC). Hands-on practice with real-world applications and testing scenarios is crucial.


    
`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
     Beginner Level (0–6 months)

Goals:
-Understand the basics of software testing and QA methodologies.
-Learn manual testing techniques.

Steps:
1.Learn Fundamentals of QA and Testing (1–2 months)
-Study types of testing: functional, non-functional, unit, integration, system, and acceptance testing.
-Understand the software testing lifecycle (STLC) and its relation to SDLC.
-Resources: Online courses on software testing (e.g., Udemy, Coursera).

2.Practice Manual Testing (2–3 months)
-Learn test case creation and execution.
-Understand defect lifecycle management (logging, tracking, and verifying bugs).
-Use tools like Jira or Bugzilla for bug tracking.

3.Familiarize Yourself with Testing Documentation (1–2 months)
-Learn to write test plans, test cases, and bug reports.
-Practice on sample projects or mock applications.

4.Work on a Small Project (1–2 months)
-Example: Test a small e-commerce application manually.
-Document test cases, execute them, and log issues.`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)

Goals:
-Develop skills in test automation and scripting.
-Gain knowledge of testing frameworks and tools.

Steps:

1.Learn a Programming Language (2–3 months)
-Focus on Python, Java, or JavaScript for test automation.
-Learn basic programming concepts: loops, conditions, file handling, and functions.

2.Master Automation Testing Tools (3–6 months)
-Learn Selenium for web application testing:
-Set up Selenium WebDriver and write simple test scripts.
-Explore other tools like Cypress (JavaScript-based) or Appium (mobile testing).

3.Understand API Testing (2–3 months)
-Learn tools like Postman or SoapUI for testing APIs.
-Write automated API tests using libraries like RestAssured (Java) or requests (Python).

4.Familiarize Yourself with CI/CD and Test Integration (3–4 months)
-Learn how automated tests integrate with CI/CD pipelines.
-Use tools like Jenkins, GitLab CI/CD, or Azure DevOps to set up pipelines.

5.Work on Medium-Scale Projects (3–6 months)
-Examples:
-Automate testing for a content management system (CMS).
-Perform API testing for a weather forecasting app.`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Specialize in performance, security, or mobile testing.
-Master advanced test automation and frameworks.

Steps:

1.Learn Performance Testing (3–6 months)
-Tools: JMeter, Gatling, or Locust.
-Perform load, stress, and endurance testing for applications.

2.Master Mobile Testing (3–6 months)
-Tools: Appium, TestComplete, or Robot Framework.
-Test applications across iOS and Android platforms.

3.Understand Security Testing Basics (3–4 months)
-Learn about vulnerabilities like SQL injection, XSS, and CSRF.
-Use tools like Burp Suite, OWASP ZAP, or Nessus for basic security testing.

4.Contribute to Open-Source QA Projects (3–6 months)
-Collaborate on GitHub to contribute to open-source testing frameworks.
-Join QA communities for collaborative learning.

5.Work on Advanced Real-World Projects (6–12 months)
-Examples:
-Automate performance testing for a high-traffic e-commerce website.
-Perform end-to-end testing for a mobile banking application.
-Conduct security testing for a healthcare management system.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Skills for QA Testers

Programming and Scripting:
Languages: Python, Java, JavaScript.
Scripting for test automation and API testing.

Testing Tools and Frameworks:
Manual Testing: Jira, Bugzilla, TestLink.
Automation Testing: Selenium, Cypress, TestNG, Appium.
API Testing: Postman, SoapUI, RestAssured.
Performance Testing: JMeter, Gatling, Locust.
Security Testing: OWASP ZAP, Burp Suite, Nessus.

CI/CD Tools:
Jenkins, GitLab CI/CD, Azure DevOps.

Mobile Testing Tools:
Appium, TestComplete, Espresso (Android), XCTest (iOS).

Certifications:
Beginner: ISTQB Foundation Level, Certified Software Tester (CSTE).
Intermediate: Selenium Certification, API Testing Certification.
Advanced: ISTQB Advanced Level, Certified Mobile Tester.

Soft Skills:
Attention to Detail: Identify subtle bugs and inconsistencies.
Analytical Thinking: Understand complex systems and test scenarios.
Communication: Document and report issues effectively.`,
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
    backgroundImage: "url('https://img.freepik.com/premium-vector/question-answer-bubble-chat-white-background-illustration_100456-2030.jpg?w=1060')",backgroundSize: "cover",
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
