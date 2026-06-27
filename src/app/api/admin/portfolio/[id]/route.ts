import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import slugify from 'slugify';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !(session.user as any).isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const portfolio = await prisma.portfolio.findUnique({
      where: { id },
      include: { category: true }
    });

    if (!portfolio) {
      return NextResponse.json({ error: 'Portfolio not found' }, { status: 404 });
    }

    return NextResponse.json(portfolio);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !(session.user as any).isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    
    // Create update payload based on provided fields
    const data: any = {};
    const fields = ['title', 'client', 'description', 'content', 'thumbnail', 'websiteUrl', 'githubUrl', 'status', 'featured', 'categoryId'];
    
    for (const field of fields) {
      if (body[field] !== undefined) {
        data[field] = body[field];
      }
    }

    if (body.year !== undefined) {
      data.year = body.year ? parseInt(body.year) : null;
    }

    if (body.slug) {
      data.slug = body.slug;
    } else if (body.title) {
      data.slug = slugify(body.title, { lower: true, strict: true });
    }

    if (body.gallery !== undefined) {
      data.gallery = body.gallery ? JSON.stringify(body.gallery) : null;
    }

    if (body.techStack !== undefined) {
      data.techStack = body.techStack ? JSON.stringify(body.techStack) : null;
    }

    if (body.status === 'PUBLISHED') {
      data.publishedAt = new Date();
    }

    const updatedPortfolio = await prisma.portfolio.update({
      where: { id },
      data
    });

    return NextResponse.json(updatedPortfolio);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Portfolio with this slug already exists' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to update portfolio' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !(session.user as any).isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await prisma.portfolio.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete portfolio' }, { status: 500 });
  }
}
