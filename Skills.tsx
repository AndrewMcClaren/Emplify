import React from 'react';
import { Code } from 'lucide-react';

interface SkillsProps {
  skills: string[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <Code className="h-5 w-5 text-emerald-600 mr-2" />
        <h2 className="text-lg font-semibold text-gray-900">Habilidades</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      <button className="mt-4 text-emerald-600 hover:text-emerald-700 text-sm font-medium">
        + Agregar habilidad
      </button>
    </div>
  );
}