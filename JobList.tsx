import React from 'react';
import { mockJobs } from '../data/mockData';
import { MapPin, Building2, Calendar } from 'lucide-react';

export function JobList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Ofertas laborales destacadas</h2>
      <div className="grid gap-6">
        {mockJobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <div className="flex items-center gap-4 mt-2 text-gray-600">
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
            <p className="mt-4 text-gray-600">{job.description}</p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Requisitos:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Aplicar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}