import React from 'react';
import { Users, Building2, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-6 w-6 text-emerald-600" />,
    number: "50K+",
    label: "Candidatos activos"
  },
  {
    icon: <Building2 className="h-6 w-6 text-emerald-600" />,
    number: "1000+",
    label: "Empresas registradas"
  },
  {
    icon: <Briefcase className="h-6 w-6 text-emerald-600" />,
    number: "5K+",
    label: "Ofertas laborales"
  }
];

export function Stats() {
  return (
    <div className="bg-emerald-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-800 rounded-lg mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-emerald-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}