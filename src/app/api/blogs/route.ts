import { createClient } from 'microcms-js-sdk';
import { NextResponse } from 'next/server';

const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    try {
      const blog = await client.get({
        customRequestInit: {
          cache: 'no-store',
        },
        endpoint: `blogs`,
        contentId: id,
      });
      return NextResponse.json(blog, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to fetch blog' }, { status: 500 });
    }
  } else {
    try {
      const { contents } = await client.get({
        customRequestInit: {
          cache: 'no-store',
        },
        endpoint: 'blogs',
      });
      // TODO: エラーハンドリングドキュメント見る
      // https://document.microcms.io/content-api/api-error-response
      return NextResponse.json({ contents }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to fetch blogs' }, { status: 500 });
    }
  }
}
