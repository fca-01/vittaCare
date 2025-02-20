
import { FancyTitle, Title } from "@/components/text/texts";
import { blogPosts } from "@/data/ blog";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full ">
      <main className="flex flex-col items-center justify-center h-[20vh] md:h-[30vh] w-full ">
        <Title size="lg">
          Blog <FancyTitle size="lg">fitness</FancyTitle> para exigentes </Title>
      </main>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-fit h-fit mb-20">
          {blogPosts.map((post, index) => (
            <Card key={index} tag={post.tag} title={post.title} date={post.date} author={post.author} link={post.link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Card({ title, date, author, tag, link }: { title: string, date: string, author: string, tag: string, link: string }) {
  return (
    <Link href={link} className="w-80 h-fit bg-[#f2f2f2] border rounded-2xl p-5 space-y-3 hover:bg-[#c9d1ba] hover:border hover:border-[#102e16] transition-all duration-300">
      <Image src={'/woman.webp'} alt="woman" width={500} height={500} className="rounded-lg" />
      <div className="border border-[#102e16] rounded-xl px-2.5 py-1.5 text-sm w-fit hover:bg-[#102e16] text-[#102e16] hover:text-white">
        <p className=" font-extralight">{tag}</p>
      </div>
      <h1 className="text-xl text-[#102e16]">{title}</h1>
      <div className="flex justify-between">
        <p className="text-sm">{author}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </Link>
  );
}