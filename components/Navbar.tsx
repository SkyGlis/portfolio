'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onNavigate: (section: string) => void;
  active: string
}

export default function Navbar({ onNavigate, active }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate("hero")}
              className="text-xl font-semibold text-gray-800"
            >
              Daniel Santos
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => onNavigate("hero")}
                className={`${active === "hero" ? "bg-primary text-white border-1 hover:opacity-90" : "text-gray-700 hover:text-gray-900"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Início
              </button>
              <button
                onClick={() => onNavigate("about")}
                className={`${active === "about" ? "bg-primary text-white border-1 hover:opacity-90" : "text-gray-700 hover:text-gray-900"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Sobre mim
              </button>
              <button
                onClick={() => onNavigate("cv")}
                className={`${active === "cv" ? "bg-primary text-white border-1 hover:opacity-90" : "text-gray-700 hover:text-gray-900"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Currículo
              </button>
              <button
                onClick={() => onNavigate("skills")}
                className={`${active === "skills" ? "bg-primary text-white border-1 hover:opacity-90" : "text-gray-700 hover:text-gray-900"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Estudos / Experiência
              </button>
              <button
                onClick={() => onNavigate("projects")}
                className={`${active === "projects" ? "bg-primary text-white border-1 hover:opacity-90" : "text-gray-700 hover:text-gray-900"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Projetos
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => {
                onNavigate("hero");
                toggleMenu();
              }}
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Início
            </button>
            <button
              onClick={() => {
                onNavigate("about");
                toggleMenu();
              }}
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Sobre mim
            </button>
            <button
                onClick={() => onNavigate("cv")}
                className={`${active === "cv" ? "bg-primary text-white border-1 hover:opacity-90" : "text-gray-700 hover:text-gray-900"} px-3 py-2 rounded-md text-sm font-medium`}
              >
                Currículo
              </button>
            <button
              onClick={() => {
                onNavigate("skills");
                toggleMenu();
              }}
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Estudos / Experiência
            </button>
            <button
              onClick={() => {
                onNavigate("projects");
                toggleMenu();
              }}
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projetos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
