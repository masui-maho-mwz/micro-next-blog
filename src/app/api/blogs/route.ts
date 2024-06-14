import { createClient } from 'microcms-js-sdk';
import { NextResponse } from 'next/server';

const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
});

export async function GET() {
  try {
    const { contents } = await client.get({
      customRequestInit: {
        cache: 'no-store',
      },
      endpoint: 'blogs',
    });
    // TODO: エラーハンドリングドキュメント見る
    return NextResponse.json({ contents }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch blogs' }, { status: 500 });
  }
}

// TODO: 1件取得してくる関数を追加する
