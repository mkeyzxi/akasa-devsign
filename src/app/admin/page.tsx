"use client";

import { useSession } from "next-auth/react";

export default function AdminDashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-2xl border border-[var(--border-default)] shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Selamat datang, {session?.user?.name || 'Admin'}!</h2>
        <p className="text-text-secondary">
          Ini adalah panel administrasi untuk mengelola konten website Akasa Devsign.
          Gunakan menu di samping untuk mengelola Portofolio dan Kategori.
        </p>
      </div>
    </div>
  );
}
