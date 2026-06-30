# 🤖 Personality AI Chatbot

An AI-powered chatbot that responds with a consistent personality using Large Language Models (LLMs), Prompt Engineering, and FastAPI.

This project demonstrates the fundamentals of AI application development by building a chatbot that behaves like an AI Mentor rather than a generic assistant.

---

## 🚀 Project Overview

Most chatbots generate generic responses. This project introduces the concept of personality-driven AI by using system prompts to guide the behavior, tone, and teaching style of the model.

The chatbot acts as an AI Mentor that:

* Explains concepts in simple language
* Uses beginner-friendly examples
* Breaks complex topics into smaller steps
* Provides educational and encouraging responses
* Maintains a consistent mentoring personality

This project serves as a foundational step toward building advanced AI systems such as RAG applications, AI Agents, Tool-Calling Agents, and Multi-Agent Systems.

---

## 🎯 Objectives

* Understand how LLM APIs work
* Learn Prompt Engineering fundamentals
* Build a FastAPI backend
* Create a frontend chat interface
* Implement personality control using system prompts
* Understand request-response architecture in AI applications

---

## ✨ Features

### AI Mentor Personality

The chatbot consistently behaves like an AI Mentor and provides educational guidance.

### Real-Time Conversations

Users can send messages and receive AI-generated responses instantly.

### Prompt Engineering

Uses carefully designed system prompts to control model behavior.

### FastAPI Backend

Lightweight and scalable backend architecture.

### Gemini Integration

Connects to Google's Gemini API for response generation.

### Clean Frontend Interface

Simple chat UI with:

* Chat window
* Message input
* Send button
* Dynamic response display

### Environment Variable Management

Secure API key storage using `.env`.

---

## 🏗️ System Architecture

```text
User
 │
 ▼
Frontend (HTML/CSS/JavaScript)
 │
 ▼
FastAPI Backend
 │
 ▼
Prompt Builder
 │
 ▼
Gemini API
 │
 ▼
AI Response
 │
 ▼
Frontend
 │
 ▼
User
```

---

## 📂 Project Structure

```text
personality-chatbot/

├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── main.py
│   │
│   ├── routes/
│   │   └── chat.py
│   │
│   ├── services/
│   │   └── llm_service.py
│   │
│   ├── prompts/
│   │   └── mentor_prompt.txt
│   │
│   ├── models/
│   │   └── chat_models.py
│   │
│   └── config/
│       └── settings.py
│
├── docs/
│
├── .env
├── requirements.txt
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* Future Goal: Build modern, responsive, and production-ready professional web applications.

### Backend

* Python
* FastAPI

### AI Model

* Google Gemini API

### Development Tools

* VS Code
* Git
* GitHub

---

## 🧠 Key Concepts Learned

### Large Language Models (LLMs)

Understanding how AI models generate responses.

### Prompt Engineering

Controlling AI behavior using carefully designed instructions.

### System Prompts

Defining chatbot personality and response style.

### API Integration

Sending requests and receiving responses from an LLM.

### Client-Server Communication

Frontend interacting with backend services.

### Backend Architecture

Separating routes, services, prompts, and configuration.

---

## 📌 Example Conversation

### User

```
What is an API?
```

### AI Mentor

```
Think of an API as a waiter in a restaurant.

You tell the waiter what you want, the waiter takes your request to the kitchen, and then brings back the food.

Similarly, an API allows different applications to communicate and exchange information.
```

---

## 🔒 Environment Variables

Create a `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

Never commit API keys to GitHub.

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Move Into Project

```bash
cd personality-chatbot
```

### Create Virtual Environment

```bash
python -m venv .venv
```

### Activate Virtual Environment

Windows:

```bash
.venv\Scripts\activate
```

Linux/Mac:

```bash
source .venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Start Backend

```bash
uvicorn main:app --reload
```

---

## 📖 Learning Outcomes

After completing this project, I learned:

* How AI chatbots work
* How to integrate Gemini API
* How to structure FastAPI projects
* How system prompts influence AI behavior
* How frontend and backend communicate
* How to build an end-to-end AI application

---

## 🚧 Future Improvements

### Memory Support

Allow the chatbot to remember previous messages.

### Multiple Personalities

Switch between:

* AI Mentor
* Interview Coach
* Teacher
* Career Advisor

### Voice Interaction

Add speech-to-text and text-to-speech.

### RAG Integration

Allow the chatbot to answer questions using uploaded documents.

### Tool Calling

Enable calculator and external tool usage.

### Authentication

User accounts and chat history storage.

---

## 📚 Next Project

Research Paper Assistant

Concepts to Learn:

* Retrieval-Augmented Generation (RAG)
* Vector Databases
* Embeddings
* Memory
* Tool Calling
* LangChain
* Document Question Answering

---

## 👨‍💻 Author

Akhil Soni

B.Tech – Artificial Intelligence & Data Science

Passionate about AI Engineering, Data Analytics, Data Engineering, and Generative AI applications.

---

⭐ If you found this project useful, consider giving it a star.
