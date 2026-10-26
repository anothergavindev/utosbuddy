"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { PasswordInput } from "@/components/ui/PasswordInput";

export function SignupForm() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">
          Email address <span aria-hidden="true">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="juan@example.com"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="firstName">
          First name <span aria-hidden="true">*</span>
        </Label>
        <Input
          id="firstName"
          name="firstName"
          autoComplete="given-name"
          placeholder="Juan"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="lastName">
          Last name <span aria-hidden="true">*</span>
        </Label>
        <Input
          id="lastName"
          name="lastName"
          autoComplete="family-name"
          placeholder="Dela Cruz"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">
          Phone number <span aria-hidden="true">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="09XX XXX XXXX"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">
          Password <span aria-hidden="true">*</span>
        </Label>
        <PasswordInput id="password" name="password" autoComplete="new-password" required />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">
          Confirm password <span aria-hidden="true">*</span>
        </Label>
        <PasswordInput
          id="confirmPassword"
          name="confirmPassword"
          autoComplete="new-password"
          required
        />
      </div>

      <Button type="submit" fullWidth className="mt-2">
        Sign up
      </Button>
    </form>
  );
}
