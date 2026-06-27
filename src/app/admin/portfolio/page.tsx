"use client";

import useSWR from "swr";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PortfolioPage() {
  const { data: portfolios, error, mutate } = useSWR("/api/admin/portfolio", fetcher);

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus portofolio ini?")) return;
    
    try {
      const res = await fetch(`/api/admin/portfolio/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        mutate();
      } else {
        const data = await res.json();
        alert(data.error || "Gagal menghapus portofolio");
      }
    } catch (err) {
      alert("Terjadi kesalahan");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Portofolio</h1>
        <Link href="/admin/portfolio/new">
          <Button>Tambah Portofolio</Button>
        </Link>
      </div>

      {error ? (
        <div className="text-red-500">Gagal memuat portofolio.</div>
      ) : !portfolios ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-[var(--border-default)] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-black/5 dark:bg-white/5">
              <tr>
                <th className="px-6 py-4 font-semibold text-sm">Judul</th>
                <th className="px-6 py-4 font-semibold text-sm">Kategori</th>
                <th className="px-6 py-4 font-semibold text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-sm w-32">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-default)]">
              {portfolios.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-text-secondary">
                    Belum ada portofolio.
                  </td>
                </tr>
              ) : (
                portfolios.map((item: any) => (
                  <tr key={item.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium">{item.title}</td>
                    <td className="px-6 py-4 text-text-secondary">{item.category?.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === 'PUBLISHED' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-3">
                      <Link href={`/admin/portfolio/${item.id}`} className="text-blue-500 hover:text-blue-700 font-medium text-sm">
                        Edit
                      </Link>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500 hover:text-red-700 font-medium text-sm"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
