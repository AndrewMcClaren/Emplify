import React from 'react';
import { useAuth } from '../context/AuthContext';
import { CompanyProfile } from '../components/company/CompanyProfile';
import { JobPostings } from '../components/company/JobPostings';
import { CandidateMatches } from '../components/company/CandidateMatches';
import { Analytics } from '../components/company/Analytics';

export function CompanyPortal() {
  const { user } = useAuth();

  if (!user || user.type !== 'company') {
    return (
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceso no autorizado</h2>
            <p className="text-gray-600">Por favor, inicia sesión como empresa para acceder a esta sección.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <CompanyProfile company={user} />
          </div>
          <div className="lg:col-span-2">
            <Analytics />
            <JobPostings />
            <CandidateMatches />
          </div>
        </div>
      </div>
    </div>
  );
}