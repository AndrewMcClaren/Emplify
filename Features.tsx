import React from 'react';
import { Sparkles, Target, Trophy, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6 text-emerald-600" />,
    title: 'Matching Inteligente',
    description: 'Algoritmo basado en IA que conecta el talento ideal con las mejores oportunidades.'
  },
  {
    icon: <Target className="h-6 w-6 text-emerald-600" />,
    title: 'Perfiles Destacados',
    description: 'Crea un perfil profesional que destaque tus habilidades y experiencia.'
  },
  {
    icon: <Trophy className="h-6 w-6 text-emerald-600" />,
    title: 'Empresas Top',
    description: 'Conecta con las mejores empresas de Colombia en búsqueda de talento.'
  },
  {
    icon: <Rocket className="h-6 w-6 text-emerald-600" />,
    title: 'Impulsa tu Carrera',
    description: 'Recursos y herramientas para potenciar tu desarrollo profesional.'
  }
];

export function Features() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Emplify?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestra plataforma ofrece herramientas innovadoras para conectar 
            el mejor talento con las mejores oportunidades laborales.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}