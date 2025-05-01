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
* 📇 [A2A CLI](https://github.com/chrishayuk/a2a-cli) - Command-line client for interacting with A2A servers

## Tutorials

* [Getting Started with A2A Protocol](https://github.com/google/A2A#getting-started) - Official getting started guide
* 📇 [A2A & MCP Tutorial](https://github.com/Tsadoq/a2a-mcp-tutorial) - A tutorial on using Model Context Protocol by Anthropic and Agent2Agent Protocol by Google

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

* 📇 [Grasp](https://github.com/aircodelabs/grasp) - Self-hosted agentic browser with built-in MCP, A2A support.

### 💼 Business & Productivity Tools

> Servers interfacing with common business software like CRMs, ERPs, project management tools, calendars, etc.

* 🐍 [A2A MCP Demo](https://github.com/doogie-bigmack/a2a_mcp_demo) - A2A and MCP agent demo showing integration with business systems.

### 💬 Communication Services

> Servers for messaging, email, notifications, and other communication tools.

* 📇 [A2AChat](https://github.com/Web-Engine/A2AChat) - A2A-compatible chat application.
* 📇 [Swissknife](https://github.com/daltonnyx/swissknife) - Chat application with multi-agents system supporting multiple models and MCP.

### 📊 Data Analysis & Database Integration

> Servers for data processing, analytics, querying databases, or interacting with BI tools.

* 🐍 [Database Agent](https://github.com/wognsths/Database-Agent) - Database Agent using A2A architecture.

### 💰 Financial Services

> Servers for financial operations, currency conversion, and financial data.

* 🐍 [Smart Crypto Portfolio Manager](https://github.com/tonycai/smart_crypto_portfolio_manager) - A sophisticated multi-agent system for intelligent cryptocurrency portfolio management using A2A communication.

### 🏠 Home Automation (IoT)

> Servers for controlling smart home devices and managing IoT ecosystems.

* *No entries yet. [Contribute](CONTRIBUTING.md)!*

### 🖼️ Image & Media Generation

> Servers for generating images, videos, audio, or other media.

* *See [google/crewai](#official-samples) for an example image generation tool.*
* 🐍 [Movie Script Generator](https://github.com/nevermined-io/movie-script-generator-agent-crew-ai) - A2A server for generating movie scripts using AI technology.

### 🔄 Integration Services

> Servers that act as bridges or gateways to various APIs, platforms, and services (e.g., Zapier-like functionality).

* 📇 [n8n-nodes-agent2agent](https://github.com/pjawz/n8n-nodes-agent2agent) - Adds nodes to n8n for interacting with AI agents using A2A protocol.
* 🏎️ [Agent Gateway](https://github.com/agentgateway/agentgateway) - Next Generation Agentic Proxy for API integrations.
* 🐍 [EC2 Creation MCP Tool](https://github.com/anirban1592/google_openai_mcp) - Demonstrates how Google's A2A protocol works with Anthropic's MCP protocol for AWS EC2 creation.

### 🗺️ Location Services

> Servers providing geospatial data, mapping, directions, and place information.

* 🐍 [Google Maps A2A Server](https://github.com/pab1it0/google-maps-a2a) - An A2A-compliant server that provides Google Maps capabilities including geocoding, reverse geocoding, directions, places search, place details, and distance matrix calculations.
* 📇 [Gemini A2A Chat with Google Maps](https://github.com/jeantimex/gemini-a2a-chat) - Node.js chat app using Gemini function calling and an A2A server to interact with Google Maps APIs.

### 💊 Healthcare & Wellness

> Servers related to health data, fitness tracking, or wellness information.

* 📇 [Health Record MCP](https://github.com/jmandel/health-record-mcp) - Connect to an EHR and make clinical data available via MCP.

### 🔎 Search & Data Extraction

> Servers for web search, data retrieval, document querying, and information extraction.

* *See [google/genkit-movie](#official-samples) for an example data extraction tool.*
* 📇 [PocketFlow-Tutorial](https://github.com/The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge) - Turns GitHub repositories into easy tutorials with AI.

## Frameworks

* [Google ADK](https://github.com/google/A2A/tree/main/samples/python/agents/google_adk) - Google's Agent Developer Kit with A2A support
* [LangGraph](https://github.com/google/A2A/tree/main/samples/python/agents/langgraph) - Framework for building stateful, multi-step agents
* [CrewAI](https://github.com/google/A2A/tree/main/samples/python/agents/crewai) - Framework for creating and orchestrating role-playing agents
* [Genkit](https://github.com/google/A2A/tree/main/samples/js/src/agents) - JavaScript framework for building generative AI applications
* 🐍 [Mentis](https://github.com/foreveryh/mentis) - A powerful multi-agent orchestration framework built on LangGraph
* 🐍 [Qredence Agentic-Kernel](https://github.com/Qredence/Agentic-Kernel) - A flexible foundation AI system for creating A2A-compatible autonomous AI agents
* 🐍 [PocketFlow](https://github.com/The-Pocket/PocketFlow) - Pocket Flow: 100-line LLM framework that lets agents build agents
* 📇 [Agent Hub](https://github.com/chandrakanthm/agentHub) - Keeps AI agents discoverable, composable, and resilient

## Utilities

### Libraries

* 🎖️ 🐍 [Python Common Library](https://github.com/google/A2A/tree/main/samples/python/common) - Python implementation of A2A client and server components
* 🎖️ 📇 [JavaScript Common Library](https://github.com/google/A2A/tree/main/samples/js/src) - JavaScript/TypeScript implementation of A2A client and server components
* 🏎️ [a2a-go](https://github.com/TheApeMachine/a2a-go) - A2A server in Go for facilitating communication between software agents
* 📇 [nestjs-a2a](https://github.com/thestupd/nestjs-a2a) - A NestJS library for implementing A2A protocol
* ☕ [a2a4j](https://github.com/imfangs/a2a4j) - A Java implementation of the A2A protocol
* #️⃣ [a2a-net](https://github.com/neuroglia-io/a2a-net) - .NET implementation of the A2A protocol
* 🏎️ [trpc-a2a-go](https://github.com/trpc-group/trpc-a2a-go) - Go implementation for A2A protocol
* 🦀 [a2a-rs](https://github.com/EmilLindfors/a2a-rs) - A2A Protocol implementation for Rust

### Tools

* 🎖️ 🐍 [Python CLI](https://github.com/google/A2A/tree/main/samples/python/hosts/cli) - Command-line tool to interact with A2A servers
* 🎖️ 📇 [JavaScript CLI](https://github.com/google/A2A/tree/main/samples/js/src/cli.ts) - JavaScript command-line tool for interacting with A2A servers
* 🎖️ 🐍 [Orchestrator Agent](https://github.com/google/A2A/tree/main/samples/python/hosts/multiagent) - An agent that can delegate tasks to remote agents through A2A
* 📇 [A2A UI](https://github.com/egor-baranov/a2a-ui) - UI for Google A2A made using Next.js, TypeScript and Shadcn
* 🏎️ [ka](https://github.com/tot-ra/ka) - AI agent accessible via CLI or network, A2A compatible

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