'use client'; // จำเป็นเพราะมีการใช้ useState และ onClick

import { NavbarProjects } from '@portfolio-monorepo/ui';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function AiExercisePage() {
  const router = useRouter();
  
  // State สำหรับ Modal YouTube
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [youtubeSrc, setYoutubeSrc] = useState('');

  // ฟังก์ชันเปิด Modal + สร้าง YouTube embed URL
  const openModal = (e: React.MouseEvent<HTMLAnchorElement>, youtubeUrl: string) => {
    e.preventDefault();

    if (youtubeUrl && youtubeUrl !== '#') {
      // แปลง URL ให้เป็น embed format (รองรับทั้งลิงก์ยาวสั้น)
      const videoId = extractYoutubeId(youtubeUrl);
      setYoutubeSrc(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
      setIsModalOpen(true);
    }
  };

  // ฟังก์ชันดึง YouTube video ID จาก URL
  const extractYoutubeId = (url: string) => {
    const regExp =
      /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  // ปิด modal
  const closeModal = () => {
    setIsModalOpen(false);
    setYoutubeSrc(''); // reset เพื่อหยุดวิดีโอ
  };

  // ปิดเมื่อกด ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      {/* Navbar */}
      <NavbarProjects />

      {/* Detail Page: AI For Exercise */}
      <div className="page-detail page-detail-ai-exercise">
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
          <span className="breadcrumb-current">AI For Exercise</span>
        </div>

        {/* Content Container */}
        <div className="detail-content">
          {/* Left Side: Project Image & Info */}
          <div className="detail-left">
            <div className="detail-image-wrapper">
              {/* แก้ Path รูปภาพให้ชี้ไปที่ folder public */}
              <Image
                src="/ai-exercise2.png" 
                alt="AI For Exercise"
                className="detail-image detail-image-primary"
                width={600}
                height={400}
              />
              <Image
                src="/ai-exercise1.png"
                alt="AI For Exercise Hover"
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
                    <p>✓ ตรวจจับท่าทางร่างกายด้วย AI (Mediapipe)</p>
                    <p>✓ นับจำนวนครั้งของแต่ละท่าออกกำลังกาย</p>
                    <p>✓ แสดงผลจำนวนครั้งและสถานะ (up/down) แบบเรียลไทม์</p>
                    <p>✓ รองรับการรีเซ็ต</p>
                    <p>✓ เปลี่ยนท่าออกกำลังกายได้</p>
                    <p>✓ รองรับหลากหลายท่า เช่น ลุกนั่ง ยกดัมเบล กระโดดตบ push-ups</p>
                    <p>✓ ใช้เว็บแคมแบบเรียลไทม์</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Project Details */}
          <div className="detail-right">
            {/* Title */}
            <h1 className="detail-title">AI For Exercise</h1>
            <div className="detail-divider"></div>

            {/* Description */}
            <div className="detail-section">
              <h2>เกี่ยวกับโปรเจค</h2>
              <p>
                โปรเจคนี้เป็นโปรแกรมตรวจจับท่าออกกำลังกายด้วยกล้องเว็บแคมแบบเรียลไทม์
                โดยใช้ OpenCV และ Mediapipe สามารถนับจำนวนครั้งของท่าออกกำลังกายต่าง ๆ
                ได้อัตโนมัติ เช่น ท่าลุกนั่ง ท่ายกดัมเบล ท่ากระโดดตบ และท่า push-ups
                พร้อมแสดงผลบนหน้าจอ
              </p>
            </div>

            {/* Hard Skills */}
            <div className="detail-section">
              <h2>เทคโนโลยีที่ใช้</h2>
              <div className="tech-badges">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">OpenCV</span>
                <span className="tech-badge">Mediapipe</span>
                <span className="tech-badge">NumPy</span>
                <span className="tech-badge">Computer Vision</span>
                <span className="tech-badge">Machine Learning</span>
                <span className="tech-badge">Real-time Processing</span>
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
              
              {/* ปุ่มนี้จะเรียกใช้ฟังก์ชัน openModal แทนการลิงค์ไปตรงๆ */}
              <Link
        href="https://youtu.be/VDxEOPiV1u4"
        className="action-btn demo-action-btn"
        onClick={(e) =>
          openModal(e, 'https://www.youtube.com/watch?v=VDxEOPiV1u4')
        }
        
      >
                <span>👁️</span>
                <span>ดูตัวอย่าง</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Background */}
      <div className="footer-bg"></div>

      {/* Modal YouTube */}
      {isModalOpen && (
        <div
          className="demo-video-modal active"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="demo-video-container">
            <button className="demo-video-close" onClick={closeModal}>
              &times;
            </button>

            <div className="youtube-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={youtubeSrc}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}