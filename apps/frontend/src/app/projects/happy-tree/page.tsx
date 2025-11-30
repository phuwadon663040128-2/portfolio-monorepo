'use client'; // เพื่อให้สามารถใช้ Hooks และ Event Handlers ของ React ได้
import { NavbarProjects } from '@portfolio-monorepo/ui';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function HappyTreePage() {
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
      {/* Navbar - (ควรย้ายไปที่ layout.tsx หากใช้ร่วมกันหลายหน้า) */}
      <NavbarProjects />

      {/* Detail Page: Happy Tree */}
      <div className="page-detail page-detail-happy-tree">
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
          <span className="breadcrumb-current">Happy Tree</span>
        </div>

        {/* Content Container */}
        <div className="detail-content">
          {/* Left Side: Project Image & Info */}
          <div className="detail-left">
            <div className="detail-image-wrapper">
              {/* แก้ Path รูปภาพให้ชี้ไปที่ folder public */}
              <Image
                src="/stm32-1.png"
                alt="Happy Tree"
                className="detail-image detail-image-primary"
                width={600}
                height={400}
              />
              <Image
                src="/stm32-2.png"
                alt="Happy Tree Hover"
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
                    <p>✓ วัดค่าความชื้นดิน อุณหภูมิ แสง และอ่านค่าจาก potentiometer</p>
                    <p>✓ ประมวลผลและแสดงผลข้อมูลบนจอ OLED</p>
                    <p>✓ ส่งข้อมูล telemetry ไปยัง ESP32/ESP8266 ผ่าน UART</p>
                    <p>✓ ESP32/ESP8266 ส่งข้อมูลขึ้น FastAPI Gateway</p>
                    <p>✓ แสดงผลบนเว็บ</p>
                    <p>✓ มีระบบตั้งค่า threshold และ calibration</p>
                    <p>✓ ผ่านเมนูบนจอ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Project Details */}
          <div className="detail-right">
            {/* Title */}
            <h1 className="detail-title">Happy Tree</h1>
            <h3 className="detail-subtitle">Moisture Monitoring System</h3>
            <div className="detail-divider"></div>

            {/* Description */}
            <div className="detail-section">
              <h2>เกี่ยวกับโปรเจค</h2>
              <p>
                เฟิร์มแวร์สำหรับตรวจจับและแจ้งเตือนความชื้นแบบฝังตัว
                สำหรับบอร์ด **STM32F411RE Nucleo** พร้อม training shield
                ไมโครคอนโทรลเลอร์ (MCU) ทำการเก็บค่าวัดความชื้น อุณหภูมิ และแสง
                จากนั้นรายงานผลผ่านไฟ LED, 7-segment, UART และจอ OLED แบบ **SSD1306**
                ส่วนการปรับค่าจะดำเนินบนบอร์ดและถูกเก็บไว้ใน RAM สำหรับช่วงการเปิดเครื่องปัจจุบัน
              </p>
            </div>

            {/* Hard Skills */}
            <div className="detail-section">
              <h2>เทคโนโลยีที่ใช้</h2>
              <div className="tech-badges">
                <span className="tech-badge">C/C++</span>
                <span className="tech-badge">STM32F411RE</span>
                <span className="tech-badge">UART</span>
                <span className="tech-badge">OLED SSD1306</span>
                <span className="tech-badge">Analog Sensors</span>
                <span className="tech-badge">Python</span>
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">ESP32</span>
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
        href="https://youtu.be/U2ta-1O4z24"
        className="action-btn demo-action-btn"
        onClick={(e) =>
          openModal(e, 'https://www.youtube.com/watch?v=U2ta-1O4z24')
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