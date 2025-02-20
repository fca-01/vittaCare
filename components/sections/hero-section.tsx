import Image from "next/image"
import { Description, FancyTitle, Title } from "../text/texts"
import Button from "../button"


export default function HeroSection() {

  return (
    <main className="p-5 mb-10  flex flex-col sm:flex-row items-center md:justify-evenly gap-5  h-fit  w-full">

      <div className="flex flex-col gap-4 text-center sm:text-start w-full sm:w-fit h-[35vh] justify-center">
        <Title size="lg">
          Planos de saúde para <br></br> <FancyTitle size="lg">você</FancyTitle> e sua <FancyTitle size='lg'>família</FancyTitle>
        </Title>
        <Description width="md" >
          Cuidado e atenção que você precisa, para os diferentes momentos da sua vida.
        </Description>
        <Button>Começe agora!</Button>
      </div>

      <Image src={'/family.jpg'} width={400} height={400} alt="Familia" className="rounded-xl "></Image>
    </main>
  )
}