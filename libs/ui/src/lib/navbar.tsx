'use client'; // ต้องมีเพราะเราใช้ Link และอาจจะมีการเช็ค Active Link ในอนาคต

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';


export function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

  // ==========================================
  // LOGIC: Scroll Active Menu
  // ==========================================
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'skills', 'contact'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId); // หา element ของแต่ละ section
        if (element) {
          const rect = element.getBoundingClientRect();
          // ถ้า element อยู่ในช่วงหน้าจอ (offset นิดหน่อย)
          if (rect.top >= -200 && rect.top <= 300) {
            setActiveSection(sectionId);
            break; 
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll); // ฟังเหตุการณ์ scroll
    return () => window.removeEventListener('scroll', handleScroll); // ล้างการฟังเหตุการณ์เมื่อ component ถูกลบ
  }, []);


  // ===========================================================
  // ส่วนแสดงผล (JSX) ;JSX คือโค้ดที่เขียนเหมือน HTML แต่เป็น JavaScript
  // ===========================================================
  return (
   <nav className="navbar">
            <div className="logo">
                <Image src="/logoPortfolio.png" alt="Portfolio Logo" width={190} height={51} />
            </div>
            <div className="menu">
                {['home', 'about', 'portfolio', 'skills', 'contact'].map((item) => (
                  <div className="menu-item" key={item}>
                    <Link 
                      href={`#${item}`} 
                      className={activeSection === item ? 'active' : ''}
                      onClick={() => setActiveSection(item)} // คลิกแล้วเปลี่ยนสีทันที
                    >
                      {item === 'home' ? 'หน้าหลัก' :  // แปลชื่อเมนูเป็นภาษาไทย
                       item === 'about' ? 'เกี่ยวกับฉัน' :
                       item === 'portfolio' ? 'ผลงาน' :
                       item === 'skills' ? 'ทักษะ' : 'ติดต่อ'}
                    </Link>
                  </div>
                ))}
            </div>
        </nav>
  );
}
