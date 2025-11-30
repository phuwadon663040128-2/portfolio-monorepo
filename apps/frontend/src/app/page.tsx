'use client';

// Import Component จาก Libs (ของส่วนกลาง)
import { Navbar} from '@portfolio-monorepo/ui';
// Import Component จากโฟลเดอร์ components (ที่เราเพิ่งสร้างแยกออกมา)
import ScrollReveal from '../components/ScrollReveal';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { SkillsSection } from '../components/SkillsSection';
import { ContactSection } from '../components/ContactSection';

export default function Index() {
  return (
    <main>
      {/* 1. Navbar: อยู่บนสุดเสมอ */}
      <Navbar />
      
      {/* 2. เนื้อหา: เรียงตามลำดับไหลลงมา */}
      <HeroSection />

    <ScrollReveal>
      <AboutSection />
    </ScrollReveal>
      
    <ScrollReveal>
      <PortfolioSection />
    </ScrollReveal>

    <ScrollReveal>
      <SkillsSection />
    </ScrollReveal>  

      {/* Footer จะติดมากับ ContactSection  */}
    <ScrollReveal>
      <ContactSection />
    </ScrollReveal>
    </main>
  );
}