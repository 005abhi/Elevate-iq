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
      A UI Designer (User Interface Designer) focuses on the design and layout of the interactive elements of digital products, such as websites, mobile apps, and software interfaces. Their job is to create a visually appealing and user-friendly experience for users, ensuring that every element, from buttons to icons, is intuitive, easy to navigate, and aesthetically consistent with the brand.

Key Responsibilities:
-Designing and Creating Layouts: UI Designers focus on creating aesthetically pleasing and usable designs for web pages, mobile applications, and software interfaces.
-Prototyping and Wireframing: They design prototypes and wireframes to visualize how users will interact with the interface before development starts.
-Creating UI Components: Design reusable components such as buttons, sliders, forms, and navigation menus.
-Collaborating with Developers: Work closely with developers to ensure designs are implemented correctly in code.
-Testing for Usability: Perform usability testing and make adjustments to improve user experience (UX).
-Maintaining Consistency: Ensure visual consistency across all platforms and devices.

Skills Required:
-Proficiency in Design Tools: Tools like Sketch, Adobe XD, Figma, and InVision.
-Understanding of User Experience (UX) Principles: Know how to design with the user in mind.
-Wireframing and Prototyping: Ability to create low-fidelity and high-fidelity prototypes.
-Responsive Design: Designing layouts that work across a variety of screen sizes and devices.
-Attention to Detail: Precision in elements like typography, spacing, and alignment.
    `,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
      Beginner:
Step 1: Learn the Basics of Design
-Understand Design Principles: Learn about color theory, typography, contrast, alignment, and visual hierarchy.
-Basic Tools: Start with tools like Figma or Adobe XD to practice basic design tasks like creating buttons, icons, and simple layouts.
-Learn UI Patterns: Understand common UI elements like navigation bars, cards, and modals.
-Study UI Design Inspirations: Explore design inspiration websites like Dribbble and Behance to understand current trends.

Step 2: Get Familiar with UI Elements and Components
-Learn about typography, buttons, input forms, navigation menus, grids, and cards.
-Practice creating UI kits and reusable components.

Step 3: Basic Prototyping and Wireframing
-Use your tools to create wireframes of simple web pages and apps.
-Learn the basics of low-fidelity and high-fidelity prototypes.

Step 4: Understanding Responsive Design
-Understand how your designs look on different screen sizes, such as desktop, tablet, and mobile.
    `,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (3-6 Months)

Step 1: Deepen Your Knowledge of Design Tools
-Learn more advanced features of design tools like Figma, Sketch, or Adobe XD.
-Master components, auto-layouts, and shared styles to create efficient designs.

Step 2: Create Complex UI Designs
-Start working on designing full web pages and mobile app interfaces.
-Implement more complex UI components like modals, sidebars, and sliders.

Step 3: Learn UI Animation
-Learn how to add microinteractions and animations in your designs using Prototyping features in Figma or Adobe XD.
-Tools like Principle or After Effects can also help you create smoother animations.

Step 4: Understand User-Centered Design (UCD)
-Study more about UX/UI principles and user-centric design approaches.
-Work with users to understand their needs and preferences through user testing and feedback.`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (6+ Months)
Step 1: Master Advanced Prototyping
-Use advanced prototyping techniques, including creating interactive, multi-screen prototypes.
-Master tools like Axure RP and ProtoPie for high-fidelity, advanced prototyping.

Step 2: Design System & Branding
-Learn how to create or contribute to a Design System, which is a collection of reusable UI components and patterns.
-Understand branding and how it affects UI design decisions.

Step 3: Collaboration with Developers
-Learn how to effectively communicate your designs with front-end developers and back-end developers.
-Master design handoff tools like Zeplin or Figma’s inspect feature to ensure designs are implemented correctly.

Step 4: Stay Updated & Experiment
-Stay updated with design trends, tools, and practices by attending conferences, following design blogs, or taking advanced courses.
-Experiment with motion design, 3D UI design, and Augmented Reality (AR) interfaces to push your boundaries.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies and Languages for Front-End Developers

While UI designers primarily focus on the visual and interactive aspects of a website or app, understanding some web technologies can greatly enhance their ability to collaborate with developers and create more effective designs.

Design Tools:
Figma: A cloud-based design tool that’s highly popular for UI/UX design. Supports prototyping, design collaboration, and version control.
Adobe XD: A vector-based design tool from Adobe for UI/UX design with advanced prototyping features.
Sketch: A popular vector-based design tool primarily used for web and mobile UI design, available for macOS.
InVision: A tool for designing interactive prototypes and collaborating with team members.
Axure RP: Advanced wireframing and prototyping tool for creating highly interactive prototypes.

UI/UX Design Languages (Basic Knowledge for UI Designers):
HTML (HyperText Markup Language): Understanding the basic structure of web pages can help UI designers design layouts that are easy to implement.
CSS (Cascading Style Sheets): Basic knowledge of CSS will help UI designers understand how styles (e.g., colors, fonts, spacing) will be applied to their designs.
JavaScript (JS): While UI designers don’t need to be experts in JS, knowing how JS interacts with the DOM (Document Object Model) can help in understanding dynamic elements such as buttons, dropdowns, and animations.

Frameworks for Prototyping/Animation:
Bootstrap / Tailwind CSS: Understanding these frameworks can help you design responsive UI components that work seamlessly with front-end code.
GSAP (GreenSock Animation Platform): For advanced animation and transitions in your designs.
Framer Motion: A popular React library for animations, useful for UI designers working with React developers.

Other Technologies:
Design Systems & Libraries: Tools like Storybook and Material UI allow designers to implement consistent UI components across projects.
SVG (Scalable Vector Graphics): Learn to create and work with SVG images, which are commonly used for icons and illustrations in modern web design.
Accessibility Tools: Familiarize yourself with accessibility tools (e.g., Contrast Checker, Wave for accessibility testing) to ensure your UI is inclusive for all users.`,
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
    backgroundImage: "url('https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051557.jpg?t=st=1734892736~exp=1734896336~hmac=7ef0326a2747c432d31ce2b438516d5d2e9a5152a9f7acd0cd75f2e5e38655ea&w=1800')",
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
