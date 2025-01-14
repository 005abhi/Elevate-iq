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
   A Security Analyst protects an organization’s systems, networks, and data from cyber threats. They monitor, detect, and respond to security incidents, assess vulnerabilities, and implement security measures.

For engineering students, becoming a Security Analyst involves learning foundational concepts in cybersecurity, networking, and operating systems, alongside practical skills like threat detection and incident response.


    
`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
     Beginner Level (0–6 months)

Goals:
-Build a solid foundation in cybersecurity principles and networking.
-Learn the basics of operating systems and security tools.

Steps:

1.Understand Cybersecurity Basics (1–2 months)
-Learn about common threats: malware, phishing, ransomware.
-Understand security principles: CIA triad (Confidentiality, Integrity, Availability).
-Free resources: Cybersecurity Fundamentals on platforms like Cybrary, Udemy, or YouTube.

2.Learn Networking Basics (2–3 months)
-Study TCP/IP, DNS, firewalls, and proxies.
-Learn tools like Wireshark to analyze network traffic.
-Recommended: CompTIA Network+ certification material.

3.Understand Operating Systems (2–3 months)
-Learn the basics of Linux and Windows security.
-Practice using the Linux command line (file permissions, SSH, etc.).
-Study Windows Event Viewer and common system logs.

4.Learn Basic Security Tools (1–2 months)
-Explore tools like Nmap (network scanning), Wireshark (traffic analysis), and Metasploit (penetration testing).
-Use tools to perform vulnerability scans and analyze results.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)

Goals:
-Gain expertise in vulnerability management, incident response, and ethical hacking.
-Understand compliance and regulatory standards.

Steps:

1.Learn Advanced Threat Detection (3–4 months)
-Understand IDS/IPS (Intrusion Detection/Prevention Systems).
-Use tools like Snort, Suricata, or Zeek.
-Learn about SIEM tools like Splunk, IBM QRadar, or ELK Stack.

2.Develop Vulnerability Management Skills (2–3 months)
-Use tools like Nessus, OpenVAS, or Qualys to scan systems.
-Learn how to patch vulnerabilities and harden systems.

3.Study Incident Response (3–4 months)
-Learn the phases: identification, containment, eradication, recovery, and lessons learned.
-Practice with real-world scenarios using tools like Cyber Kill Chain or MITRE ATT&CK.

4.Understand Compliance Standards (2–3 months)
-Learn about regulations like GDPR, HIPAA, and PCI-DSS.
-Study industry best practices such as NIST and ISO 27001.

5.Work on Medium-Scale Projects (3–6 months)
-Examples:
-Set up a small SOC (Security Operations Center) using open-source tools.
-Perform a security assessment on a simulated network.
-Create a phishing simulation and analyze user responses.
`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Master advanced security practices like penetration testing and forensic analysis.
-Build expertise in threat intelligence and automation.

Steps:

1.Learn Penetration Testing (6–12 months)
-Study penetration testing frameworks like OSSTMM and PTES.
-Use tools: Kali Linux, Metasploit, Burp Suite, OWASP ZAP.
-Explore certifications: CEH (Certified Ethical Hacker) or OSCP (Offensive Security Certified Professional).

2.Master Forensic Analysis (3–6 months)
-Learn disk and memory forensics using tools like FTK and Autopsy.
-Understand incident forensics and digital evidence handling.

3.Dive into Threat Intelligence (3–6 months)
-Learn about threat actors and attack vectors.
-Use tools like ThreatConnect, Recorded Future, or AlienVault OTX.
-Study frameworks like Cyber Kill Chain and MITRE ATT&CK.

4.Automate Security Tasks (3–6 months)
-Learn scripting for security: Python for automation and data analysis.
-Explore SOAR platforms (Security Orchestration, Automation, and Response) like Splunk Phantom or IBM Resilient.

5.Work on Advanced Projects (6–12 months)
-Examples:
-Conduct penetration testing on a simulated enterprise network.
-Build a threat-hunting tool using Python.
-Analyze a malware sample and write a detailed report.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Skills for Security Analysts

Programming and Scripting:
Python, PowerShell, Bash: Automate security tasks.

Network and Traffic Analysis:
Tools: Wireshark, Nmap, Snort, Zeek.

Vulnerability Assessment and Management:
Tools: Nessus, Qualys, OpenVAS.

Penetration Testing:
Tools: Kali Linux, Metasploit, Burp Suite, OWASP ZAP.

Incident Response and Forensics:
Tools: Splunk, ELK Stack, FTK, Autopsy.

Threat Intelligence and Monitoring:
Tools: MITRE ATT&CK, ThreatConnect, AlienVault OTX.

Compliance and Standards:
Frameworks: NIST, ISO 27001, GDPR, HIPAA.

Certifications:
Entry-level: CompTIA Security+, EC-Council CEH.
Advanced: CISSP (Certified Information Systems Security Professional), OSCP, CISM (Certified Information Security Manager).

Communication: Write detailed reports and explain findings to non-technical teams.
Analytical Thinking: Identify and mitigate potential threats.
Team Collaboration: Work with IT and development teams to implement security measures.`,
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
    backgroundImage: "url('https://img.freepik.com/free-vector/security-isometric-infographics_1284-17493.jpg?t=st=1734915199~exp=1734918799~hmac=55e6fdfde634dab83b9fe5ba3c3c349ca4340346577509d5f43005ff0d41ff44&w=1060')",backgroundSize: "cover",
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
