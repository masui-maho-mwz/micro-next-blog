import { client } from '@/lib/microcms-client';
import type { Blog, Blogs } from '@/lib/types';
import { NextResponse } from 'next/server';

const fetchBlogById = async (id: string): Promise<Blog> => {
  try {
    return await client.get({
      customRequestInit: { cache: 'no-store' },
      endpoint: 'blogs',
      contentId: id,
    });
  } catch (error) {
    throw new Error('Failed to fetch blog');
  }
};

const fetchAllBlogs = async (): Promise<Blogs> => {
  try {
    return await client.get({
      customRequestInit: { cache: 'no-store' },
      endpoint: 'blogs',
    });
  } catch (error) {
    throw new Error('Failed to fetch blogs');
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (id) {
      const blog = await fetchBlogById(id);
      return NextResponse.json(blog, { status: 200 });
    } else {
      const { contents } = await fetchAllBlogs();
      return NextResponse.json({ contents }, { status: 200 });
    }
  } catch (error) {
    //     // TODO: エラーハンドリングドキュメント見る
    //     // https://document.microcms.io/content-api/api-error-response
    return NextResponse.json({ message: 'Failed to fetch blogs' }, { status: 500 });
  }
}
