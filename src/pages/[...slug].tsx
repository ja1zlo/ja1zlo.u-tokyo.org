import React from "react";
import Title from "components/title";
import type { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import MDXRender from "libs/mdx_render";

import parseMDX from "libs/mdx_parse";
import { listPages, findPage } from "libs/mdx_serve";

interface Props {
  title: string;
  source: MDXRemoteSerializeResult;
}

const MarkdownPage: React.FC<Props> = (props) => {
  return (
    <article>
      <Title>{props.title}</Title>
      <MDXRender {...props.source} />
    </article>
  );
};

export default MarkdownPage;

const basePath = "./src/pages";

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug ?? [];
  if (!Array.isArray(slug)) throw new Error();
  const file = await findPage(basePath, slug.join("/"));
  const { title, source } = await parseMDX(file);

  return {
    props: { title, source },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await listPages(basePath))
      .filter((p) => !p.path.startsWith("posts/"))
      .map((p) => ({
        params: { slug: p.path.split("/") },
      })),
    fallback: false,
  };
};
