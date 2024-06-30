// TODO: 全てのプロパティを記載したけれど、使わないものもある。不要なデータは型にしなくて良い
// view-model, ui-model（フロントで使う型） との使い分け？？
// TODO: パスとビューモデルの命名を合わせる＋命名の中にメソッド（GETなど）も含める
// route.ts に渡すのはビューモデルとする

export type Blog = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export type Blogs = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};
