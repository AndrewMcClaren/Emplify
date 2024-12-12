import React, { useState } from 'react';
import { BriefcaseIcon, Menu, X } from 'lucide-react';
import { LoginModal } from './LoginModal';
import { useAuth } from '../context/AuthContext';

export function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BriefcaseIcon className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Emplify</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-emerald-600">Para empresas</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">Para candidatos</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">Precios</a>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">Hola, {user.name}</span>
                  <button
                    onClick={() => logout()}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Iniciar sesión
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">
                Para empresas
              </a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">
                Para candidatos
              </a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-emerald-600">
                Precios
              </a>
              {user ? (
                <>
                  <span className="block px-3 py-2 text-gray-600">Hola, {user.name}</span>
                  <button
                    onClick={() => logout()}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-emerald-600"
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-emerald-600"
                >
                  Iniciar sesión
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}