import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

// Placeholder only — confirms the scaffold runs. Replace when building the landing page.
export default function HomePage() {
  return (
    <main className="flex min-h-dvh items-center">
      <Container className="py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight">{siteConfig.name}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{siteConfig.tagline}</p>
      </Container>
    </main>
  );
}
