import Image from "next/image";

export default function Card() {
  return (
    <div className="w-80 h-fit bg-[#f2f2f2] border rounded-2xl p-5 space-y-3 hover:bg-[#c9d1ba] hover:border hover:border-[#102e16] transition-all duration-300">
      <Image src={'/woman.webp'} alt="woman" width={500} height={500} className="rounded-lg" />
      <div className="border border-[#102e16] rounded-xl px-2.5 py-1.5 text-sm w-fit hover:bg-[#102e16] text-[#102e16] hover:text-white">
        <p className=" font-extralight">Yoga</p>
      </div>
      <h1 className="text-xl text-[#102e16]">Full-Body Strength Training: Week Program</h1>
      <p className="text-sm text-gray-500">17 de Fevereiro, 2025</p>
    </div>
  );
}