import React from 'react';
import { TrendingUp, Users, Eye, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: <Eye className="h-5 w-5 text-emerald-600" />,
    label: 'Visualizaciones',
    value: '1,234',
    trend: '+12%',
  },
  {
    icon: <Users className="h-5 w-5 text-emerald-600" />,
    label: 'Aplicaciones',
    value: '56',
    trend: '+8%',
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
    label: 'Contrataciones',
    value: '3',
    trend: '+2',
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-emerald-600" />,
    label: 'Tasa de conversión',
    value: '5.4%',
    trend: '+1.2%',
  },
];

export function Analytics() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Analíticas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="text-sm text-emerald-600 font-medium">{stat.trend}</span>
            </div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}