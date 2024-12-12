import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Toaster } from 'react-hot-toast';

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navbar />
      <Outlet />
    </div>
  );
}