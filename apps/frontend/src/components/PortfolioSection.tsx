'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function PortfolioSection() {
  const router = useRouter(); // Logic Router อยู่ในนี้

  return (
    <div className="page-portfolio" id="portfolio">
        <div className="portfolio-bg-blue"></div>
        <div className="portfolio-bg-purple"></div>
        <div className="portfolio-bg-green"></div>
        <div className="portfolio-bg-orange"></div>

        <div className="portfolio-title-section">
            <h1 className="portfolio-title">ผลงาน</h1>
        </div>

        <div className="projects-container">
            {/* Project 1 */}
            <div className="project-card" onClick={() => router.push('/projects/portfolio-site')}>
                <Image src="/portfolio1.png" alt="Portfolio Website" className="project-image" width={364} height={220} />
                <div className="project-content">
                    <h3 className="project-title">Portfolio Website</h3>
                    <p className="project-description">โปรเจคที่ทำขึ้นเพื่อโชว์ผลงาน ทักษะ และช่องทางการติดต่อผ่านทางเว็บไซต์แบบ Full Stack Dev สาย MERN Stack 
                และมีโครงสร้างงานแบบ Nx monorepo ซึ่งเริ่มทำงานตั้งแต่การออกแบบ หรือ end-to-end</p>
                    <div className="project-actions">
                        <Link href="https://github.com/phuwadon663040128-2" target="_blank" rel="noopener noreferrer" className="github-link" onClick={(e) => e.stopPropagation()}>
                            <img src="/github-page-work.png" alt="GitHub" className="github-icon" />
                            <span>GitHub</span>
                        </Link>
                        <Link href="/projects/portfolio-site" className="detail-btn">
                            <span>ดูรายละเอียด</span>
                            <span className="arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* ... (Project 2, 3, 4 ก๊อปปี้มาใส่ต่อได้เลยครับ Logic เหมือนกัน) ... */}
            
             {/* Project 2 */}
            <div className="project-card" onClick={() => router.push('/projects/happy-tree')}>
                <Image src="/stm32-1.png" alt="Happy Tree" className="project-image" width={364} height={220} />
                <div className="project-content">
                    <h3 className="project-title">Happy Tree</h3>
                    <p className="project-description">เฟิร์มแวร์สำหรับตรวจวัดและแจ้งเตือนความชื้นแบบฝังตัว สำหรับบอร์ด STM32F411RE Nucleo พร้อมtraining shield ไมโครคอนโทรลเลอร์ (MCU) ทำการเก็บค่าวัดความชื้นในดิน อุณหภูมิ และแสง จากนั้นรายงานสถานะผ่านไฟ LED, หน้าจอแสดงผลแบบ 7-segment, UART และจอ OLED แบบ SSD1306</p>
                    <div className="project-actions">
                        <Link href="https://github.com/phuwadon663040128-2" target="_blank" rel="noopener noreferrer" className="github-link" onClick={(e) => e.stopPropagation()}>
                            <img src="/github-page-work.png" alt="GitHub" className="github-icon" />
                            <span>GitHub</span>
                        </Link>
                        <Link href="/projects/happy-tree" className="detail-btn">
                            <span>ดูรายละเอียด</span>
                            <span className="arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Project 3 */}
            <div className="project-card" onClick={() => router.push('/projects/ai-exercise')}>
                <Image src="/ai-exercise2.png" alt="AI Exercise" className="project-image" width={364} height={220} />
                <div className="project-content">
                    <h3 className="project-title">AI For Exercise</h3>
                    <p className="project-description">โปรเจคนี้เป็นโปรแกรมตรวจจับท่าออกกำลังกายด้วย กล้องเว็บแคมแบบเรียลไทม์ โดยใช้ OpenCV และ Mediapipeสามารถนับจำนวนครั้งของท่าออกกำลังกายต่าง ๆ ได้อัตโนมัติ เช่น ท่าลุกนั่ง ท่ายกดัมเบล ท่ากระโดดตบ และท่า push-ups พร้อมแสดงผลบนหน้าจอ.</p>
                    <div className="project-actions">
                        <Link href="https://github.com/phuwadon663040128-2" target="_blank" rel="noopener noreferrer" className="github-link" onClick={(e) => e.stopPropagation()}>
                            <img src="/github-page-work.png" alt="GitHub" className="github-icon" />
                            <span>GitHub</span>
                        </Link>
                        <Link href="/projects/ai-exercise" className="detail-btn">
                            <span>ดูรายละเอียด</span>
                            <span className="arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>

             {/* Project 4 */}
            <div className="project-card" onClick={() => router.push('/projects/xwordel')}>
                <Image src="/xword1.png" alt="XWORDEL" className="project-image" width={364} height={220} />
                <div className="project-content">
                    <h3 className="project-title">XWORDEL</h3>
                    <p className="project-description">XWORDEL (ย่อมาจาก Crossword for English Learning) เป็นเว็บแอปพลิเคชันเกมปริศนาอักษรไขว้ที่ มุ่งเน้นผสมผสานความสนุกจากการเล่นปริศนาอักษรไขว้เข้ากับการเรียนรู้คำศัพท์ภาษาอังกฤษแพลตฟอร์มนี้ มอบประสบการณ์แบบอินเทอร์แอคทีฟเพื่อช่วยพัฒนา ทักษะคำศัพท์ภาษาอังกฤษ.</p>
                    <div className="project-actions">
                        <Link href="https://github.com/phuwadon663040128-2" target="_blank" rel="noopener noreferrer" className="github-link" onClick={(e) => e.stopPropagation()}>
                            <img src="/github-page-work.png" alt="GitHub" className="github-icon" />
                            <span>GitHub</span>
                        </Link>
                        <Link href="/projects/xwordel" className="detail-btn">
                            <span>ดูรายละเอียด</span>
                            <span className="arrow">→</span>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
      </div>
  );
}