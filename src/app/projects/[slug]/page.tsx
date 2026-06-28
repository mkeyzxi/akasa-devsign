import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import { Metadata } from "next";
import ClientBlockNoteRenderer from "@/components/ClientBlockNoteRenderer";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = await prisma.portfolio.findUnique({ where: { slug } });
  
  if (!portfolio) {
    return { title: 'Not Found' };
  }

  return {
    title: `${portfolio.title} | Akasa Devsign`,
    description: portfolio.description,
    openGraph: {
      title: portfolio.title,
      description: portfolio.description,
      images: [portfolio.thumbnail],
    }
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const portfolio = await prisma.portfolio.findUnique({
    where: { slug },
    include: { category: true }
  });

  if (!portfolio || portfolio.status !== 'PUBLISHED') {
    notFound();
  }

  let techStack: string[] = [];
  try {
    if (portfolio.techStack) {
      techStack = JSON.parse(portfolio.techStack);
    }
  } catch (e) {}

  let gallery: string[] = [];
  try {
    if (portfolio.gallery) {
      gallery = JSON.parse(portfolio.gallery);
    }
  } catch (e) {}

  return (
    <div className="bg-[var(--bg-page)] min-h-screen pt-24 pb-20">
      <div className="container-custom">
        <Link href="/#portfolio" className="inline-flex items-center gap-2 text-text-secondary hover:text-brand-primary mb-8 transition-colors">
          <ArrowLeft size={20} />
          <span>Kembali ke Portofolio</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{portfolio.title}</h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {portfolio.description}
            </p>

            <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-[var(--shadow-lg)]">
              <Image 
                src={portfolio.thumbnail} 
                alt={portfolio.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="bg-white dark:bg-[#1A1A1A] rounded-3xl p-8 border border-[var(--border-default)] shadow-sm">
              <ClientBlockNoteRenderer content={portfolio.content} />
            </div>

            {/* Gallery */}
            {gallery.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Galeri Proyek</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {gallery.map((img, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                      <Image src={img} alt={`Gallery ${idx + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white dark:bg-[#1A1A1A] rounded-3xl p-8 border border-[var(--border-default)] shadow-sm">
                <h3 className="text-lg font-bold mb-6 border-b border-[var(--border-default)] pb-4">Informasi Proyek</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-text-muted mb-1">Kategori</p>
                    <p className="font-medium">{portfolio.category?.name}</p>
                  </div>
                  
                  {portfolio.client && (
                    <div>
                      <p className="text-sm text-text-muted mb-1">Client</p>
                      <p className="font-medium">{portfolio.client}</p>
                    </div>
                  )}

                  {portfolio.year && (
                    <div>
                      <p className="text-sm text-text-muted mb-1">Tahun</p>
                      <p className="font-medium">{portfolio.year}</p>
                    </div>
                  )}

                  {techStack.length > 0 && (
                    <div>
                      <p className="text-sm text-text-muted mb-2">Teknologi</p>
                      <div className="flex flex-wrap gap-2">
                        {techStack.map(tech => (
                          <Badge key={tech} variant="neutral">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 space-y-3 pt-6 border-t border-[var(--border-default)]">
                  {portfolio.websiteUrl && (
                    <a href={portfolio.websiteUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full flex items-center justify-center gap-2">
                        <span>Visit Site</span>
                        <ExternalLink size={16} />
                      </Button>
                    </a>
                  )}
                  {portfolio.githubUrl && (
                    <a href={portfolio.githubUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="ghost" className="w-full flex items-center justify-center gap-2 border border-[var(--border-default)]">
                        <Code size={16} />
                        <span>Source Code</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
