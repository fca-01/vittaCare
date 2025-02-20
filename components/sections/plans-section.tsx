import { Check } from "lucide-react";
import Button from "../button";
import { FancyTitle, Title } from "../text/texts";
import { cn } from "@/lib/utils";


export default function PlansSection() {

  return (
    <div className="mx-5 lg:mx-20 h-fit mb-5 md:mb-20">
      <div className="flex flex-col items-center">
        <Title as={'h1'} size="lg">Nossos <FancyTitle size="lg">planos</FancyTitle></Title>
        {/* <Description>
          If youre looking to supplement your current fitness routine with small group training or just want to join a few classes a month then take a look at our class pass options below.
        </Description> */}
      </div>
      <div className="grid md:grid-cols-3 md:text-start gap-5 md:gap-7 lg:gap-14 w-full mt-5 md:mt-16">
        {plans.map((plan, index) => (
          <div key={index} className="flex flex-col gap-2 w-full justify-center items-center">
            <PlanCard plan={plan.type} price={plan.price} benefits={plan.benefits} special={plan.special} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function PlanCard({ plan, className = '', price, benefits, special }: { plan: string, className?: string, price: number, benefits: string[], special: boolean }) {

  return (
    <div className={cn(`flex flex-col w-full justify-center items-center rounded-3xl space-y-2 p-2.5 md:p-5 font-sans ${className}`, special ? 'bg-[#102e16] text-white' : 'bg-white')}>
      <div className={`flex flex-col w-full h-[40%] justify-center items-center   rounded-3xl space-y-2 p-5 font-sans ${className}`}>
        <h1 className="font-normal text-xl md:text-xl" > {plan}</h1 >
        <span className="text-5xl ">R$ {price}</span>
        <p>por mês</p>
      </div>
      <Button className={cn(special && "bg-white text-black")}>Escolher plano</Button>
      <div className="space-y-2 md:space-y-6 py-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Check />
            <p key={index} className="text-md text-center text-nowrap tracking-tighter"> {benefit}</p>
          </div>
        ))}
      </div>
    </div >
  )
}

const plans = [
  {
    "type": "Individual",
    "price": 350.00,
    "benefits": [
      "Atendimento nacional",
      "Consultas com especialistas",
      "Exames laboratoriais inclusos",
      "Sem coparticipação"
    ],
    "special": false
  },
  {
    "type": "Familiar",
    "price": 850.00,
    "benefits": [
      "Cobertura para até 4 dependentes",
      "Acompanhamento pediátrico",
      "Descontos em farmácias",
      "Emergência 24 horas"
    ],
    "special": true
  },
  {
    "type": "Empresarial",
    "price": 1500.00,
    "benefits": [
      "Cobertura para funcionários e dependentes",
      "Check-up anual completo",
      "Programa de saúde ocupacional",
      "Atendimento exclusivo para empresas"
    ],
    "special": false
  }

]