import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Image from "next/image"

interface TimelineEntry {
  logo: string
  startDate: string
  endDate: string
  company: string
  position: string
}

const workEntries: TimelineEntry[] = [
  {
    logo: "/origami_logo.png",
    startDate: "Abr 2024",
    endDate: "Jul 2024",
    company: "Origami Hub",
    position: "Estágio Curricular"
  },
  {
    logo: "/inforlandia_logo.png",
    startDate: "Jan 2023",
    endDate: "Fev 2023",
    company: "Inforlândia S.A.",
    position: "Senior Software Developer"
  }
]

const studyEntries: TimelineEntry[] = [
  {
    logo: "/estga.jpg",
    startDate: "Set 2024",
    endDate: "Jul 2026",
    company: "CTESP em Programação de Sistemas de Informação",
    position: "Escola Superior de Tecnologia e Gestão de Águeda | Universidade de Aveiro"
  },
  {
    logo: "/aee.png",
    startDate: "Set 2021",
    endDate: "Jul 2024",
    company: "Curso Profissional de Gestão de Equipamentos Informáticos",
    position: "Escola Dr. Jaime Magalhães Lima"
  }
]

export default function Component() {
  return (
    <div className="max-w-7xl h-[600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Estudos e Experiência</h2>
      <div className="w-full max-w-3xl mx-auto p-4">
        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="work">Estudos</TabsTrigger>
            <TabsTrigger value="education">Experiência</TabsTrigger>
          </TabsList>
          <TabsContent value="work">
            <Card className="p-6 backdrop-blur-sm shadow-md">
              <div className="relative">
                <div className="absolute left-[23px] top-[0px] bottom-10 w-px bg-zinc-800" />
                <div className="space-y-8">
                  {studyEntries.map((entry, index) => (
                    <div key={index} className="relative flex gap-4">
                      <div className="relative">
                        <Image
                          src={entry.logo}
                          alt={`${entry.company} logo`}
                          width={48}
                          height={48}
                          className="rounded-full border border-zinc-800 bg-white"
                        />
                      </div>
                      <div className="flex flex-col flex-1 gap-1">
                        <div className="text-sm text-zinc-400">
                          {entry.startDate} - {entry.endDate}
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-800">
                          {entry.company}
                        </h3>
                        <p className="text-sm text-zinc-400">{entry.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="education">
          <Card className="p-6 backdrop-blur-sm shadow-md">
              <div className="relative">
                <div className="absolute left-[23px] top-[0px] bottom-10 w-px bg-zinc-800" />
                <div className="space-y-8">
                  {workEntries.map((entry, index) => (
                    <div key={index} className="relative flex gap-4">
                      <div className="relative">
                        <Image
                          src={entry.logo}
                          alt={`${entry.company} logo`}
                          width={48}
                          height={48}
                          className="rounded-full border border-zinc-800 bg-white"
                        />
                      </div>
                      <div className="flex flex-col flex-1 gap-1">
                        <div className="text-sm text-zinc-400">
                          {entry.startDate} - {entry.endDate}
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-800">
                          {entry.company}
                        </h3>
                        <p className="text-sm text-zinc-400">{entry.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}