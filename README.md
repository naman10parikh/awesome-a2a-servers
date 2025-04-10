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

The A2A protocol uses JSON-RPC 2.0 over HTTP(S) and supports both standard request/response patterns and Server-Sent Events (SSE) for streaming updates.

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

### 🐍 Python

* 🎖️ [ADK Agent](https://github.com/google/A2A/tree/main/samples/python/agents/google_adk) - Sample agent built with Google's Agent Developer Kit (ADK) that handles expense reports
* 🎖️ [LangGraph Agent](https://github.com/google/A2A/tree/main/samples/python/agents/langgraph) - Currency conversion agent built with LangGraph
* 🎖️ [CrewAI Agent](https://github.com/google/A2A/tree/main/samples/python/agents/crewai) - Image generation agent built with CrewAI

### 📇 JavaScript/TypeScript  

* 🎖️ [Genkit Movie Agent](https://github.com/google/A2A/tree/main/samples/js/src/agents/movie-agent) - Movie information agent built with Genkit
* 🎖️ [Genkit Coder Agent](https://github.com/google/A2A/tree/main/samples/js/src/agents/coder) - Code generation agent built with Genkit

### 🦀 Rust

* [a2a-rs](https://github.com/EmilLindfors/a2a-rs) - A2A Protocol implementation for Rust following idiomatic Rust practices and hexagonal architecture principles

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