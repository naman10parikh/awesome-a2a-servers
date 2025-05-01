import React from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="container mx-auto py-12">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Awesome A2A Servers Directory
        </h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Discover and explore Agent-to-Agent (A2A) server implementations
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Browse Servers</Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </header>
      
      <main>
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Featured Servers</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Server cards will go here */}
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-medium">Google A2A</h3>
              <p className="mb-4 text-muted-foreground">
                Official A2A protocol implementation by Google
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 