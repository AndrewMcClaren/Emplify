export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  type: 'candidate' | 'company';
  profile?: CandidateProfile | CompanyProfile;
}

export interface CandidateProfile {
  title: string;
  skills: string[];
  experience: string;
  education: string;
}

export interface CompanyProfile {
  companyName: string;
  industry: string;
  size: string;
  location: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string;
  type: string;
  postedDate: string;
}