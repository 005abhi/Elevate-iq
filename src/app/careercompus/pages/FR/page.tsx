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
      A Front-End Developer is responsible for creating the visual and interactive elements of a website or web application that users engage with directly. 
      Their role is crucial in ensuring that the interface is not only functional but also aesthetically appealing and user-friendly.
      
      Key Responsibilities:
      - Building and styling websites using HTML, CSS, and JavaScript.
      - Ensuring websites are responsive and mobile-friendly.
      - Optimizing web pages for performance and SEO.
      - Collaborating with designers and back-end developers.
      - Testing for cross-browser compatibility and debugging.

      Skills Required:
      - Proficiency in HTML, CSS, JavaScript.
      - Understanding of responsive design principles.
      - Knowledge of frameworks like React, Angular, or Vue.js.
      - Experience with version control systems like Git.
      - Awareness of UX/UI principles.

      Why Choose Front-End Development?
      - It combines creativity with coding.
      - High demand across industries.
      - Opportunity to build visually engaging, interactive experiences.
    `,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner Level (1-3 Months)

      Step 1: Learn the Basics
      HTML: Learn to structure content.
      - Key Topics: Tags, attributes, semantic HTML, forms.
      - Example: Create a personal portfolio page.

      CSS: Style your website.
      - Key Topics: Selectors, box model, positioning, Flexbox, CSS Grid.
      - Example: Design a responsive layout.

      JavaScript: Add interactivity.
      - Key Topics: Variables, data types, DOM manipulation, events.
      - Example: Build a simple to-do list app.

      Step 2: Learn Version Control
      Use Git and GitHub to manage code.
      - Commands: git init, git add, git commit, git push.

      Step 3: Build Small Projects
      - Examples: Portfolio website, calculator, or a weather app.
    `,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (3-6 Months)

Step 1: Learn Advanced JavaScript
-Topics: ES6+ features, promises, async/await, and APIs.
-Example: Fetch data from an API and display it dynamically.

Step 2: Explore CSS Preprocessors and Frameworks
-Tools: Sass, Bootstrap, or Tailwind CSS.
-Example: Redesign your portfolio using Tailwind CSS.

Step 3: Start Using Front-End Frameworks
-Learn React.js or Vue.js.
-Topics: Components, state, props, hooks.
-Example: Create a blog application with React.

Step 4: Understand Responsive Design and Accessibility
-Learn media queries, responsive units, and ARIA roles.
-Tools: Lighthouse or Axe for accessibility testing.`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (6+ Months)
Step 1: Master Advanced Framework Concepts
-State Management: Redux, Context API.
-Routing: React Router, Next.js routing.
-Example: Build an e-commerce app with dynamic routes and state management.

Step 2: Deep Dive into Performance Optimization
-Tools: Lighthouse, Webpack, or Vite.
-Techniques: Lazy loading, image optimization, and reducing bundle size.

Step 3: Explore Testing and Debugging
-Tools: Jest, Cypress, React Testing Library.
-Example: Write unit and integration tests for your components.

Step 4: Deploy and Maintain Applications
-Platforms: Netlify, Vercel, or AWS.
-Example: Deploy your e-commerce app.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies and Languages for Front-End Developers

Core Languages:
HTML: The skeleton of web pages.
CSS: Styling and layout.
JavaScript: Interactivity and logic.

CSS Preprocessors & Frameworks:
Sass/SCSS: For modular and reusable CSS.
Bootstrap/Tailwind CSS: For quick styling.

Front-End Frameworks & Libraries:
React.js: A popular library for building user interfaces.
Vue.js: A progressive framework for dynamic UIs.
Angular: A full-fledged framework for large applications.

Build Tools:
Webpack: Module bundler.
Vite: Fast development environment.
Parcel: Simplified bundler.

Version Control:
Git/GitHub: Essential for collaboration and code management.
APIs and Data Handling:
Fetch API, Axios for HTTP requests.
JSON for data interchange.

Testing Tools:
Jest: Unit testing.
Cypress: End-to-end testing.
React Testing Library: Testing React components.

Performance Optimization:
Lighthouse: Performance and SEO audits.
Lazy Loading: Optimize image loading.
Code Splitting: Reduce initial bundle size.

Additional Tools:
Figma/Adobe XD: For UI/UX design.
Chrome DevTools: For debugging and testing.`,
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
    backgroundImage: "url('https://media.istockphoto.com/id/1005771222/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=2048x2048&w=is&k=20&c=GTYINdf1_HuQLhVKtfdhy1DJiNn4gsZmozmOd4-84Pc=')",
    backgroundSize: "cover",
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
