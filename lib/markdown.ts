import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm"; // Suporte para tabelas e listas de tarefas
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw"; // Permite processar HTML embutido no Markdown
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "content");

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm) // Suporte para tabelas e listas de tarefas
    .use(remarkRehype, { allowDangerousHtml: true }) // Converte Markdown para HTML
    .use(rehypeRaw) // Processa HTML embutido no Markdown
    .use(rehypeStringify) // Converte a árvore HTML para string
    .process(content);

  return { slug, metadata: data, content: processedContent.toString() };
}

export function getAllPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}
