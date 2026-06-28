"use client";

import { useState } from "react";
import useSWR from "swr";
import { Button } from "@/components/ui/Button";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CategoriesPage() {
  const { data: categories, error, mutate } = useSWR("/api/admin/categories", fetcher);
  const [isAdding, setIsAdding] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategoryName }),
      });

      if (res.ok) {
        setNewCategoryName("");
        setIsAdding(false);
        mutate();
      } else {
        const data = await res.json();
        alert(data.error || "Gagal menambah kategori");
      }
    } catch (err) {
      alert("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus kategori ini?")) return;
    
    try {
      const res = await fetch(`/api/admin/categories/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        mutate();
      } else {
        const data = await res.json();
        alert(data.error || "Gagal menghapus kategori");
      }
    } catch (err) {
      alert("Terjadi kesalahan");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Kategori Portfolio</h1>
        <Button onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? "Batal" : "Tambah Kategori"}
        </Button>
      </div>

      {isAdding && (
        <form onSubmit={handleAddCategory} className="bg-white dark:bg-[#1A1A1A] p-6 rounded-2xl border border-[var(--border-default)] shadow-sm mb-8 flex gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Nama Kategori</label>
            <input 
              type="text" 
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-transparent border border-[var(--border-default)] focus:outline-none focus:border-brand-primary"
              placeholder="Contoh: Web Development"
              required
            />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan"}
          </Button>
        </form>
      )}

      {error ? (
        <div className="text-red-500">Gagal memuat kategori.</div>
      ) : !categories ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-[var(--border-default)] overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-black/5 dark:bg-white/5">
              <tr>
                <th className="px-6 py-4 font-semibold text-sm">Nama</th>
                <th className="px-6 py-4 font-semibold text-sm">Slug</th>
                <th className="px-6 py-4 font-semibold text-sm w-32">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-default)]">
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-text-secondary">
                    Belum ada kategori.
                  </td>
                </tr>
              ) : (
                categories.map((cat: any) => (
                  <tr key={cat.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">{cat.name}</td>
                    <td className="px-6 py-4 text-text-secondary">{cat.slug}</td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => handleDelete(cat.id)}
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
