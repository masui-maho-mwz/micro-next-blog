// TODO: 全てのプロパティを記載したけれど、使わないものもある。 view-model, ui-model との使い分け？？

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
