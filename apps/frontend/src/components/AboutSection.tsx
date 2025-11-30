'use client';
import Link from 'next/link';
import Image from 'next/image';

export function AboutSection() {
  return (
    <div className="page-about" id="about">
        <div className="about-title-section">
            <div className="about-title-wrapper">
                <h1 className="about-title">เกี่ยวกับฉัน</h1>
            </div>
        </div>

        <div className="profile-section">
            <h2>ประวัติ</h2>
            <p>เป็นนักศึกษาคณะวิศวกรรมคอมพิวเตอร์ที่มุ่งมั่นในเส้นทาง Full Stack Developer <br />มีทักษะในการพัฒนาเว็บแอปพลิเคชันตั้งแต่<br />
            -การออกแบบ UI (Figma)<br />
            -Frontend (Next.js, React, Tailwind CSS)<br />
            -Backend (Node.js, API Routes)<br />
            -การจัดการฐานข้อมูล (MongoDB)<br />
            และมีเป้าหมายที่จะพัฒนาตัวเองไปสู่ Software Engineering</p>
        </div>

        <div className="about-buttons">
            <Link href="/CV_Phuwadon_Thongrong.pdf" target="_blank" rel="noopener noreferrer" className="about-btn-portfolio"> 
                <p>ดาวน์โหลด CV</p>
            </Link>

            <Link href="#portfolio" className="about-btn-contact">
                <p>ดูผลงาน</p>
            </Link>
        </div>

        <Image 
          className="about-phone-mockup" 
          src="/iphone16pro-img.png" 
          alt="iPhone 16 Pro Mockup" 
          width={250} 
          height={517} 
        />

        {/* Skills Cards */}
        <div className="skills-container">
            <div className="skill-card">
                <div className="skill-icon">💻</div>
                <h3>การพัฒนา</h3>
                <p>มีพื้นฐานในการสร้างเว็บแอปพลิเคชันที่ทันสมัยและมีประสิทธิภาพ</p>
            </div>
            <div className="skill-card">
                <div className="skill-icon">🧠</div>
                <h3>ความคิดสร้างสรรค์</h3>
                <p>แก้ปัญหาหลากหลายรูปแบบที่ไม่ซ้ำกันและมีประสิทธิภาพ</p>
            </div>
            <div className="skill-card">
                <div className="skill-icon">📊</div>
                <h3>ประสิทธิภาพ</h3>
                <p>มุ่งเน้นการสร้างโซลูชันที่รวดเร็วและปรับขนาดได้</p>
            </div>
            <div className="skill-card">
                <div className="skill-icon">👥</div>
                <h3>การทำงานเป็นทีม</h3>
                <p>ทำงานร่วมกันกับได้อย่างมีประสิทธิภาพและสร้างสรรค์</p>
            </div>
        </div>
      </div>
  );
}