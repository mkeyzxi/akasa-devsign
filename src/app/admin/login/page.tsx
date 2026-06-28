"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/Button";

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-section-alt)]">
      <div className="max-w-md w-full p-8 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-default)] shadow-[var(--shadow-md)] text-center">
        <h1 className="text-2xl font-bold mb-2">Login Admin</h1>
        <p className="text-text-secondary mb-8">
          Silakan masuk menggunakan akun Google Anda yang sudah terdaftar sebagai Admin.
        </p>
        <Button 
          onClick={() => signIn("google", { callbackUrl: "/admin/portfolio" })}
          className="w-full"
        >
          Login dengan Google
        </Button>
      </div>
    </div>
  );
}
