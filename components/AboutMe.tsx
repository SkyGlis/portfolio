import Image from 'next/image'

export default function AboutMe() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Sobre mim</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
            Olá! Sou um estudante de Programação da ESTGA, em Aveiro, com um enorme interesse por tecnologia e desenvolvimento de software. Tenho 18 anos e estou a explorar o mundo da programação, sempre à procura de aprender novas linguagens e aprimorar as minhas habilidades.
            </p>
            <p className="text-lg text-gray-700">
            Nos meus tempos livres, gosto de ouvir música, treinar e conviver. Criar projetos de programação e resolver problemas são o que me motiva, pois acredito que a tecnologia tem o poder de moldar o futuro.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/photo.jpg"
                alt="Daniel Santos"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}