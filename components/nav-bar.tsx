import Link from "next/link";
import Logo from "./logo";
import { SideBar } from "./side-bar";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center md:grid md:grid-cols-3  sticky top-0 bg-[#dae2cb] font-sans py-3 px-10 w-full">
      <Link href={'/'} className="font-bold font-display text-xl text-[#102e16]">
        <Logo />
      </Link>

      <div className="hidden md:flex items-center justify-center gap-10 px-20 ">
        <Link href={'/planos'} className="text-md text-[#102e16]">Planos</Link>
        <Link href={'/servicos'} className="text-md text-[#102e16]">Serviços</Link>
        <Link href={'/blog'} className="text-md text-[#102e16]">Blog</Link>
      </div>
      <div className="md:hidden">
        <SideBar >
          <div className="flex flex-col items-center justify-center gap-10 px-20 ">
            <Link href={'/planos'} className="text-md text-[#102e16]">Planos</Link>
            <Link href={'/servicos'} className="text-md text-[#102e16]">Serviços</Link>
            <Link href={'/blog'} className="text-md text-[#102e16]">Blog</Link>
          </div>
        </SideBar>
      </div>
    </div>
  );

}