import React from 'react';
import { mockUsers } from '../../data/mockData';
import { User, Star } from 'lucide-react';

export function CandidateMatches() {
  const candidates = mockUsers.filter(user => user.type === 'candidate');

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Candidatos destacados</h2>
      <div className="space-y-4">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                  <p className="text-sm text-gray-600">{candidate.profile?.title}</p>
                </div>
              </div>
              <button className="text-emerald-600 hover:text-emerald-700">
                <Star className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3">
              <div className="flex flex-wrap gap-2">
                {candidate.profile?.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                Ver perfil completo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}