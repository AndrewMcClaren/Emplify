import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Stats } from '../components/Stats';
import { JobList } from '../components/JobList';

export function Home() {
  return (
    <main>
      <Hero />
      <JobList />
      <Features />
      <Stats />
    </main>
  );
}