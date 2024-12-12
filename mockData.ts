import { User, Job } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'juan@example.com',
    password: '123456',
    name: 'Juan Pérez',
    type: 'candidate',
    profile: {
      title: 'Desarrollador Full Stack',
      skills: ['React', 'Node.js', 'TypeScript'],
      experience: '5 años',
      education: 'Ingeniería en Sistemas'
    }
  },
  {
    id: '2',
    email: 'empresa@tech.com',
    password: '123456',
    name: 'Tech Colombia',
    type: 'company',
    profile: {
      companyName: 'Tech Colombia',
      industry: 'Tecnología',
      size: '50-200 empleados',
      location: 'Bogotá'
    }
  }
];

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Desarrollador Frontend React',
    company: 'Tech Colombia',
    location: 'Bogotá',
    description: 'Buscamos un desarrollador Frontend con experiencia en React...',
    requirements: ['React', 'TypeScript', '3+ años de experiencia'],
    salary: '$4.000.000 - $6.000.000',
    type: 'Tiempo completo',
    postedDate: '2024-03-15'
  },
  {
    id: '2',
    title: 'Backend Developer Node.js',
    company: 'Innovación Digital',
    location: 'Medellín',
    description: 'Únete a nuestro equipo de desarrollo backend...',
    requirements: ['Node.js', 'MongoDB', 'AWS'],
    salary: '$5.000.000 - $7.000.000',
    type: 'Tiempo completo',
    postedDate: '2024-03-14'
  }
];