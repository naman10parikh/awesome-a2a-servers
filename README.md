# Awesome A2A Servers [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of awesome Agent-to-Agent (A2A) Protocol servers.

* [What is A2A?](#what-is-a2a)
* [Clients](#clients)
* [Tutorials](#tutorials)
* [Server Implementations](#server-implementations)
* [Frameworks](#frameworks)
* [Utilities](#utilities)
* [Tips & Tricks](#tips--tricks)

## What is A2A?

A2A (Agent-to-Agent) is an open protocol initiated by Google that enables communication and interoperability between AI agents built on different frameworks or by different vendors. The core goal is to allow agents to discover each other's capabilities, negotiate interaction modes (text, forms, files, etc.), and collaborate securely on tasks.

## Official Resources

* [A2A Protocol GitHub Repository](https://github.com/google/A2A) - Google's official repository for A2A protocol
* [A2A Specification](https://github.com/google/A2A/blob/main/specification/json/a2a.json) - JSON Schema defining A2A protocol

## Clients

* Check out sample clients in the [official A2A repository](https://github.com/google/A2A/tree/main/samples)

## Tutorials

* [Getting Started with A2A Protocol](https://github.com/google/A2A#getting-started) - Official getting started guide

## Legend

* 🎖️ – official implementation
* programming language  
   * 🐍 – Python codebase  
   * 📇 – TypeScript/JavaScript codebase  
   * 🏎️ – Go codebase  
   * 🦀 – Rust codebase  
   * #️⃣ - C# Codebase  
   * ☕ - Java codebase
* scope  
   * ☁️ - Cloud Service  
   * 🏠 - Local Service
* operating system  
   * 🍎 – For macOS  
   * 🪟 – For Windows
   * 🐧 – For Linux

## Server Implementations

Below is a list of known A2A server implementations, categorized by their primary function. Want to add your own? [Contributions are welcome!](CONTRIBUTING.md)

### 🎖️ Official Samples

> Implementations provided in the official Google A2A repository.

* 🐍 [ADK Agent](https://github.com/google/A2A/tree/main/samples/python/agents/google_adk) - Sample agent built with Google's Agent Developer Kit (ADK) that handles expense reports.
* 🐍 [LangGraph Agent](https://github.com/google/A2A/tree/main/samples/python/agents/langgraph) - Currency conversion agent built with LangGraph (demonstrates financial tools).
* 🐍 [CrewAI Agent](https://github.com/google/A2A/tree/main/samples/python/agents/crewai) - Image generation agent built with CrewAI.
* 📇 [Genkit Movie Agent](https://github.com/google/A2A/tree/main/samples/js/src/agents/movie-agent) - Movie information agent built with Genkit (demonstrates search/data extraction).
* 📇 [Genkit Coder Agent](https://github.com/google/A2A/tree/main/samples/js/src/agents/coder) - Code generation agent built with Genkit (demonstrates developer tools).

### 🤖 Browser Automation

> Servers for controlling and automating web browsers.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 💼 Business & Productivity Tools

> Servers interfacing with common business software like CRMs, ERPs, project management tools, calendars, etc.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### ☁️ Cloud Platform Management

> Servers for managing resources on cloud platforms (AWS, GCP, Azure, etc.).

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 💬 Communication Services

> Servers for messaging, email, notifications, and other communication tools.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 📊 Data Analysis & Database Integration

> Servers for data processing, analytics, querying databases, or interacting with BI tools.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 🧬 Data Science & Machine Learning

> Servers providing tools for data science workflows, model training, or ML operations.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 🛠️ Developer Tools

> Servers for software development tasks, code generation, version control interaction, code execution, and DevOps.

* *See [google/genkit-coder](#official-samples) for an example code generation tool.*
* 🦀 [a2a-rs](https://github.com/EmilLindfors/a2a-rs) - A2A Protocol implementation for Rust. While primarily a library/framework, it can be used to build developer tool agents.

### 📁 File System Operations

> Servers for interacting with local or remote file systems.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 💰 Financial Services

> Servers for financial operations, currency conversion, and financial data.

* *See [google/langgraph](#official-samples) for an example currency conversion tool.*

### 🎮 Gaming & Entertainment

> Servers interacting with games, streaming services, or providing entertainment-related information.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### ❤️ Healthcare & Wellness

> Servers related to health data, fitness tracking, or wellness information. (Note: Handle sensitive data with extreme care and compliance).

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 🏠 Home Automation (IoT)

> Servers for controlling smart home devices and managing IoT ecosystems.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 🖼️ Image & Media Generation

> Servers for generating images, videos, audio, or other media.

* *See [google/crewai](#official-samples) for an example image generation tool.*

### 🔄 Integration Services

> Servers that act as bridges or gateways to various APIs, platforms, and services (e.g., Zapier-like functionality).

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 🧠 Knowledge & Document Management

> Servers for interacting with knowledge bases, document repositories, note-taking apps, etc.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 🗺️ Location Services

> Servers providing geospatial data, mapping, directions, and place information.

* 🐍 [Google Maps A2A Server](https://github.com/pab1it0/google-maps-a2a) - An A2A-compliant server that provides Google Maps capabilities including geocoding, reverse geocoding, directions, places search, place details, and distance matrix calculations.

### 📈 Marketing & Sales Automation

> Servers interacting with marketing automation platforms, analytics, or sales tools.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### ⏱️ Monitoring & Observability

> Servers for accessing monitoring data, logs, or interacting with observability platforms.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 👤 Personal Assistant & Task Management

> Servers for managing personal tasks, schedules, reminders, and providing assistant-like capabilities.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 🔎 Search & Data Extraction

> Servers for web search, data retrieval, document querying, and information extraction.

* *See [google/genkit-movie](#official-samples) for an example data extraction tool.*

### 🔒 Security & Compliance

> Servers providing security functions, vulnerability scanning, or compliance checks.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 🌐 Translation & Language Services

> Servers providing text translation or other language processing capabilities.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 🚆 Travel & Transportation

> Servers for travel planning, flight/hotel booking, and transportation services.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

## Frameworks

* [Google ADK](https://github.com/google/A2A/tree/main/samples/python/agents/google_adk) - Google's Agent Developer Kit with A2A support
* [LangGraph](https://github.com/google/A2A/tree/main/samples/python/agents/langgraph) - Framework for building stateful, multi-step agents
* [CrewAI](https://github.com/google/A2A/tree/main/samples/python/agents/crewai) - Framework for creating and orchestrating role-playing agents
* [Genkit](https://github.com/google/A2A/tree/main/samples/js/src/agents) - JavaScript framework for building generative AI applications

## Utilities

### Libraries

* 🎖️ 🐍 [Python Common Library](https://github.com/google/A2A/tree/main/samples/python/common) - Python implementation of A2A client and server components
* 🎖️ 📇 [JavaScript Common Library](https://github.com/google/A2A/tree/main/samples/js/src) - JavaScript/TypeScript implementation of A2A client and server components

### Tools

* 🎖️ 🐍 [Python CLI](https://github.com/google/A2A/tree/main/samples/python/hosts/cli) - Command-line tool to interact with A2A servers
* 🎖️ 📇 [JavaScript CLI](https://github.com/google/A2A/tree/main/samples/js/src/cli.ts) - JavaScript command-line tool for interacting with A2A servers
* 🎖️ 🐍 [Orchestrator Agent](https://github.com/google/A2A/tree/main/samples/python/hosts/multiagent) - An agent that can delegate tasks to remote agents through A2A

## Tips & Tricks

### Setting Up Your First A2A Server

1. Clone the official A2A repository:
   ```bash
   git clone https://github.com/google/A2A.git
   ```
2. Choose one of the sample agents based on your preferred framework
3. Follow the setup instructions in the agent's README file
4. Use one of the CLI tools to interact with your agent

## Contributing

Please read the [contribution guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This repository is licensed under [MIT License](LICENSE).