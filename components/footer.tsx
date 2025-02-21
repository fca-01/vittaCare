
import { SiX, SiInstagram, SiFacebook } from '@icons-pack/react-simple-icons';
import Logo from "./logo";
import { services } from "./sections/services-section";
import { Description, Title } from "./text/texts";
import Link from "next/link";


export default function Footer() {

  return (
    <footer className="flex flex-col md:flex-row justify-center items-center md:items-start w-full h-full p-5 bg-[#c6d6b1]">

      <div className="w-fit md:w-full h-full flex flex-col items-start justify-start mb-5 md:p-5 ">
        <Logo />
        <Description width="sm" className="hidden md:flex">Cuidado e atenção que você precisa, para os diferentes momentos da sua vida.</Description>
      </div>

      <div className="flex items-center justify-evenly w-full h-full gap-0">
        <ServicesAndContacts title="Serviços">
          {services.map((service, index) => (
            <div key={index} className=" w-fit h-fit flex flex-col justify-start font-sans">
              <h1 className="text-sm md:text-base text-start text-[#102e16]">{service.service}</h1>
            </div>
          ))}
        </ServicesAndContacts>

        <ServicesAndContacts title="Contato">
          <Link href={'/'} className="flex items-center gap-2">
            <SiInstagram className="w-5 h-5" />
            <p className="text-center text-sm text-[#102e16]">Instagram</p>
          </Link>
          <Link href={'/'} className="flex items-center gap-2">
            <SiFacebook className="w-5 h-5" />
            <p className="text-center text-sm text-[#102e16]">Facebook</p>
          </Link>
          <Link href={'/'} className="flex items-center gap-2">
            <SiX className="w-5 h-5" />
            <p className="text-center text-sm text-[#102e16]">Twitter</p>
          </Link>
        </ServicesAndContacts>

      </div>
    </footer>
  )
}

function ServicesAndContacts({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="flex flex-col justify-start items-start w-fit h-64">
      <div className="flex flex-col justify-start items-start gap-4 mt-3 font-sans">
        <Title size="sm" className="font-bold">{title}</Title>
        {children}
      </div>
    </div>
  )
}