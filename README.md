<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CertSecure - Blockchain-based Certificate Verification System</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f9f9f9;
      color: #333;
      padding: 40px;
      max-width: 900px;
      margin: auto;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5em;
    }
    h2 {
      font-size: 2rem;
      margin-top: 1.5em;
    }
    h3 {
      font-size: 1.5rem;
      margin-top: 1em;
    }
    code, pre {
      background-color: #eee;
      padding: 0.5em;
      border-radius: 5px;
      display: block;
      white-space: pre-wrap;
      margin: 10px 0;
    }
    ul {
      padding-left: 1.5em;
    }
    li {
      margin-bottom: 0.5em;
    }
    strong {
      color: #000;
    }
    em {
      color: #555;
    }
    a {
      color: #007acc;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1><strong>CertSecure - Blockchain-based Certificate Verification System</strong></h1>

  <p><em>Welcome to CertSecure!</em></p>

  <h2><strong>My First Project - CertSecure</strong></h2>
  <p>
    This project, <strong>CertSecure</strong>, is a blockchain-based certificate verification system that I built as part of my journey into web development.
    It combines several modern technologies to deliver a secure, easy-to-use platform for academic certificate issuance and verification.
  </p>
  <p>
    As my first project, I aimed to not only learn how blockchain can be applied in real-world scenarios but also to dive deep into full-stack development,
    incorporating both frontend and backend technologies.
  </p>
  <p>
    It’s been a challenging yet incredibly rewarding experience, and I’m excited to share it with you!
  </p>

  <h2><strong>What is CertSecure?</strong></h2>
  <p>
    <strong>CertSecure</strong> is a web-based application that allows educational institutions to issue academic certificates and store them securely on a blockchain.
    This decentralized ledger ensures that once a certificate is issued, it cannot be altered or forged, providing employers and institutions with an easy way to verify the authenticity of certificates.
  </p>

  <h2><strong>Technologies Used</strong></h2>
  <ol>
    <li><strong>React:</strong> We’ve used React to build the user interface with dynamic and responsive features using Hooks like <code>useState</code> and <code>useEffect</code>.</li>
    <li><strong>TypeScript:</strong> Used for better type safety and early error detection during development.</li>
    <li><strong>Tailwind CSS:</strong> Our styling framework with utility classes like <code>bg-gray-900</code>, <code>text-indigo-600</code>, and <code>transition-colors</code>.</li>
    <li><strong>Lucide React Icons:</strong> Clean and customizable icons to enhance the UI experience.</li>
    <li><strong>CSS Transitions:</strong> Smooth transitions using <code>transition-colors</code> and <code>duration-200</code>.</li>
    <li><strong>Backend (Node.js & Express):</strong> Server-side logic, blockchain interaction, and API handling.</li>
    <li><strong>JavaScript (ES6+):</strong> Modern JavaScript features such as arrow functions, destructuring, and template literals.</li>
  </ol>

  <h2><strong>Features</strong></h2>
  <ul>
    <li><strong>Custom Blockchain:</strong> Built from scratch to store academic certificates securely.</li>
    <li><strong>Real-Time Certificate Verification:</strong> Instant validation of certificate authenticity.</li>
    <li><strong>Tamper-Proof:</strong> Certificates are protected with cryptographic hashing.</li>
    <li><strong>Blockchain Visualizer:</strong> Visual representation of the blockchain structure and linkages.</li>
    <li><strong>No Central Authority:</strong> Fully decentralized network validation process.</li>
  </ul>

  <h2><strong>How to Get Started</strong></h2>
  <h3>1. Clone the Repo</h3>
  <pre><code>git clone https://github.com/Tripurari-singh/CertChain</code></pre>

  <h3>2. Navigate to the Project Folder</h3>
  <pre><code>cd certSecure</code></pre>

  <h3>3. Install Dependencies</h3>
  <p>Make sure you have Node.js installed (if not, download from <a href="https://nodejs.org" target="_blank">nodejs.org</a>)</p>
  <pre><code>npm install</code></pre>

  <h3>4. Start the App</h3>
  <pre><code>npm run dev</code></pre>
  <p><em>or</em></p>
  <pre><code>npm start</code></pre>

  <p>Then open <a href="http://localhost:3000">http://localhost:3000</a> in your browser.</p>

  <h2><strong>How It Works</strong></h2>
  <ul>
    <li>Submit certificate data using the web interface.</li>
    <li>Data is recorded immutably on the blockchain.</li>
    <li>Enter the unique identifier to verify a certificate's authenticity.</li>
    <li>Visualize the blockchain to understand how certificates are linked.</li>
  </ul>

  <h2><strong>Future Improvements</strong></h2>
  <ul>
    <li>Implement secure login for institutions to manage certificate issuance.</li>
    <li>Integrate <strong>MongoDB</strong> for persistent certificate storage.</li>
    <li>Generate <strong>QR codes</strong> for certificates linking to blockchain records.</li>
    <li>Transition to scalable blockchain platforms like <strong>Ethereum</strong> or <strong>Hyperledger</strong>.</li>
  </ul>
</body>
</html>
