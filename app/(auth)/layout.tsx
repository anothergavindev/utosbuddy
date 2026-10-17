import { Container } from "@/components/layout/container";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex min-h-dvh flex-col bg-muted py-12">
      <Container size="sm" className="my-auto flex justify-center">
        {children}
      </Container>
    </main>
  );
}
