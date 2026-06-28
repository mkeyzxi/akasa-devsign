import PortfolioForm from "@/components/admin/PortfolioForm";

export default async function EditPortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Edit Portofolio</h1>
      <PortfolioForm portfolioId={id} />
    </div>
  );
}
