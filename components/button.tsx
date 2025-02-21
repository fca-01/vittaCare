import Link from "next/link";



export default function Button({ children, className = '', href }: { children: string, className?: string, href?: string }) {
  return (
    <Link href={href as string} className={`bg-[#102e16] text-[#e9eedf] text-center w-fit px-5 h-fit sm:px-5 py-2 sm:py-3 rounded-3xl font-bold font-sans text-nowrap ${className}`}>
      {children}
    </Link>
  );
}