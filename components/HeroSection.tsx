'use client'

import Image from 'next/image'
import { ReactTyped } from 'react-typed'

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl h-[600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Olá, eu sou {' '}
              <span className="text-primary">
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
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                Saber Mais
              </a>
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