'use client';
import Link from 'next/link';
import {Footer} from '@portfolio-monorepo/ui';
import { useState } from 'react'; // 1 เรียกใช้ Hook



export function ContactSection() {

    // 2 สร้างตัวแปรเก็บข้อมูลฟอร์ม
    const [ formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    //  ตัวแปรเก็บสถานะการส่ง (ว่าง/กำลังส่ง/ส่งสำเร็จ/ส่งล้มเหลว)
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    // 3 ฟังก์ชันคอยดักจับเวลาพิมพ์ข้อมูลในฟอร์ม
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value}));
    };
    
    // 4 ฟังก์ชันเมื่อกดปุ่ม 'ส่งข้อความ'
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ
        setStatus('loading'); // เปลี่ยนสถานะเป็น กำลังส่ง
        try {

            // เช็คว่าตอนนี้รันอยู่ที่ไหน
            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333';
            
            // ยิงข้อมูลไปที่ Backend
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // ส่งข้อมูลฟอร์มเป็น JSON
            });
            
            if (response.ok) {
                setStatus('success'); // ส่งสำเร็จ
                setFormData({ name: '', email: '', subject: '', message: ''}); // เคลียร์ฟอร์ม
                alert('ส่งข้อความสำรเ็จ!')
            } else {
                setStatus('error'); // ส่งล้มเหลว
                alert('เกิดข้อผิดพลาดในการส่งข้อความ.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error'); // ส่งล้มเหลว
            alert('เกิดข้อผิดพลาดในการส่งข้อความ.');
        }   
    };

  return (
      <div className="page-contact" id="contact">
        <div className="contact-bg-blue"></div>
        <div className="contact-bg-purple"></div>
        <div className="contact-bg-green"></div>
        <div className="contact-bg-orange"></div>

        <div className="contact-title-section">
            <h1 className="contact-title">ติดต่อฉัน</h1>
        </div>

        <div className="contact-info-box">
            <div className="contact-item">
                <div className="contact-icon-box"><img src="/email.png" alt="Email Icon" /></div>
                <div className="contact-text"><p>อีเมล<br />phuwadon.t@kkumail.com</p></div>
            </div>

            <Link href="https://github.com/phuwadon663040128-2" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="contact-item">
                    <div className="contact-icon-box github-icon-box"><img src="/github.png" alt="GitHub Icon" /></div>
                    <div className="contact-text"><p>GitHub<br />phuwadon663040128-2</p></div>
                </div>
            </Link>

            <div className="contact-item">
                <div className="contact-icon-box"><img src="/phone.png" alt="Phone Icon" /></div>
                <div className="contact-text"><p>โทรศัพท์<br />+66 92-321-0768</p></div>
            </div>

            <div className="contact-item cv-item">
                <div className="contact-icon-box"><img src="/cv.png" alt="CV Icon" /></div>
                <div className="cv-text-box">
                    <p className="cv-title">ดาวน์โหลด CV</p>
                    <Link href="/CV_Phuwadon_Thongrong.pdf" target="_blank" rel="noopener noreferrer" className="cv-download-btn">
                        <span>ดาวน์โหลด</span>
                        <span className="arrow">→</span>
                    </Link>
                </div>
            </div>

            <div className="contact-item">
                <div className="contact-icon-box"><img src="/address.png" alt="Location Icon" /></div>
                <div className="contact-text"><p>ที่อยู่ (ตามบัตร ปปช)<br />อุบลราชธานี ประเทศไทย</p></div>
            </div>
        </div>
         {/*  ส่วนฟอร์มติดต่อ */}
        <div className="contact-form-box">
            <h2 className="form-title">ส่งข้อความถึงฉัน</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="name">ชื่อ<span style={{color:'red'}}>*</span></label>
                    <input type="text" id="name" name="name" placeholder="กรอกชื่อของคุณ" required
                    value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-field">
                    <label htmlFor="email">อีเมล<span style={{color:'red'}}>*</span></label>
                    <input type="email" id="email" name="email" placeholder="youremail@example.com" required
                    value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-field">
                    <label htmlFor="subject">หัวข้อ</label>
                    <input type="text" id="subject" name="subject" placeholder="เรื่องที่ต้องการติดต่อ" required
                    value={formData.subject} onChange={handleChange} />
                </div>
                <div className="form-field message-field">
                    <label htmlFor="message">ข้อความของคุณ<span style={{color:'red'}}>*</span></label>
                    <textarea id="message" name="message" placeholder="เขียนข้อความของคุณที่นี้..." required
                    value={formData.message} onChange={handleChange}></textarea>
                </div>

                {/* ปุ่มจะเปลี่ยนข้อความตามสถานะ */}
                <button type="submit" 
                className="form-submit-btn"
                disabled={status == 'loading'} // ปิดปุ่มขณะกำลังส่ง
                style={{ opacity: status === 'loading' ? 0.7 : 1 }}>
                    <span>{status === 'loading' ? 'กำลังส่ง...' : 'ส่งข้อความ'}</span>
                </button>
            </form>
        </div>
        <Footer />
      </div>
  );
}