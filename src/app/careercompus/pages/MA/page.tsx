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
    A Mobile App Developer specializes in creating applications for mobile devices such as smartphones and tablets. They work on building, testing, and deploying apps for platforms like Android, iOS, or cross-platform solutions.

Mobile app developers focus on user-friendly interfaces, performance optimization, and platform-specific features while ensuring apps meet design and functional requirements. They collaborate closely with UX/UI designers, backend developers, and stakeholders.

Key skills include proficiency in programming languages, mobile frameworks, debugging, and understanding app store guidelines.`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner Level (0–6 months)

Goals:
Learn the fundamentals of mobile app development.
Build a simple application for a specific platform.

Steps:
1.Understand Mobile Development Basics (1–2 months)
-Learn how mobile apps work, including frontend (UI/UX) and backend integration.
-Familiarize yourself with Android and iOS ecosystems.

2.Choose a Development Path (2 months)
-Native Development:
-Android: Learn Java or Kotlin.
-iOS: Learn Swift.
-Cross-Platform Development:
-Learn frameworks like React Native, Flutter, or Xamarin.

3.Learn Core Tools (1 month)
-For Android: Android Studio, Gradle.
-For iOS: Xcode, Swift Playgrounds.
-For Cross-Platform: VS Code, Expo (React Native), DartPad (Flutter).

4.Build a Basic App (1 month)
-Examples: A calculator, to-do list, or weather app.
-Focus on UI design, navigation, and basic functionality.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)
Goals:

-Build production-ready applications with advanced features.
-Learn about APIs, database integration, and deployment.

Steps:
1.Deepen Knowledge of Your Chosen Path (3–4 months)
-Native: Advanced Swift (iOS) or Kotlin (Android).
-Cross-Platform: Advanced React Native or Flutter concepts (state management, animations).

2.Learn Backend and APIs (3 months)
-Understand REST APIs and GraphQL.
-Use Firebase or build a custom backend with Node.js or Python (Django/Flask).

3.Master Advanced Features (4–6 months)
-Implement push notifications, offline mode, and in-app purchases.
-Learn mobile-specific optimizations like lazy loading and memory management.

4.Build Real-World Projects (3–6 months)
-Examples:
-E-commerce app with user authentication.
-A social media app with real-time chat.
-A fitness tracker using device sensors.
-Test apps on multiple devices and deploy to app stores.
`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Build scalable, secure, and high-performance applications.
-Explore specialized areas like AR/VR, AI, or IoT integration.

Steps:
1.Master Platform-Specific Skills (6–12 months)
-Android: Advanced Jetpack libraries, custom views.
-iOS: Core Data, Combine, advanced SwiftUI.
-Cross-Platform: Deep dive into performance tuning and native modules.

2.Focus on Security and Optimization (3–6 months)
-Learn secure data storage, encryption, and code obfuscation.
-Optimize app performance for faster loading times and smooth animations.

3.Explore Emerging Technologies (3–6 months)
-AR/VR with ARKit (iOS), ARCore (Android), or Unity.
-AI integration using TensorFlow Lite or Core ML.
-IoT integration with platforms like MQTT or Firebase Realtime Database.

4.Lead Projects and Mentor (6–12 months)
-Take responsibility for end-to-end app development.
-Contribute to open-source mobile projects or create a personal technical blog.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: ` Technologies, Tools, and Languages for Mobile App Developers

Programming Languages:
Native Development:
Android: Java, Kotlin.
iOS: Swift, Objective-C.
Cross-Platform Development:
React Native (JavaScript/TypeScript).
Flutter (Dart).
Xamarin (C#).

Frameworks and Libraries:
Frontend: React Native, Flutter, SwiftUI, Jetpack Compose.
Backend: Firebase, Django, Node.js, Laravel.
State Management: Redux, MobX, Provider (Flutter).
APIs and Databases:
RESTful APIs, GraphQL.
Local Databases: SQLite, Room (Android), Core Data (iOS).
Cloud Databases: Firebase Firestore, AWS DynamoDB.

Development Tools:
Android Studio, Xcode, Visual Studio Code, Expo (React Native).
Debugging: Charles Proxy, Flipper, Logcat.
Version Control and Collaboration:
Git, GitHub, Bitbucket.
Agile tools: Jira, Trello, Notion.

Additional Skills:
Deployment: Google Play Store, Apple App Store.
Testing: Appium, Detox, XCTest, Espresso.
Cloud and DevOps: Docker, Kubernetes, CI/CD pipelines.`,
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
    backgroundImage: "url('https://img.freepik.com/free-vector/source-code-concept-illustration_114360-5487.jpg?uid=R180249399&ga=GA1.1.1301806546.1734892304&semt=ais_hybrid')",backgroundSize: "cover",
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
