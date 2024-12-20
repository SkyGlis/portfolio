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
            Olá! Sou estudante de Programação na ESTGA - Universidade de Aveiro, com um enorme interesse por tecnologia e desenvolvimento de software. Tenho 18 anos e estou a explorar o mundo da programação, sempre à procura de aprender novas linguagens e desenvolver as minhas competências.
            </p>
            <p className="text-lg text-gray-700">
            Desde cedo, aos 11 anos, que iniciei a minha jornada na programação, aprendendo de forma autónoma e desenvolvendo uma paixão pela área. Considero-me uma pessoa determinada e persistente na resolução de problemas, com a capacidade de me adaptar facilmente a diferentes projetos e tecnologias. Estas características permitem-me acrescentar valor às empresas.
            </p>
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