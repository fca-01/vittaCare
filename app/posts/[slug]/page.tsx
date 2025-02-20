import { Title } from "@/components/text/texts";
import { getPostBySlug, getAllPostSlugs } from "@/lib/markdown";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <div className="md:m-20 flex flex-col items-center justify-center gap-20">
      <Title>{post.metadata.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
