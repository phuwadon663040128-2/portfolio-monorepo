'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  // --- Logic Typing Effect ย้ายมาที่นี่ ---
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const currentText = fullText.substring(0, index);
      setTypedText(currentText);
      let typeSpeed = 100;

      if (isDeleting) {
        typeSpeed = 50;
        index--;
      } else {
        index++;
      }

      if (!isDeleting && index === fullText.length + 1) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        typeSpeed = 500;
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    const startTimeout = setTimeout(type, 1000);
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(startTimeout);
    };
  }, []);

  return (
    <div className="page" id="home">
      {/* ตัด Navbar ออกไปแล้ว */}
      <h1 className="hero-title">สวัสดีครับ<br />ยินดีต้อนรับ</h1>
      
      <div className="name">
          <p>ผมชื่อแพท</p>
      </div>  
      
      <div className="full-stack-dev">
          <h2>{typedText}</h2> 
      </div>

      <div className="description">
          <p>นักพัฒนาเว็บแอปพลิเคชัน ที่มีเป้าหมายในการผลักดันองค์กรให้แข็งแกร่ง และพัฒนาตัวเองเป็น software engineering ในอนาคต</p>
      </div>

      <Link href="#portfolio" className="btn-portfolio">
          <p>ดูผลงาน</p>
      </Link>

      <Link href="#contact" className="btn-contact">
          <p>ติดต่อ</p>
      </Link>

      <Image className="phone-mockup" src="/iphone16pro-img.png" alt="iPhone 16 Pro Mockup" width={300} height={620} />
      <div className="footer-bg"></div>
    </div>
  );
}