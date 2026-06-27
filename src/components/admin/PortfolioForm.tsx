"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { Button } from "@/components/ui/Button";

// Import BlockNote dynamically to avoid SSR issues
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('@/components/admin/BlockNoteEditor'), { ssr: false });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PortfolioForm({ portfolioId }: { portfolioId?: string }) {
  const router = useRouter();
  const isEdit = !!portfolioId;
  const { data: categories } = useSWR("/api/admin/categories", fetcher);
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    client: "",
    year: new Date().getFullYear().toString(),
    description: "",
    content: "[]",
    thumbnail: "",
    categoryId: "",
    websiteUrl: "",
    githubUrl: "",
    status: "DRAFT",
    featured: false,
  });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);

  useEffect(() => {
    if (isEdit) {
      fetch(`/api/admin/portfolio/${portfolioId}`)
        .then(res => res.json())
        .then(data => {
          setFormData({
            title: data.title,
            slug: data.slug,
            client: data.client || "",
            year: data.year?.toString() || "",
            description: data.description,
            content: data.content || "[]",
            thumbnail: data.thumbnail || "",
            categoryId: data.categoryId,
            websiteUrl: data.websiteUrl || "",
            githubUrl: data.githubUrl || "",
            status: data.status,
            featured: data.featured,
          });
          setFetching(false);
        });
    }
  }, [isEdit, portfolioId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleEditorChange = (htmlOrJson: string) => {
    setFormData(prev => ({ ...prev, content: htmlOrJson }));
  };

  const handleUploadThumbnail = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (result.url) {
        setFormData(prev => ({ ...prev, thumbnail: result.url }));
      }
    } catch (err) {
      alert("Gagal mengupload gambar");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEdit ? `/api/admin/portfolio/${portfolioId}` : "/api/admin/portfolio";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/portfolio");
      } else {
        const data = await res.json();
        alert(data.error || "Terjadi kesalahan");
      }
    } catch (err) {
      alert("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <div>Loading data...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl bg-white dark:bg-[#1A1A1A] p-6 rounded-2xl border border-[var(--border-default)] shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Judul Portofolio *</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2 rounded-xl bg-transparent border border-[var(--border-default)] focus:outline-none focus:border-brand-primary" />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Slug (Kosongkan untuk otomatis)</label>
          <input type="text" name="slug" value={formData.slug} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-transparent border border-[var(--border-default)] focus:outline-none focus:border-brand-primary" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Kategori *</label>
          <select name="categoryId" value={formData.categoryId} onChange={handleChange} required className="w-full px-4 py-2 rounded-xl bg-transparent border border-[var(--border-default)] focus:outline-none focus:border-brand-primary">
            <option value="" disabled>Pilih Kategori</option>
            {categories?.map((cat: any) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Client</label>
          <input type="text" name="client" value={formData.client} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-transparent border border-[var(--border-default)] focus:outline-none focus:border-brand-primary" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tahun</label>
          <input type="number" name="year" value={formData.year} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-transparent border border-[var(--border-default)] focus:outline-none focus:border-brand-primary" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Status</label>
          <select name="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-transparent border border-[var(--border-default)] focus:outline-none focus:border-brand-primary">
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Deskripsi Singkat *</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required rows={3} className="w-full px-4 py-2 rounded-xl bg-transparent border border-[var(--border-default)] focus:outline-none focus:border-brand-primary" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Thumbnail/Cover *</label>
        <div className="flex gap-4 items-center">
          <input type="file" onChange={handleUploadThumbnail} accept="image/*" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-primary file:text-white hover:file:bg-brand-primary/80" />
          {formData.thumbnail && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={formData.thumbnail} alt="Preview" className="w-16 h-16 object-cover rounded-lg" />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Website URL</label>
          <input type="url" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-transparent border border-[var(--border-default)] focus:outline-none focus:border-brand-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">GitHub URL</label>
          <input type="url" name="githubUrl" value={formData.githubUrl} onChange={handleChange} className="w-full px-4 py-2 rounded-xl bg-transparent border border-[var(--border-default)] focus:outline-none focus:border-brand-primary" />
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} className="w-4 h-4 text-brand-primary" />
          <span className="text-sm font-medium">Jadikan Featured Project (Tampil di Home)</span>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Konten (Detail Portfolio) *</label>
        <div className="border border-[var(--border-default)] rounded-xl overflow-hidden bg-white">
          <Editor initialContent={formData.content} onChange={handleEditorChange} />
        </div>
      </div>

      <div className="pt-4 border-t border-[var(--border-default)] flex justify-end gap-4">
        <Button variant="ghost" type="button" onClick={() => router.push('/admin/portfolio')}>Batal</Button>
        <Button type="submit" disabled={loading}>{loading ? "Menyimpan..." : "Simpan Portofolio"}</Button>
      </div>
    </form>
  );
}
