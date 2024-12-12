import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

const applications = [
  {
    id: 1,
    job: 'Desarrollador Frontend React',
    company: 'Tech Colombia',
    date: '2024-03-15',
    status: 'pending',
  },
  {
    id: 2,
    job: 'Backend Developer Node.js',
    company: 'Innovación Digital',
    date: '2024-03-14',
    status: 'accepted',
  },
  {
    id: 3,
    job: 'Full Stack Developer',
    company: 'StartupCo',
    date: '2024-03-10',
    status: 'rejected',
  },
];

const statusConfig = {
  pending: {
    icon: <Clock className="h-5 w-5 text-yellow-500" />,
    text: 'En revisión',
    className: 'bg-yellow-100 text-yellow-800',
  },
  accepted: {
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    text: 'Aceptada',
    className: 'bg-green-100 text-green-800',
  },
  rejected: {
    icon: <XCircle className="h-5 w-5 text-red-500" />,
    text: 'No seleccionado',
    className: 'bg-red-100 text-red-800',
  },
};

export function ApplicationHistory() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Historial de aplicaciones</h2>
      <div className="space-y-4">
        {applications.map((application) => (
          <div key={application.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{application.job}</h3>
                <p className="text-sm text-gray-600">{application.company}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Aplicado el {new Date(application.date).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center">
                {statusConfig[application.status].icon}
                <span className={`ml-2 px-2 py-1 rounded-full text-sm ${statusConfig[application.status].className}`}>
                  {statusConfig[application.status].text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}