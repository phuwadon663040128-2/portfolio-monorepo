'use client'; // ต้องมีเพราะเราใช้ Link และอาจจะมีการเช็ค Active Link ในอนาคต

import Link from 'next/link';
import Image from 'next/image';

export function NavbarProjects() {
    return (
         <nav className="navbar">
        <div className="logo">
          {/* อย่าลืมย้ายรูปไปที่ folder public แล้วแก้ path ที่นี่ */}
          <Image src="/logoPortfolio.png" alt="Portfolio Logo" width={190} height={51} />
        </div>
        <div className="menu">
          <div className="menu-item">
            <Link href="/#home">หน้าหลัก</Link>
          </div>
          <div className="menu-item">
            <Link href="/#about">เกี่ยวกับฉัน</Link>
          </div>
          <div className="menu-item">
            <Link href="/#portfolio">ผลงาน</Link>
          </div>
          <div className="menu-item">
            <Link href="/#skills">ทักษะ</Link>
          </div>
          <div className="menu-item">
            <Link href="/#contact">ติดต่อ</Link>
          </div>
        </div>
      </nav>
    )
}