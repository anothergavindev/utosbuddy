import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";

// Placeholder only — confirms the scaffold runs. Replace when building the landing page.
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100dvh-6rem)] items-center">
        <Container className="py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight">{siteConfig.name}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{siteConfig.tagline}</p>
        </Container>
      </main>
    </>
  );
}
