"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { LayoutDashboard, LogOut, Briefcase, Tags } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const menu = [
    { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Portfolio", href: "/admin/portfolio", icon: <Briefcase size={20} /> },
    { name: "Categories", href: "/admin/categories", icon: <Tags size={20} /> },
  ];

  return (
    <div className="min-h-screen flex bg-[#F0EDE8] dark:bg-black text-text-primary">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-[#1A1A1A] border-r border-[var(--border-default)] hidden md:flex flex-col">
        <div className="p-6 border-b border-[var(--border-default)]">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Akasa<span className="text-brand-primary">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                pathname === item.href || pathname.startsWith(item.href + '/') && item.href !== '/admin'
                  ? "bg-brand-primary text-white"
                  : "hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-[var(--border-default)]">
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-[#1A1A1A] border-b border-[var(--border-default)]">
          <Link href="/" className="text-lg font-bold">
            Akasa<span className="text-brand-primary">Admin</span>
          </Link>
          <button onClick={() => signOut()} className="p-2 text-text-secondary">
            <LogOut size={20} />
          </button>
        </header>
        
        <div className="flex-1 overflow-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
