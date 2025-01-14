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
   A Cybersecurity Engineer focuses on designing and implementing systems and strategies to protect an organization’s digital assets. They create secure infrastructure, manage security tools, monitor for vulnerabilities, and respond to cyber threats.

For engineering students, the journey to becoming a Cybersecurity Engineer involves gaining knowledge in computer systems, networking, cryptography, and advanced security protocols. Practical skills such as penetration testing, system hardening, and threat hunting are essential.


    
`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
     Beginner Level (0–6 months)

Goals:
-Build foundational knowledge in cybersecurity concepts and networking.
-Gain basic hands-on experience with security tools.

Steps:

1.Learn the Basics of Cybersecurity (1–2 months)
-Understand common threats: malware, phishing, ransomware.
-Study cybersecurity principles: CIA triad (Confidentiality, Integrity, Availability).
-Free resources: NIST Cybersecurity Framework, Cybrary beginner courses.

2.Learn Networking Fundamentals (2–3 months)
-Study networking protocols: TCP/IP, DNS, HTTP, and HTTPS.
-Understand firewalls, VPNs, and proxies.
-Use tools like Wireshark for traffic analysis.
-Recommended resource: CompTIA Network+ study materials.

3.Study Operating Systems (2–3 months)
-Learn Linux basics: file permissions, SSH, and firewalls (iptables).
-Study Windows security: group policies, event logging, and PowerShell.
-Practice configuring and securing both systems.

4.Get Hands-On with Basic Security Tools (1–2 months)
-Tools: Nmap (scanning), Wireshark (traffic analysis), and Metasploit (basic exploitation).
-Practice identifying vulnerabilities in a lab environment like TryHackMe or Hack The Box.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)

Goals:
-Develop expertise in system hardening, vulnerability management, and threat detection.
-Learn about compliance and industry best practices.

Steps:

1.Master Threat Detection and Vulnerability Management (3–4 months)
-Tools: Nessus, OpenVAS, Qualys.
-Understand how to patch vulnerabilities and harden systems.
-Learn how to detect suspicious activity with IDS/IPS tools like Snort or Suricata.

2.Dive Into Cryptography (2–3 months)
-Learn encryption standards: AES, RSA, and TLS/SSL.
-Study hash functions: MD5, SHA-256.
-Understand PKI (Public Key Infrastructure) and digital certificates.

3.Understand Compliance Standards (2–3 months)
-Study regulations like GDPR, HIPAA, and PCI-DSS.
-Learn best practices from NIST, ISO 27001, and CIS Controls.

4.Learn Security Automation (3–4 months)
-Use Python for automating security tasks like log analysis and vulnerability scanning.
-Learn about security orchestration tools like Splunk Phantom or SOAR platforms.

5.Work on Medium-Scale Projects (3–6 months)
-Examples:
-Harden a Linux or Windows system.
-Set up a basic SIEM (e.g., ELK Stack) for log monitoring.
-Simulate a phishing attack and create a report on its impact.

`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Specialize in advanced cybersecurity fields like penetration testing, cloud security, or incident response.
-Design secure architectures for large-scale systems.

Steps:

1.Master Penetration Testing (6–12 months)
-Study frameworks: OSSTMM, PTES.
-Tools: Kali Linux, Metasploit, Burp Suite, OWASP ZAP.
-Explore certifications like CEH (Certified Ethical Hacker) or OSCP (Offensive Security Certified Professional).

2.Learn Cloud Security (6–12 months)
-Understand securing cloud services (AWS, Azure, GCP).
-Learn tools: AWS Security Hub, Azure Defender, and Google Cloud Security Command Center.
-Study multi-cloud or hybrid cloud security strategies.

3.Study Advanced Threat Hunting (3–6 months)
-Use frameworks like MITRE ATT&CK for proactive threat identification.
-Tools: ThreatConnect, Cortex XDR, AlienVault OTX.

4.Specialize in Incident Response (3–6 months)
-Learn forensic analysis: disk and memory forensics using FTK or Autopsy.
-Study real-world incident response cases and simulate exercises.

5.Work on Real-World, Advanced Projects (6–12 months)
-Examples:
-Build a secure enterprise-grade network.
-Conduct a penetration test and write a comprehensive report.
-Design a cloud-based security architecture for a distributed application.`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Skills for Cybersecurity Engineers

Programming and Scripting:
Python, PowerShell, Bash: Automate security tasks and write custom tools.

Networking and Traffic Analysis:
Tools: Wireshark, Nmap, Zeek, Snort.

Vulnerability Management and Penetration Testing:
Tools: Nessus, Metasploit, Burp Suite, OWASP ZAP.

Incident Response and Forensics:
Tools: Splunk, ELK Stack, FTK, Autopsy.

Cloud Security:
Tools: AWS Security Hub, Azure Defender, Google Cloud Armor.

Compliance and Standards:
Frameworks: NIST, ISO 27001, GDPR, HIPAA, CIS Controls.

Certifications:
Beginner: CompTIA Security+, CySA+ (Cybersecurity Analyst).
Intermediate: CEH, SSCP (Systems Security Certified Practitioner).
Advanced: CISSP, OSCP, CISM, GIAC Certifications.

Soft Skills:
Communication: Present complex security issues clearly.
Analytical Thinking: Identify vulnerabilities and develop effective solutions.
Problem-Solving: Respond quickly and effectively to incidents.`,
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
    backgroundImage: "url('https://img.freepik.com/premium-vector/cyber-security-infographics-vector-resources_787567-1499.jpg?w=1060')",backgroundSize: "cover",
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
