'use client'; // เพื่อเปิดใช้งาน Hooks และ Event Handlers

import { NavbarProjects } from '@portfolio-monorepo/ui';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function XwordelPage() {
  const router = useRouter();
  
  // State และ Ref สำหรับจัดการ Modal Video
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  // ฟังก์ชันเปิด Modal
  const openModal = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    if (url && url !== '#') {
      setVideoSrc(url);
      setIsModalOpen(true);
      // ใช้ setTimeout เพื่อให้แน่ใจว่า Modal ถูก Render แล้วก่อนสั่งเล่น
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

  return (
    <>
      {/* Navbar */}
      <NavbarProjects />

      {/* Detail Page: XWORDEL */}
      <div className="page-detail page-detail-xwordel">
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
          <span className="breadcrumb-current">XWORDEL</span>
        </div>

        {/* Content Container */}
        <div className="detail-content">
          {/* Left Side: Project Image & Info */}
          <div className="detail-left">
            <div className="detail-image-wrapper">
              {/* แก้ Path รูปภาพให้ชี้ไปที่ folder public */}
              <Image
                src="/xword1.png"
                alt="XWORDEL"
                className="detail-image detail-image-primary"
                width={600}
                height={400}
              />
              <Image
                src="/xword2.png"
                alt="XWORDEL Hover"
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
                    <p>✓ ใช้พจนานุกรม API แปลงความหมายของคำเป็นเบาะแสสำหรับปริศนาอักษรไขว้</p>
                    <p>✓ ปริศนาแต่ละชิ้นสร้างขึ้นด้วยอัลกอริทึม</p>
                    <p>✓ แน่ใจว่ามีความท้าทายเฉพาะตัวทุกครั้ง</p>
                    <p>✓ อินเทอร์เฟซที่ใช้งานง่าย</p>
                    <p>✓ ทำให้การเล่นเกมราบรื่น</p>
                    <p>✓ รองรับ OCR และปริศนาอักษรไขว้อัตโนมัติจากไฟล์ข้อความหรือ PDF</p>
                    <p>✓ มอบประสบการณ์ที่ราบรื่นบนทุกอุปกรณ์</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Project Details */}
          <div className="detail-right">
            {/* Title */}
            <h1 className="detail-title">XWORDEL</h1>
            <h3 className="detail-subtitle">Crossword for English Learning</h3>
            <div className="detail-divider"></div>

            {/* Description */}
            <div className="detail-section">
              <h2>เกี่ยวกับโปรเจค</h2>
              <p>
                XWORDEL-PROJECT หรือ **XwordEL** (ย่อมาจาก Crossword for English
                Learning) คือเว็บแอปพลิเคชันปริศนาอักษรไขว้ที่มุ่งเน้นการผสมผสานความสนุกกับการเรียนรู้คำศัพท์ภาษาอังกฤษ
                แพลตฟอร์มนี้พัฒนาโดยใช้ **Django, HTMX, HTML, CSS และ JavaScript**
                มอบประสบการณ์แบบอินเทอร์แอคทีฟเพื่อพัฒนาคำศัพท์ภาษาอังกฤษ
              </p>
            </div>

            {/* Hard Skills */}
            <div className="detail-section">
              <h2>เทคโนโลยีที่ใช้</h2>
              <div className="tech-badges">
                <span className="tech-badge">Django</span>
                <span className="tech-badge">HTMX</span>
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Dictionary API</span>
                <span className="tech-badge">OCR</span>
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
              <a
                href="/Project-XWORD.mp4" // Path วิดีโอใน public
                className="action-btn demo-action-btn"
                onClick={(e) => openModal(e, '/Project-XWORD.mp4')}
              >
                <span>👁️</span>
                <span>ดูตัวอย่าง</span>
              </a>
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