"use client";

import { useEffect } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: send to error monitoring once one is chosen.
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-dvh items-center">
      <Container className="text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">Please try again.</p>
        <Button className="mt-6" onClick={reset}>
          Try again
        </Button>
      </Container>
    </main>
  );
}
