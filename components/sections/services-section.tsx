import Image from "next/image"
import Button from "../button"
import { Description, FancyTitle, Title } from "../text/texts"

export default function ServicesSection() {

  return (
    <div className="h-fit md:h-[90vh] p-5 mb-10 md:mx-20  font-sans flex flex-col justify-center items-centergap-6 text-center">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-10 md:mb-0 space-y-5">
        <div className="flex flex-col gap-5 w-full text-center justify-center ">
          <Title size="lg">Nossos <FancyTitle size="lg">serviços</FancyTitle></Title>
          <Description className="text-center md:text-start ">
            VittaCare oferece atendimento completo para sua saúde.
          </Description>
        </div>
        <Button href="/servicos">Veja mais serviços</Button>
      </div>
      <div className="grid md:grid-cols-3 md:text-start gap-20 w-full mt-5 md:mt-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-2 w-full justify-center items-center">
            <Image src={service.image} width={50} height={50} alt="" className=""></Image>
            <h1 className="font-normal text-xl md:text-2xl text-[#102e16] md:text-center">{service.service}</h1>
            <p className="text-sm text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const services = [
  {
    service: 'Consultas Médicas',
    description: 'Atendimento com médicos especializados para diagnóstico, tratamento e prevenção de doenças.',
    image: '/doctor.png'

  },
  {
    service: 'Exames Diagnósticos',
    description: 'Procedimentos para identificar doenças e acompanhar a saúde, como exames laboratoriais, de imagem e cardiológicos.',
    image: '/medical-report.png'

  },
  {
    service: 'Serviços Odontológicos',
    description: 'Cuidados com a saúde bucal, oferecendo desde limpezas e restaurações até cirurgias odontológicas avançadas.',
    image: '/tooth.png'
  },

]