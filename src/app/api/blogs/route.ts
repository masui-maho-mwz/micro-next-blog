import { createClient } from 'microcms-js-sdk';
import { NextResponse } from 'next/server';

const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
});

export async function GET() {
  try {
    const { contents } = await client.get({
      // TODO: 相談してから最新の情報表示の対応を決めたい
      // customRequestInit: {
      //   next: {
      //     tags: ['blogs'],
      //   },
      // },
      endpoint: 'blogs',
    });

    return NextResponse.json({ contents }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch blogs' }, { status: 500 });
  }
}
