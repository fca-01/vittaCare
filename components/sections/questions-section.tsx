import { FancyTitle, Title } from "../text/texts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function QuestionsSection() {

  return (
    <div className="bg-[#102e16] h-fit mt-20 text-[#dae2cb] font-sans p-5  md:p-20 gap-10 flex flex-col md:flex-row justify-between">

      <div className="flex flex-col justify-center w-full md:w-[50vw]">
        <Title className="text-white">
          Perguntas <br /> <FancyTitle className="text-yellow-300">mais</FancyTitle> frequentes
        </Title>
      </div>
      <div className="md:w-[50vw]">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faq.map((faq, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger className="text-base md:text-lg font-bold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

const faq = [
  {
    "question": "Quais especialidades médicas a clínica oferece?",
    "answer": "Nossa clínica oferece diversas especialidades, incluindo cardiologia, dermatologia, pediatria, ginecologia, ortopedia e muito mais."
  },
  {
    "question": "Como agendar uma consulta?",
    "answer": "Você pode agendar sua consulta pelo nosso site, aplicativo ou entrando em contato diretamente pelo telefone ou WhatsApp."
  },
  {
    "question": "A clínica aceita planos de saúde?",
    "answer": "Sim, aceitamos diversos planos de saúde. Consulte a lista completa em nossa página de convênios."
  },
  {
    "question": "Qual é o horário de funcionamento?",
    "answer": "Estamos abertos de segunda a sexta, das 7h às 20h, e aos sábados, das 8h às 14h."
  },
  {
    "question": "Posso cancelar ou remarcar uma consulta?",
    "answer": "Sim, você pode cancelar ou remarcar sua consulta com até 24 horas de antecedência pelo nosso site ou telefone."
  },
  {
    "question": "A clínica oferece exames laboratoriais?",
    "answer": "Sim, realizamos diversos exames laboratoriais com resultados rápidos e seguros."
  },
  {
    "question": "É possível fazer atendimento por telemedicina?",
    "answer": "Sim, contamos com o serviço de telemedicina para consultas à distância com segurança e praticidade."
  }
]