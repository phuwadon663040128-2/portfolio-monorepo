'use client';
import { useState } from 'react';

export function SkillsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Logic Modal อยู่ในนี้

  return (
    <div className="page-skills" id="skills">
        <div className="skills-bg-blue"></div>
        <div className="skills-bg-purple"></div>
        <div className="skills-bg-green"></div>
        <div className="skills-bg-orange"></div>

        <div className="skills-title-section">
            <h1 className="skills-title">ทักษะ และประสบการณ์</h1>
        </div>

        <div className="other-skills-container skills-icons">
            <button 
                className={`more-skills-btn ${isModalOpen ? 'active' : ''}`} 
                id="showOtherSkills"
                onClick={() => setIsModalOpen(!isModalOpen)}
            >
                <span>ทักษะอื่นๆ</span>
                <span className="arrow">→</span>
            </button>
            
            <div className={`other-skills-modal ${!isModalOpen ? 'hidden' : ''}`} id="otherSkillsModal">
                <img src="/vscode.png" alt="VS Code" />
                <img src="/c++.png" alt="C++" />
                <img src="/python.png" alt="Python" />
                <img src="/java.png" alt="Java" />
                <img src="/assembly.png" alt="ASM" />
                <img src="/arduino.png" alt="Arduino" />
                <img src="/coolterm.png" alt="CoolTerm" />
                <img src="/DOSBOX.png" alt="DOSBox" />
                <img src="/DIE.png" alt="IDE" />
                <img src="/gns3.png" alt="GNS3" />
                <img src="/VMwave.png" alt="VMware" />
                <img src="/ubuntu.png" alt="Ubuntu" />
                <img src="/figma.png" alt="figma" />
            </div>
        </div>

        <div className="tech-stack-container">
            <div className="tech-icon"><img src="/html.png" alt="HTML" /></div>
            <div className="tech-icon"><img src="/css.png" alt="CSS" /></div>
            <div className="tech-icon"><img src="/javascript.png" alt="JavaScript" /></div>
            <div className="tech-icon"><img src="/Typescript_logo_2020.svg.png" alt="TypeScript" /></div>
            <div className="tech-icon"><img src="/React_Logo_1.png" alt="React" /></div>
            <div className="tech-icon"><img src="/mongodb.png" alt="MongoDB" /></div>
            <div className="tech-icon"><img src="/Next.js_Logo_1.png" alt="Next.js" /></div>
            <div className="tech-icon"><img src="/Node.js_idBSZu62Vz_0.png" alt="Node.js" /></div>
            <div className="tech-icon"><img src="/Nx.svg" alt="Nx" /></div>
            <div className="tech-icon"><img src="/Tailwind_CSS_idAfURhv2v_1.png" alt="Tailwind CSS" /></div>
        </div>

        <div className="soft-skills-container">
            <div className="skill-badge"><span className="badge-icon">💡</span><span className="badge-text">ความคิดสร้างสรรค์</span></div>
            <div className="skill-badge"><span className="badge-icon">👥</span><span className="badge-text">การทำงานเป็นทีม</span></div>
            <div className="skill-badge"><span className="badge-icon">🔧</span><span className="badge-text">การแก้ปัญหา</span></div>
            <div className="skill-badge"><span className="badge-icon">⏰</span><span className="badge-text">การจัดการเวลา</span></div>
            <div className="skill-badge"><span className="badge-icon">💬</span><span className="badge-text">การสื่อสาร</span></div>
            <div className="skill-badge"><span className="badge-icon">📚</span><span className="badge-text">การเรียนรู้อย่างต่อเนื่อง</span></div>
            <div className="skill-badge"><span className="badge-icon">🔍</span><span className="badge-text">ความใส่ใจในรายละเอียด</span></div>
            <div className="skill-badge"><span className="badge-icon">🚀</span><span className="badge-text">ความคิดริเริ่ม</span></div>
        </div>
      </div>
  );
}