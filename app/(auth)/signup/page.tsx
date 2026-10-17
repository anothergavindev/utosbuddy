import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { SignupForm } from "@/app/(auth)/signup/signup-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Sign up" };

export default function SignupPage() {
  return (
    <Card className="relative w-full max-w-sm">
      <Link
        href="/login"
        aria-label="Back to log in"
        className="absolute top-4 left-4 flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
      </Link>

      <CardHeader className="pt-16 text-center">
        <p className="text-sm font-semibold text-primary">{siteConfig.name}</p>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>Sign up to start using {siteConfig.name}.</CardDescription>
      </CardHeader>

      <CardContent>
        <SignupForm />
      </CardContent>
    </Card>
  );
}
