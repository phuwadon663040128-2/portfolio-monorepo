'use client'; // เพื่อเปิดใช้งาน Hooks และ Event Handlers

import { NavbarProjects } from '@portfolio-monorepo/ui';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioSitePage() {
  const router = useRouter();
  
  // State และ Ref สำหรับจัดการ Modal Video
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // ฟังก์ชันเปิด Modal
  // **หมายเหตุ:** ใน HTML เดิม 'href' ของปุ่มนี้คือ '#' ผมจึงสมมติ path วิดีโอไว้
  const openModal = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    if (url && url !== '#') {
      setVideoSrc(url);
      setIsModalOpen(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 100);
    }
  };

  // ฟังก์ชันปิด Modal
  const closeModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setVideoSrc('');
  };

  // Effect สำหรับดักจับปุ่ม Escape เพื่อปิด Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // กำหนด URL วิดีโอสำหรับปุ่ม 'ดูตัวอย่าง'
  // เนื่องจาก HTML เดิมใช้ '#' ผมจะสมมติ path ใหม่
  const demoVideoUrl = '/assets/portfolio-site/Project-Portfolio-Demo.mp4'; 

  return (
    <>
      {/* Navbar */}
      <NavbarProjects />

      {/* Detail Page: Portfolio Website */}
      <div className="page-detail page-detail-portfolio">
        {/* Background Effects */}
        <div className="detail-bg-blue"></div>
        <div className="detail-bg-purple"></div>
        <div className="detail-bg-green"></div>
        <div className="detail-bg-orange"></div>

        {/* Breadcrumb Navigation */}
        <div className="detail-breadcrumb">
          <button className="back-btn" onClick={() => router.back()}>
            <span>←</span>
          </button>
          <Link href="/#portfolio" className="breadcrumb-text">
            ผลงาน
          </Link>
          <span className="breadcrumb-divider">›</span>
          <span className="breadcrumb-current">Portfolio Web</span>
        </div>

        {/* Content Container */}
        <div className="detail-content">
          {/* Left Side: Project Image & Info */}
          <div className="detail-left">
            <div className="detail-image-wrapper">
              {/* แก้ Path รูปภาพให้ชี้ไปที่ folder public */}
              <Image
                src="/portfolio1.png"
                alt="Portfolio Website"
                className="detail-image detail-image-primary"
                width={600}
                height={400}
              />
              <Image
                src="/portfolio2.png"
                alt="Portfolio Website Hover"
                className="detail-image detail-image-hover"
                width={600}
                height={400}
              />
            </div>
            <div className="project-meta">
              <div className="meta-item">
                <div className="meta-icon">📋</div>
                <div className="meta-text">
                  <h4>คุณสมบัติ</h4>
                  <div className="features-list">
                    <p>✓ Portfolio Page แสดงโปรเจคและประสบการณ์</p>
                    <p>✓ About Section แนะนำตัวและข้อมูลพื้นฐาน</p>
                    <p>✓ Contact Form ผู้ใช้กรอกข้อมูลและส่งข้อความถึงเจ้าของเว็บไซต์</p>
                    <p>✓ Database Storage บันทึกข้อมูลติดต่อใน **MongoDB**</p>
                    <p>✓ Fast Page Load ใช้ **Next.js** เพื่อจัดการโหลดหน้าเพจแบบ SSR</p>
                    <p>✓ Responsive Design ชี้ **Tailwind CSS** ปรับขนาดอัตโนมัติทุกอุปกรณ์</p>
                    <p>✓ Smooth Animation มีเอฟเฟกต์เคลื่อนไหวเมื่อเปลี่ยนหน้าส่วนต่าง ๆ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Project Details */}
          <div className="detail-right">
            {/* Title */}
            <h1 className="detail-title">Portfolio Web</h1>
            <div className="detail-divider"></div>

            {/* Description */}
            <div className="detail-section">
              <h2>เกี่ยวกับโปรเจค</h2>
              <p>
                โปรเจคที่ทำขึ้นเพื่อโชว์ผลงาน ทักษะ และช่องทางการติดต่อผ่านทางเว็บไซต์แบบ Full Stack Dev สาย MERN Stack 
                และมีโครงสร้างงานแบบ Nx monorepo ซึ่งเริ่มทำงานตั้งแต่การออกแบบ หรือ end-to-end ดังนี้:
              </p>
              <ul>
                <li>1. ออกแบบ: โดยใช้หลักการ UX/UI Design ที่ได้เรียนมา โดยใช้ figma ในการออกแบบ</li>
                <li>2. Frontend(ภาษาพื้นฐาน:html+css+javascipt): ใช้ React ในการสร้าง components และ Next.js ช่วยจัดการหน้าเพจ และ ทำให้โหลดหน้าเว็บได้เร็วขึ้น
</li>
                <li>3. Backend: ใช้ Node.js ในการรัน server ซึ่ง Next.js ถูกสร้างขึ้นบน Node.js และ Exprss.js ในการสร้าง api ด้วยตนเอง
</li>
                <li>4. Database: ใช้ MongoDB Atlas ในการเก็บข้อมูล
</li>              <li>5. Deployment: 1.frontend:Vercel 2.backend:Render</li>
              </ul>
            </div>

            {/* Hard Skills */}
            <div className="detail-section">
              <h2>เทคโนโลยีที่ใช้</h2>
              <div className="tech-badges">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">Typescript</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Figma</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="detail-actions">
              <a
                href="https://github.com/phuwadon663040128-2"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn github-action-btn"
              >
                <span>🔗</span>
                <span>ดู GitHub</span>
              </a>
              
              {/* ปุ่มนี้จะเรียกใช้ฟังก์ชัน openModal */}
             
            </div>
          </div>
        </div>
      </div>

      {/* Footer Background */}
      <div className="footer-bg"></div>

      {/* Demo Video Modal */}
      {isModalOpen && (
        <div
          className="demo-video-modal active"
          id="demoVideoModal"
          onClick={(e) => {
            // ปิด Modal เมื่อคลิกที่พื้นที่ด้านนอก (backdrop)
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="demo-video-container">
            <button
              className="demo-video-close"
              id="demoVideoClose"
              onClick={closeModal}
            >
              &times;
            </button>
            <video
              id="demoVideo"
              controls
              ref={videoRef}
              src={videoSrc} // ดึงมาจาก state
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}