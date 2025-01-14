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
  A Blockchain Developer designs, implements, and maintains blockchain-based systems. These developers focus on creating secure, decentralized applications (dApps) and smart contracts, leveraging the blockchain's distributed ledger technology.

For engineering students, becoming a Blockchain Developer involves understanding cryptography, distributed systems, and blockchain frameworks while mastering programming languages like Solidity and JavaScript.


    
`,
  },
  {
    id: "Beginners",
    title: "FOR BEGINNERS",
    content: `
     Beginner Level (0–6 months)

Goals:
-Build a strong foundation in blockchain fundamentals and programming.
-Gain basic knowledge of blockchain architecture and cryptography.
Steps:

1.Understand Blockchain Basics (1–2 months)
-Learn the fundamentals of blockchain:
-What is a blockchain?
-Consensus mechanisms: Proof of Work (PoW), Proof of Stake (PoS).
-K-ey concepts: decentralization, immutability, smart contracts.
-Resources: Bitcoin Whitepaper, Ethereum documentation.

2.Learn Programming Basics (2–3 months)
-Master programming languages used in blockchain development:
-JavaScript or Python for scripting and front-end integration.
-Solidity for writing smart contracts.
-Build basic programming skills, including object-oriented programming (OOP).

3.Understand Cryptography Basics (1–2 months)
-Learn about cryptographic algorithms: hashing (SHA-256), digital signatures, public/private key encryption.
-Study how cryptography ensures security in blockchains.

4.Get Familiar with Blockchain Platforms (1–2 months)
-Start with Ethereum: Learn how it supports smart contracts and dApps.
-Set up a wallet and explore tools like Metamask, Ganache, and Remix IDE.
`,
  },
  {
    id: "Intermediate",
    title: "FOR INTERMEDIATE",
    content: `Intermediate Level (6–18 months)

Goals:
-Gain expertise in smart contract development and blockchain frameworks.
-Work on integrating blockchain solutions with web and mobile applications.

Steps:

1.Learn Smart Contract Development (3–4 months)
-Master Solidity and the Ethereum Virtual Machine (EVM).
-Build simple contracts for token creation (ERC-20, ERC-721).
-Test and deploy smart contracts using Remix IDE and Truffle Suite.

2.Understand Blockchain Architecture (2–3 months)
-Dive into concepts like nodes, mining, and distributed consensus.
-Explore advanced topics: sidechains, Layer-2 solutions, and sharding.

3.Integrate Blockchain with Web Development (3–4 months)
-Learn web3.js or ethers.js for blockchain interaction.
-Build dApps: front-end frameworks like React.js + blockchain back-end.
-Example project: Build a simple voting dApp or a crowdfunding platform.

4.Explore Other Blockchain Platforms (3–4 months)
-Learn about Hyperledger, Solana, Cardano, or Polkadot.
-Understand their unique features and use cases.

5.Work on Medium-Scale Projects (3–6 months)
-Examples:
-Develop a decentralized exchange (DEX).
-Build an NFT marketplace.
-Create a blockchain-based identity management system.
`,
  },

  {
    id: "Advanced",
    title: "FOR ADVANCE",
    content: `Advanced Level (18–36 months)

Goals:
-Specialize in advanced blockchain concepts like consensus algorithms, scalability, and security.
-Develop real-world blockchain solutions and contribute to open-source projects.
Steps:

1.Master Advanced Blockchain Concepts (6–12 months)
-Study consensus mechanisms in-depth: PoW, PoS, Delegated PoS, Proof of Authority (PoA).
-Explore topics like cross-chain interoperability and blockchain scalability (Layer-2 solutions).

2.Specialize in Security and Auditing (3–6 months)
-Learn to identify and fix vulnerabilities in smart contracts.
-Study tools like MythX, Slither, and Remix Analyzer for security auditing.

3.Build Scalable Blockchain Applications (6–12 months)
-Use frameworks like Polygon or Arbitrum for Layer-2 scaling.
-Explore private blockchains and enterprise solutions (e.g., Hyperledger Fabric).

4.Contribute to Blockchain Communities (3–6 months)
-Contribute to open-source blockchain projects on GitHub.
-Join hackathons to collaborate with other developers and showcase your skills.

5.Work on Real-World, Advanced Projects (6–12 months)
-Examples:
-Build a decentralized finance (DeFi) application.
-Create a blockchain-based supply chain management system.
-Develop a decentralized autonomous organization (DAO).
`,
  },
  {
    id: "Tech",
    title: "TECHNOLOGIES",
    content: `Technologies, Tools, and Skills for Blockchain Developers

Programming and Frameworks:
Solidity: Smart contract programming.
JavaScript/Python: Front-end and scripting integration.
Rust: For platforms like Solana and Polkadot.

Blockchain Platforms:
Ethereum, Hyperledger, Solana, Cardano, Polkadot.

Development Tools:
Truffle Suite: Smart contract development and testing.
Ganache: Local blockchain for development.
Remix IDE: Online smart contract development.
Metamask: Wallet and blockchain interaction.

APIs and Libraries:
web3.js, ethers.js: Blockchain interaction.
IPFS (InterPlanetary File System): Decentralized storage.

Security and Auditing:
Tools: MythX, Slither, Remix Analyzer.
Knowledge of vulnerabilities: Reentrancy, overflow/underflow, access control.

Soft Skills:
Analytical Thinking: Understand and solve decentralized problems.
Collaboration: Work effectively in teams for open-source or enterprise projects.
Communication: Explain blockchain concepts to non-technical audiences.


Certifications and Resources

Certifications:
Certified Blockchain Developer (CBD).
Ethereum Developer Certification by ConsenSys Academy.

Online Resources:
Courses: FreeCodeCamp, Coursera, Udemy blockchain courses.
Documentation: Ethereum, Solidity, Hyperledger Fabric.
Communities: Reddit r/blockchain, GitHub repositories, Discord groups.
`,
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
    backgroundImage: "url('https://img.freepik.com/free-vector/technology-bitcoin-background-with-holographic-effect_1017-31521.jpg?t=st=1734916255~exp=1734919855~hmac=72aa76cbad5fceb4db951751505b5c17f2286dfb874b0175ab31eb22c43b60d5&w=1060')",backgroundSize: "cover",
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
