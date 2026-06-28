import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import slugify from 'slugify';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !(session.user as any).isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const portfolios = await prisma.portfolio.findMany({
      orderBy: { createdAt: 'desc' },
      include: { category: true }
    });
    
    return NextResponse.json(portfolios);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch portfolios' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !(session.user as any).isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { 
      title, 
      client, 
      year, 
      description, 
      content, 
      thumbnail, 
      gallery, 
      techStack, 
      websiteUrl, 
      githubUrl, 
      status, 
      featured, 
      categoryId 
    } = body;

    if (!title || !description || !content || !thumbnail || !categoryId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let slug = body.slug;
    if (!slug) {
      slug = slugify(title, { lower: true, strict: true });
    }

    const newPortfolio = await prisma.portfolio.create({
      data: {
        title,
        slug,
        client,
        year: year ? parseInt(year) : null,
        description,
        content,
        thumbnail,
        gallery: gallery ? JSON.stringify(gallery) : null,
        techStack: techStack ? JSON.stringify(techStack) : null,
        websiteUrl,
        githubUrl,
        status: status || 'DRAFT',
        featured: featured || false,
        categoryId,
        publishedAt: status === 'PUBLISHED' ? new Date() : null,
      }
    });

    return NextResponse.json(newPortfolio, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Portfolio with this slug already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create portfolio', details: error.message }, { status: 500 });
  }
}
