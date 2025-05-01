import React from "react";
import { Button } from "@/components/ui/button";
import { RepositoryCard } from "@/components/repositories/repository-card";

// Sample data - this will be replaced with actual CSV parsing later
const sampleRepositories = [
  {
    id: "google-a2a",
    name: "Google A2A",
    description: "An open protocol enabling communication and interoperability between opaque agentic applications.",
    url: "https://github.com/google/A2A",
    stars: 420,
  },
  {
    id: "a2a-go",
    name: "A2A Go",
    description: "A2A server in Go for facilitating communication and interaction between software agents in applications.",
    url: "https://github.com/TheApeMachine/a2a-go",
    stars: 15,
  },
];

export default function ServersPage() {
  return (
    <div className="container mx-auto py-12">
      <header className="mb-8">
        <h1 className="mb-4 text-3xl font-bold">A2A Servers Directory</h1>
        <p className="text-muted-foreground">
          Browse all available A2A server implementations
        </p>
      </header>

      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Sort
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <input
            type="search"
            placeholder="Search repositories..."
            className="h-9 rounded-md border px-3 py-1"
          />
          <Button size="sm">Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sampleRepositories.map((repo) => (
          <RepositoryCard
            key={repo.id}
            id={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.url}
            stars={repo.stars}
          />
        ))}
      </div>
    </div>
  );
} 