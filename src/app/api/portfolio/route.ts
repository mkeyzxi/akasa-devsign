import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const slug = searchParams.get('slug');

    if (slug) {
      const portfolio = await prisma.portfolio.findFirst({
        where: { slug, status: 'PUBLISHED' },
        include: { category: true }
      });
      if (!portfolio) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json(portfolio);
    }

    const where: any = { status: 'PUBLISHED' };
    
    if (category && category !== 'all') {
      where.category = { slug: category };
    }

    const portfolios = await prisma.portfolio.findMany({
      where,
      orderBy: { publishedAt: 'desc' },
      include: { category: true }
    });
    
    return NextResponse.json(portfolios);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch portfolios' }, { status: 500 });
  }
}
