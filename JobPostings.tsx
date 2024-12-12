import React from 'react';
import { Link } from 'react-router-dom';
import { mockJobs } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export function JobPostings() {
  const { user } = useAuth();
  const companyJobs = mockJobs.filter(job => job.company === user?.profile?.companyName);

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Vacantes publicadas</h2>
        <Link
          to="/post-job"
          className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nueva vacante
        </Link>
      </div>

      <div className="space-y-4">
        {companyJobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Publicado el {new Date(job.postedDate).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-600 hover:text-emerald-600">
                  <Edit2 className="h-4 w-4" />
                </button>
                <button className="text-gray-600 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-sm bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                {job.type}
              </span>
              <span className="text-sm text-gray-600 ml-4">{job.salary}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}