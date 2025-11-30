'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // เผื่ออยากหน่วงเวลา
}

export default function ScrollReveal({ children, delay = 0.2 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // เริ่มต้น: จางหาย และอยู่ต่ำกว่าปกติ 50px
      whileInView={{ opacity: 1, y: 0 }} // เมื่อมองเห็น: ชัดเจน และเลื่อนขึ้นมาที่เดิม
      viewport={{ once: true, margin: "-100px" }} // margin -100px คือต้องเลื่อนเลยมาหน่อยนึงถึงจะเริ่มเล่น
      transition={{ 
        duration: 1.0, // ใช้เวลา 1.0 วินาที
        ease: "easeOut", // จังหวะเริ่มเร็วแล้วค่อยๆ ช้าลงตอนปลาย
        delay: delay // เวลาหน่วง
      }}
    >
      {children}
    </motion.div>
  );
}