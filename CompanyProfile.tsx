import React from 'react';
import { Building2, MapPin, Users } from 'lucide-react';
import { User } from '../../types';

interface CompanyProfileProps {
  company: User;
}

export function CompanyProfile({ company }: CompanyProfileProps) {
  const profile = company.profile as any;

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
          <Building2 className="h-8 w-8 text-emerald-600" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-900">{profile.companyName}</h2>
          <p className="text-gray-600">{profile.industry}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-5 w-5 mr-2" />
          {profile.location}
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="h-5 w-5 mr-2" />
          {profile.size}
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