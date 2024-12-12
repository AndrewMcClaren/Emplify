import React from 'react';
import { User as UserIcon, Briefcase, GraduationCap } from 'lucide-react';
import { User } from '../../types';

interface CandidateProfileProps {
  user: User;
}

export function CandidateProfile({ user }: CandidateProfileProps) {
  const profile = user.profile as any;

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
          <UserIcon className="h-8 w-8 text-emerald-600" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-gray-600">{profile.title}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start">
          <Briefcase className="h-5 w-5 text-emerald-600 mt-1 mr-3" />
          <div>
            <h3 className="font-semibold text-gray-900">Experiencia</h3>
            <p className="text-gray-600">{profile.experience}</p>
          </div>
        </div>
        <div className="flex items-start">
          <GraduationCap className="h-5 w-5 text-emerald-600 mt-1 mr-3" />
          <div>
            <h3 className="font-semibold text-gray-900">Educación</h3>
            <p className="text-gray-600">{profile.education}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
          Editar perfil
        </button>
      </div>
    </div>
  );
}