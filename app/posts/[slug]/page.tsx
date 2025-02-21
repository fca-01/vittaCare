import { Title } from "@/components/text/texts";
import { getPostBySlug, getAllPostSlugs } from "@/lib/markdown";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>
}
  ;

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug((await params).slug);
  if (!post) return notFound();

  return (
    <div className="p-5 md:m-20 flex items-start justify-between space-y-10 gap-10">
      <div className="w-full md:w-[60%] space-y-10 gap-10">
        <Title className="font-bold">{post.metadata.title}</Title>
        <Image src={post.metadata.image} alt={post.metadata.title} width={500} height={500} className="rounded-lg" />
        <div dangerouslySetInnerHTML={{ __html: post.content }} className="space-y-5 font-sans w-full text-base md:text-lg " />
      </div>
    </div>
  );
}
