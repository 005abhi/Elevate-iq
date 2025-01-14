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
   An Automation Tester specializes in writing scripts and using tools to automate the testing of software applications. Automation testers ensure efficiency, accuracy, and scalability in testing processes by automating repetitive tasks and complex test scenarios.

For engineering students, the journey involves learning programming, test automation frameworks, and understanding the software development lifecycle (SDLC). Hands-on projects and exposure to real-world automation tools are essential.
    
`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
     Beginner Level (0–6 months)

Goals:
-Understand the fundamentals of testing and programming.
-Learn manual testing and basic automation concepts.

Steps:

1.Learn Software Testing Basics (1–2 months)
-Study testing types: functional, non-functional, unit, integration, system, regression testing.
-Understand the Software Testing Life Cycle (STLC).
-Learn test case creation and defect lifecycle management.
-Resources: Software Testing courses on platforms like Udemy, Coursera, or QA blogs.

2.Learn a Programming Language (2–3 months)
-Start with Python, Java, or JavaScript (popular in automation).
-Focus on programming basics: loops, conditions, file handling, and object-oriented programming (OOP).
-Practice coding on platforms like HackerRank, LeetCode, or Codecademy.

3.Introduction to Automation Testing (1–2 months)
-Understand the role of automation in testing.
-Learn the basics of Selenium WebDriver or Cypress for web testing.
-Explore recording tools like Katalon Studio for getting started.

4.Practice on Simple Projects (1–2 months)
-Example: Automate login/logout functionality of a web application.
-Write basic scripts to navigate, interact, and validate web elements.`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)

Goals:
-Develop expertise in automation frameworks and testing tools.
-Learn to automate web, mobile, and API testing.

Steps:

1.Master Test Automation Tools (3–6 months)
-Web Testing: Selenium, Cypress, or Playwright.
-Mobile Testing: Appium for Android/iOS apps.
-API Testing: Postman, RestAssured, or SoapUI.

2.Learn Test Automation Frameworks (3–6 months)
-Understand testing frameworks: TestNG (Java), PyTest (Python), or Mocha (JavaScript).
-Learn how to create modular, reusable, and maintainable test cases.
-Set up data-driven, keyword-driven, or hybrid frameworks.

3.Gain Hands-On CI/CD Integration (2–3 months)
-Integrate automated tests into CI/CD pipelines using tools like Jenkins, GitLab CI/CD, or Azure DevOps.
-Automate test execution for build validation.

4.Understand Reporting and Logging (1–2 months)
-Use reporting tools like Allure or ExtentReports to generate detailed test execution reports.
-Implement logging for debugging and issue tracking.

5.Work on Medium-Scale Projects (3–6 months)
-Examples:
-Automate regression testing for a social media platform.
-Create a data-driven framework to test various user scenarios for an e-commerce website.`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Master performance, security, and advanced automation testing.
-Specialize in advanced frameworks and large-scale systems.

Steps:

1.Learn Advanced Automation Techniques (3–6 months)
-Explore Parallel Execution: Run multiple tests concurrently.
-Learn cloud-based automation platforms like BrowserStack or Sauce Labs.
-Study containerization tools like Docker for isolated test environments.

2.Explore Performance Testing Tools (3–6 months)
-Learn tools like JMeter, Gatling, or Locust for load, stress, and scalability testing.
-Automate performance benchmarks for high-traffic applications.

3.Master Mobile and API Testing (3–6 months)
-Automate mobile app testing with Appium and Espresso (Android).
-Create end-to-end API test suites with Postman or RestAssured.

4.Focus on Security Testing Basics (3–4 months)
-Study common vulnerabilities (OWASP Top 10).
-Use tools like OWASP ZAP or Burp Suite for automated security testing.

5.Work on Advanced Real-World Projects (6–12 months)
-Examples:
-Automate end-to-end testing for a banking application.
-Build a CI/CD pipeline with automated tests for a SaaS product.
-Implement performance and security testing for a healthcare management platform.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Skills for Automation Testers

Programming and Scripting:
Languages: Python, Java, JavaScript.
Scripting for automating tests and writing reusable test cases.

Automation Tools and Frameworks:
Web Testing: Selenium, Cypress, Playwright.
Mobile Testing: Appium, Espresso, XCTest.
API Testing: Postman, RestAssured, SoapUI.
Reporting: Allure, ExtentReports.

Performance and Security Testing:
Performance Tools: JMeter, Gatling, Locust.
Security Tools: OWASP ZAP, Burp Suite.

CI/CD and DevOps Tools:
Tools: Jenkins, GitLab CI/CD, Azure DevOps.

Cloud Platforms for Testing:
BrowserStack, Sauce Labs, AWS Device Farm.

Certifications:
Beginner: ISTQB Foundation Level, Certified Tester (CSTE).
Intermediate: Selenium Certification, API Testing Certification.
Advanced: ISTQB Advanced Level, Certified Automation Engineer.

Soft Skills:
Analytical Thinking: Create effective and efficient test automation.
Problem-Solving: Debug and resolve issues in test scripts and tools.
Communication: Clearly document test cases, issues, and reports.`,
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
    backgroundImage: "url('https://img.freepik.com/premium-vector/robotics-school-subject-online-service-platform_277904-10353.jpg?w=1380')",backgroundSize: "cover",
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
