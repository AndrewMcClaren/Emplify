import React from 'react';
import { useAuth } from '../context/AuthContext';
import { CandidateProfile } from '../components/candidate/CandidateProfile';
import { JobRecommendations } from '../components/candidate/JobRecommendations';
import { ApplicationHistory } from '../components/candidate/ApplicationHistory';
import { Skills } from '../components/candidate/Skills';

export function CandidatePortal() {
  const { user } = useAuth();

  if (!user || user.type !== 'candidate') {
    return (
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceso no autorizado</h2>
            <p className="text-gray-600">Por favor, inicia sesión como candidato para acceder a esta sección.</p>
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
            <CandidateProfile user={user} />
            <Skills skills={user.profile?.skills || []} />
          </div>
          <div className="lg:col-span-2">
            <JobRecommendations />
            <ApplicationHistory />
          </div>
        </div>
      </div>
    </div>
  );
}