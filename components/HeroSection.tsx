'use client'

import Image from 'next/image'
import { ReactTyped } from 'react-typed'

interface HeroProps {
  handle: (section: string) => void;
}

export default function Hero({ handle }: HeroProps) {
  return (
    <div className="bg-white h-[800px]">
      <div className="max-w-7xl h-[600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Olá, eu sou
            </h1>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r bg-gradient-to-r from-red-400 to-red-900 inline-block text-transparent bg-clip-text">
                <ReactTyped
                  strings={['o Daniel', 'um Programador', 'Desenvolvedor Web']}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Um jovem programador em formação com uma paixão por transformar ideias em projetos digitais.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <a
                onClick={() => handle("cv")}
                className="bg-black text-white px-6 text-center py-3 rounded-md text-lg font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                Ver Currículo
              </a>
              <button
                onClick={() => handle("about")}
                className="bg-black text-white px-6 py-3 text-center rounded-md text-lg font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                Saber Mais
              </button>
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
    </div>
  )
}