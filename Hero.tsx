import React from 'react';
import { Search, Building2, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-emerald-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Conectando talento con oportunidades en{' '}
            <span className="text-emerald-600">Colombia</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Encuentra tu próximo trabajo ideal o el candidato perfecto. 
            Plataforma gratuita para candidatos, soluciones premium para empresas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center">
              <Users className="mr-2 h-5 w-5" />
              Buscar empleo
            </button>
            <button className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center">
              <Building2 className="mr-2 h-5 w-5" />
              Publicar vacante
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Cargo, habilidad o empresa"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  />
                </div>
              </div>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}