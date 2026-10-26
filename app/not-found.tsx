import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center">
      <Container className="text-center">
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-muted-foreground">We couldn&apos;t find what you were looking for.</p>
        <Link href="/" className={buttonVariants({ className: "mt-6" })}>
          Back to home
        </Link>
      </Container>
    </main>
  );
}
