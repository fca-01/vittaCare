
import Image from "next/image";
import { FancyTitle, Title } from "../text/texts";

export default function ReviewSection() {

  return (
    <div className="h-fit md:h-[50vh] p-5 mb-10 md:mx-20 ">
      <div className="flex justify-center">
        <Title size="lg">
          Avaliações dos nossos <FancyTitle size="lg">clientes</FancyTitle>
        </Title>
      </div>
      <div className="mt-10">
        <ReviewCard />
      </div>
    </div>
  )
}

function ReviewCard() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-4  gap-5">
      {clients.map((client, index) => (
        <div key={index} className="bg-[#c6d6b1] rounded-xl w-full h-fit flex flex-col gap-5 justify-start items-start p-3 md:p-5 font-sans">
          <div className="flex gap-2 items-center">
            <Image src={client.image} width={40} height={50} alt="" className="rounded-full"></Image>
            <h1 className="font-normal text-xl md:text-lg text-[#102e16]">{client.name}</h1>
          </div>
          <p className="text-sm text-start ">{client.review}</p>
        </div>
      ))
      }
    </div>
  )
}

const clients = [
  {
    name: 'Ana Maria',
    image: '/client1.png',
    review: 'Excelente atendimento, muito bem cuidado e atenção que você precisa, para os diferentes momentos da sua vida.'
  },
  {
    name: 'Yago',
    image: '/client2.png',
    review: 'Excelente atendimento, muito bem cuidado e atenção que você precisa, para os diferentes momentos da sua vida.'
  },
  {
    name: 'Rute',
    image: '/client3.png',
    review: 'Excelente atendimento, muito bem cuidado e atenção que você precisa, para os diferentes momentos da sua vida.'
  },
  {
    name: 'Felipe',
    image: '/client4.png',
    review: 'Excelente atendimento, muito bem cuidado e atenção que você precisa, para os diferentes momentos da sua vida.'
  }
]