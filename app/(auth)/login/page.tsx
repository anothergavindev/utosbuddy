import type { Metadata } from "next";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/password-input";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <p className="text-sm font-semibold text-primary">{siteConfig.name}</p>
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>Log in to your account to continue.</CardDescription>
      </CardHeader>

      <CardContent>
        <form className="flex flex-col gap-4" noValidate>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="juan@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <PasswordInput
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="••••••••"
            />
          </div>

          {/* type="button" until auth is wired, so the form can't submit credentials in a GET query string. */}
          <Button type="button" fullWidth className="mt-2">
            Log in
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <span className="w-full border-t" />
          </div>
          <p className="relative mx-auto w-fit bg-card px-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            or
          </p>
        </div>

        <Link href="/signup" className={buttonVariants({ variant: "outline", fullWidth: true })}>
          Sign up instead
        </Link>
      </CardContent>
    </Card>
  );
}
