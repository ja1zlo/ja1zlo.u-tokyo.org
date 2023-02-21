import glob from "fast-glob";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const extensions = ["md", "mdx"];

export async function listPages(
  basePath: string,
  withContent?: false
): Promise<{ path: string }[]>;
export async function listPages(
  basePath: string,
  withContent: true
): Promise<({ path: string } & matter.GrayMatterFile<string>)[]>;

export async function listPages(basePath: string, withContent?: boolean) {
  const paths = (
    await glob(`./**/*.(${extensions.join("|")})`, {
      dot: true,
      cwd: basePath,
      onlyFiles: true,
    })
  )
    .filter((p) => !p.startsWith("index."))
    .map((p) => {
      let entry = { path: p.replace(/\.\w+$/, "").replace(/\/index$/, "") };
      if (withContent) {
        entry = {
          ...matter.read(path.join(basePath, p)),
          ...entry,
        };
      }
      return entry;
    });

  return paths;
}

export function findPage(basePath: string, path: string): Promise<string> {
  return Promise.any(
    ["", "/index"].flatMap((suffix) =>
      extensions.map(
        (e) =>
          new Promise<string>((resolve, reject) => {
            const p = `${basePath}/${path}${suffix}.${e}`;
            fs.stat(p)
              .then((s) => {
                s.isFile() ? resolve(p) : reject();
              })
              .catch(reject);
          })
      )
    )
  );
}
