import { NextResponse } from 'next/server';
import { getAllPosts, getCategories } from '@/lib/blog';

export async function GET() {
  try {
    const posts = getAllPosts();
    const categories = getCategories();

    return NextResponse.json({
      posts,
      categories,
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

