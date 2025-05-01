import React from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { truncate } from "@/lib/utils";

interface RepositoryCardProps {
  id: string;
  name: string;
  description: string;
  url: string;
  stars?: number;
  lastUpdated?: string;
}

export function RepositoryCard({
  id,
  name,
  description,
  url,
  stars,
  lastUpdated,
}: RepositoryCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">
          {truncate(description || "No description available", 120)}
        </p>
        
        {stars !== undefined && (
          <div className="mt-4 flex items-center text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {stars}
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/servers/${id}`}>Details</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
} 