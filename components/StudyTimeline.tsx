import { GraduationCap, BriefcaseBusiness } from 'lucide-react'

type StudyEvent = {
  type: string
  year: string
  title: string
  institution: string
  description: string
}

const studyEvents: StudyEvent[] = [
  {
    type: 'school',
    year: '2024',
    title: 'Curso Profissional de Gestão de Equipamentos Informáticos',
    institution: 'Escola Secundária Jaime Magalhães Lima',
    description: ''
  },
  {
    type: 'job',
    year: '2024',
    title: 'Origami Hub',
    institution: 'Estagiário Aluno',
    description: ''
  },
  {
    type: 'job',
    year: '2023',
    title: 'Inforlândia SA',
    institution: 'Estagiário Aluno',
    description: ''
  }
]

export default function StudyTimeline() {
  return (
    <section className="bg-gray-50 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Estudos / Experiência </h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2 z-0"></div>
          
          {studyEvents.map((event, index) => (
            <div key={index} className="mb-10 flex flex-col items-center relative">
              <div className="absolute -top-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-xl z-20">
                {event.type == "school" &&
                <GraduationCap className="w-6 h-6" /> ||
                <BriefcaseBusiness className="w-6 h-6" />
                }
              </div>
              
              <div className="w-full max-w-sm bg-white rounded-lg shadow-xl mt-10 p-6 z-10 mt-8">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-gray-800 text-lg">{event.title}</h3>
                  <span className="text-sm font-semibold text-primary">{event.year}</span>
                </div>
                <p className="text-base mb-2">{event.institution}</p>
                <p className="text-sm text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}