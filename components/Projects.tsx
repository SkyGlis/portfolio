import { Github, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  profissional?: string
  type?: string
  tech?: string[]
  title: string
  description: string
  githubUrl?: string
  liveUrl: string
}

export default function Projects({ projects = [] }: { projects?: Project[] }) {
  // Sample projects data if none provided
  const sampleProjects: Project[] = [
    /*
    {
      profissional: "Origami Hub",
      type: "WebApp",
      tech: ["Next.js", "Tailwind CSS", "SQLite"],
      title: "Calculadora de Pegada CO2",
      description: "Aplicação que permite aos utilizadores calcular a sua pegada de carbono anual. Fui responsável pelo desenvolvimento do backend e pela implementação da base de dados.",
      liveUrl: "https://ecommerce-example.com"
    },
    */
    {
      profissional: "Origami Hub",
      type: "WebApp",
      title: "Calculadora Echo Unify",
      tech: ["PHP", "JQuery", "MySQL"],
      description: "Calculadora para Hardware para sistemas de video-vigilância.\n Contruibuí np desenvolvimento do backend e gestão das APIs.",
      liveUrl: "https://echounify.com/calculator/"
    },
    {
      profissional: "Origami Hub",
      tech: ["PHP", "JQuery", "CSS", "MySQL"],
      type: "Website",
      title: "Website Origami",
      description: "Website empresarial da empresa Origami Hub. Fui responsável pelo design do site, pela estruturação e organização do conteúdo, bem como pelo desenvolvimento do backend.",
      liveUrl: "https://origamihub.tech/site/index.php"
    },
    {
      title: "Portfólio Pessoal",
      tech: ["Next.js", "Tailwind CSS"],
      type: "Website",
      description: "Portfólio pessoal, no qual usei a maior parte das tecnologias que conheço, de forma a evoluir no meu conhecimento na programação.",
      githubUrl: "https://github.com/SkyGlis/portfolio",
      liveUrl: "https://daniel-santos.vercel.app"
    }
  ]

  const displayProjects = projects.length > 0 ? projects : sampleProjects

  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Os meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="p-6">
            <div className="flex justify-between mb-2">
              <p className="text-sm font-base">{project.profissional && `Projeto Profissional` || "Projeto Pessoal"}</p>
              {project.type && <Badge variant="outline">{project.type}</Badge>}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className='-mt-1 mb-2'>
              {project.tech && project.tech.map((technology, index) => ( <Badge key={index} className="mr-1">{technology}</Badge> ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between content-end">
                {project.githubUrl && 
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="w-4 h-4 mr-2" />
                    Github
                  </a>
                </Button>
                }
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}