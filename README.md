# Awesome A2A Servers [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of awesome Agent2Agent (A2A) servers.

* [What is A2A?](#what-is-a2a)
* [Clients](#clients)
* [Tutorials](#tutorials)
* [Server Implementations](#server-implementations)
* [Frameworks](#frameworks)
* [Tools & Utilities](#tools--utilities)
* [Community](#community)
* [Contributing](#contributing)

## What is A2A?

A2A (Agent2Agent) is an open protocol created by Google that enables AI agents from different frameworks and vendors to communicate and collaborate seamlessly. It aims to break down silos, allowing composite multi-agent workflows across diverse enterprise platforms by providing a common "language" for agents.

A2A complements the Model Context Protocol (MCP) - while MCP focuses on how AI agents access external tools and data, A2A focuses on how agents communicate with each other to coordinate tasks.

* **Official Repository:** [google/A2A](https://github.com/google/A2A)
* **Official Documentation:** [A2A Documentation](https://google.github.io/A2A/)

## Clients

Clients are necessary for interacting with A2A servers.

| Type               | Name                  | Description                              | Link                                                                 |
|--------------------|-----------------------|------------------------------------------|----------------------------------------------------------------------|
| 🎖️ Official Sample | Python A2A Client     | Official Python client sample code       | [google/A2A/.../common](https://github.com/google/A2A/tree/main/samples/python/common) |
| 🎖️ Official Sample | JavaScript A2A Client | Official JavaScript client sample code   | [google/A2A/.../src](https://github.com/google/A2A/tree/main/samples/js/src) |
| Library            | Python A2A Library    | Production-ready library by Manoj Desai  | [themanojdesai/python-a2a](https://github.com/themanojdesai/python-a2a) |

## Tutorials

* [A2A Protocol Overview](https://zenn.dev/zawawahoge/scraps/1b06081403a8b7) - In-depth technical overview of A2A architecture and MCP comparison

## Server Implementations

### Official Samples

These servers are provided by Google as examples within the official A2A repository.

| Name                  | Description                              | Details                | Link                                                                 |
|-----------------------|------------------------------------------|------------------------|----------------------------------------------------------------------|
| Google ADK A2A Server | Expense reimbursement sample             | 🐍 Python, 🏠 Local    | [google/A2A/.../google_adk](https://github.com/google/A2A/tree/main/samples/python/agents/google_adk) |
| LangGraph A2A Server  | Sample using LangGraph                   | 🐍 Python, ☁️ Cloud    | [google/A2A/.../langgraph](https://github.com/google/A2A/tree/main/samples/python/agents/langgraph) |
| CrewAI A2A Server     | Sample using CrewAI framework            | 🐍 Python, ☁️ Cloud    | [google/A2A/.../crewai](https://github.com/google/A2A/tree/main/samples/python/agents/crewai) |
| Genkit A2A Server     | Sample using Genkit                      | 📇 JavaScript, ☁️ Cloud | [google/A2A/.../agents](https://github.com/google/A2A/tree/main/samples/js/src/agents) |

### Third-Party Servers

These servers are developed and maintained by the community.

| Name                   | Description                       | Details             | Link                                                            |
|------------------------|-----------------------------------|---------------------|-----------------------------------------------------------------|
| Google Maps A2A Server | Provides Google Maps capabilities | 🐍 Python, ☁️ Cloud | [pab1it0/google-maps-a2a](https://github.com/pab1it0/google-maps-a2a) |

*(Currently, the list of known third-party public servers is limited. Please contribute if you know of others!)*

## Frameworks

> Currently, there are no known A2A-specific frameworks. Please contribute if you know of any!

## Tools & Utilities

Tools to help with A2A development and testing.

| Type               | Name                  | Description                       | Details             | Link                                                                 |
|--------------------|-----------------------|-----------------------------------|---------------------|----------------------------------------------------------------------|
| 🎖️ Official Sample | A2A CLI (Python)      | Command-line interface for Python | 🐍 Python           | [google/A2A/.../cli](https://github.com/google/A2A/tree/main/samples/python/hosts/cli) |
| 🎖️ Official Sample | A2A CLI (JavaScript)  | Command-line interface for JS     | 📇 JavaScript       | [google/A2A/.../js](https://github.com/google/A2A/tree/main/samples/js) |

## Demos and Examples

Practical demonstrations of A2A in action.

* **Multi-Agent Web App Demo:** Showcases A2A communication between multiple agents in a web application. ([google/A2A/demo](https://github.com/google/A2A/tree/main/demo))

## Community

* **Official Announcement:** [A2A: A New Era of Agent Interoperability](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/) (Google Developers Blog)
* **Community Article:** [Meet Google A2A...](https://medium.com/@the_manoj_desai/meet-google-a2a-the-protocol-that-will-revolutionize-multi-agent-ai-systems-80d55a4583ed) (Medium article on Python A2A by Manoj Desai)

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

**Note**

Confused about Local 🏠 vs Cloud ☁️?

* Use local when A2A server is talking to a locally installed software or providing capabilities accessible only within a local environment
* Use cloud when A2A server is talking to remote APIs or services accessible over network/internet

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to add new servers, clients, tools, or resources to this list.

## License

This repository is licensed under the [MIT License](LICENSE). 