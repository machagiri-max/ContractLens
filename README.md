# ContractLens 📄🤖

### AI-Powered Contract Review & Q&A Platform

ContractLens is a full-stack AI-powered web application that helps users understand and review contracts such as employment agreements, offer letters, and other legal documents.

Users can upload a contract PDF, analyze its contents, identify important information, and ask questions about the uploaded document using AI.

---

## 🚀 Live Demo

🌐 **Frontend:**  
https://contract-lens-weld.vercel.app/

🔗 **Backend API:**  
https://contractlens-tutt.onrender.com/

📚 **API Documentation:**  
https://contractlens-tutt.onrender.com/docs

💻 **GitHub:**  
https://github.com/machagiri-max/ContractLens

---

# 🎯 Problem Statement

Contracts often contain complex legal and technical language that can be difficult for normal users to understand.

For example, an employment agreement may contain clauses related to:

- Salary
- Notice period
- Termination
- Confidentiality
- Intellectual Property
- Non-compete restrictions
- Liability
- Leave policies
- Probation
- Dispute resolution

ContractLens provides an AI-powered interface that helps users understand these clauses without having to manually search through lengthy documents.

> **Note:** ContractLens is an educational/informational tool and does not replace professional legal advice.

---

# ✨ Features

## 🔐 User Authentication

- User registration
- User login
- JWT-based authentication
- Password hashing using bcrypt
- Protected API endpoints
- Current-user authentication

---

## 📄 Contract Upload

Users can upload PDF contracts through the application.

The backend:

1. Receives the PDF
2. Validates the uploaded file
3. Processes the document
4. Extracts the text
5. Stores contract information
6. Makes the content available for AI processing

---

## 🤖 AI Contract Analysis

ContractLens uses an LLM to analyze contract content.

The AI can help identify:

- Important clauses
- Potential risks
- Contract obligations
- Payment information
- Termination conditions
- Confidentiality requirements
- Intellectual property clauses
- Other important contract information

---

## 💬 AI Contract Q&A

Users can ask questions about their contracts.

Example:

```text
What is my notice period?
