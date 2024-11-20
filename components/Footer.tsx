import { Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} Daniel Santos. Todos os direitos reservados.</p>
          </div>
          <nav className="flex space-x-4">
            <a href="https://www.linkedin.com/in/daniel-santos15/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/SkyGlis" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}