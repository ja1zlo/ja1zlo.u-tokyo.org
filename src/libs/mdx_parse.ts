import { serialize } from "next-mdx-remote/serialize";
import { promises as fs } from "fs";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkBreaks from "remark-breaks";
import rehypeKatex from "rehype-katex";

async function parseMDX(file: string) {
  const content = await fs.readFile(file, { encoding: "utf-8" });
  const source = await serialize(content, {
    mdxOptions: {
      baseUrl: file,
      // prettier-ignore
      remarkPlugins: [
        remarkGfm,
        remarkMath,
        remarkBreaks,
      ],
      // prettier-ignore
      rehypePlugins: [
        rehypeKatex,
      ],
      format: file.split(".").at(-1) == "mdx" ? "mdx" : "md",
    },
    parseFrontmatter: true,
  });

  const fallbackTitle = (content.match(/^# (.+)$/m) ?? [null, null])[1];
  const title = (source.frontmatter?.title ?? fallbackTitle ?? "").trim();

  return {
    title,
    source,
  };
}

export default parseMDX;
