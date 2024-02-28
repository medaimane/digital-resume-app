import HeroSection from '@/components/sections/HeroSection';
import SocialsSection from '@/components/sections/SocialsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import TechStackSection from '@/components/sections/TechStackSection';
import WorkHistorySection from '@/components/sections/WorkHistorySection';
import ProjectsSection from '@/components/sections/ProjectsSection';

export default function Page() {
  return (
    <div id="container--main">
      <HeroSection />

      <SocialsSection />

      <SkillsSection />

      <TechStackSection />

      <WorkHistorySection />

      <ProjectsSection />
    </div>
  );
}
