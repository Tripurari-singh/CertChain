# CertSecure - Blockchain-based Certificate Verification System

Welcome to **CertSecure**!

## My First Project - CertSecure

This project, **CertSecure**, is a blockchain-based certificate verification system that I built as part of my journey into web development.  
It combines several modern technologies to deliver a **secure**, _easy-to-use_ platform for academic certificate issuance and verification.

As my first project, I aimed to not only learn how blockchain can be applied in real-world scenarios but also to dive deep into full-stack development, incorporating both frontend and backend technologies.  
It’s been a challenging yet incredibly rewarding experience, and I’m excited to share it with you!

---

## What is CertSecure?

**CertSecure** is a web-based application that allows educational institutions to issue academic certificates and store them securely on a blockchain.  
This decentralized ledger ensures that once a certificate is issued, it _cannot be altered or forged_, providing employers and institutions with an easy way to verify the authenticity of certificates.

---

## Technologies Used

This project is built using a variety of modern web technologies to ensure it is fast, interactive, and user-friendly.

### 1. React

- We’ve used **React** to build the user interface.
- React allows us to create a dynamic and responsive app.
- React Hooks (`useState`, `useEffect`) manage the app's state and side effects.

### 2. TypeScript

- A superset of JavaScript that helps ensure better type safety.
- Reduces the risk of bugs by providing static type checking.

### 3. Tailwind CSS

- Utility-first CSS framework used for custom design.
- Classes like `bg-gray-900`, `text-indigo-600`, and `transition-colors` support a clean, modern look with dark mode.

### 4. Lucide React Icons

- Scalable and customizable icons for enhanced UX.
- Adds search, plus circle, and shield icons for intuitive navigation.

### 5. CSS Transitions

- Used for smooth visual effects between dark/light mode.
- Tailwind utilities like `transition-colors`, `duration-200`.

### 6. Backend: Node.js & Express

- Handles server-side logic and blockchain interactions.
- Manages certificate verification, issuance, and storage efficiently.

### 7. JavaScript (ES6+)

- Uses modern JavaScript features such as arrow functions, template literals, and destructuring.

---

## Features

- **Custom Blockchain**: Ensures data is secure and unchangeable.
- **Real-Time Certificate Verification**: Instantly verifies certificate authenticity.
- **Tamper-Proof**: Cryptographic hashes prevent any alteration.
- **Blockchain Visualizer**: Displays real-time block linkage.
- **No Central Authority**: Fully decentralized validation system.

---

## How to Get Started

Here’s how you can set up CertSecure on your local machine:

### 1. Clone the Repo

```bash
git clone https://github.com/Tripurari-singh/CertChain
```

### 2. Navigate to the Project Folder

```bash
cd certSecure
```

### 3. Install Dependencies

Make sure you have Node.js installed. Then run:

```bash
npm install
```

### 4. Start the App

```bash
npm run dev
```

or

```bash
npm start
```

Visit `http://localhost:3000` in your browser to view the app.

---

## How It Works

- Submit certificate data (e.g., student name, degree, marks) through the web interface.
- Data is stored on the blockchain, making it tamper-proof.
- To verify a certificate, enter its unique identifier in the verification section.
- The blockchain confirms its authenticity.
- The visualizer displays all blocks and their links in real-time.

---

## Future Improvements

Here’s what we plan to add:

- Implement a secure login system for institutions.
- Use MongoDB to store certificates beyond the in-memory blockchain.
- Generate QR codes that link to the certificate's blockchain record.
- Transition to platforms like Ethereum or Hyperledger for better performance.
