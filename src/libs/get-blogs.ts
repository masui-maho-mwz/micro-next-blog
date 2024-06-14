import { client } from '@/libs/client';

export const getBlogs = async () => {
  const { contents } = await client.get({
    // TODO: 相談してから最新の情報表示の対応を決めたい
    // customRequestInit: {
    //   next: {
    //     tags: ['blogs'],
    //   },
    // },
    endpoint: 'blogs',
  });

  return contents;
};
