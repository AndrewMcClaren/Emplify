import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { CandidatePortal } from '../pages/CandidatePortal';
import { CompanyPortal } from '../pages/CompanyPortal';
import { PostJob } from '../pages/PostJob';
import { AIChat } from '../pages/AIChat';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'candidate', element: <CandidatePortal /> },
      { path: 'company', element: <CompanyPortal /> },
      { path: 'post-job', element: <PostJob /> },
      { path: 'ai-chat', element: <AIChat /> },
    ],
  },
]);