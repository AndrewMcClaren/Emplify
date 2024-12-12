import React from 'react';
import { mockJobs } from '../../data/mockData';
import { MapPin, Building2, Calendar } from 'lucide-react';

export function JobRecommendations() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Empleos recomendados</h2>
      <div className="space-y-6">
        {mockJobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 hover:border-emerald-500 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
                  <div className="flex items-center">
                    <Building2 className="h-4 w-4 mr-1" />
                    {job.company}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(job.postedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <span className="text-emerald-600 font-semibold">{job.salary}</span>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((req, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                    {req}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Aplicar ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}