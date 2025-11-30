// Backend Entry Point
import express from 'express';
import * as path from 'path';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import {Contact} from './models/contact.model';
import cors from 'cors';

// 1 โหลดค่า Config
dotenv.config();

const app = express();

// 2 Middleware
app.use(cors({ origin: [
    'http://localhost:3000',      // แบบมาตรฐาน
    'http://127.0.0.1:3000'       // เผื่อบาง Browser มองเป็น IP
  ], 
  credentials: true })); // อนุญาตเฉพาะ frontend ที่รันบน localhost:3000
app.use(express.json()); // เพื่อแปลง req.body เป็น JSON
app.use(express.urlencoded({ extended: true}));

// 3 เชื่อมต่อฐานข้อมูล MongoDB
const MONGO_URI = process.env.MONGO_URI || '';


if (!MONGO_URI){
  console.error("Error: ไม่พบค่า MONGO_URI ใน .env");
}

// เชื่อมต่อฐานข้อมูลสำหรับ MongoDB เพื่อให้พร้อมใช้งานในการรับส่งข้อมูล
mongoose.connect(MONGO_URI)
  .then(() => console.log('เชื่อมต่อ MongoDB สำเร็จ'))
  .catch((err) => console.error('เชื่อมต่อ MongoDB ไม่สำเร็จ:', err));

  // 4  กำหนดเส้นทาง API
  app.use('/assets', express.static(path.join(__dirname, 'assets'))); // เส้นทางสำหรับไฟล์สแตติก

  // ตัวอย่างเส้นทาง API สำหรับบันทึกข้อมูลติดต่อ
  app.get('.api', (req, res) => {
    res.send({ message: 'ยินดีต้อนรับสู่ backend! ฐานข้อมูลพร้อมใช้งานแล้ว'})
  }); 

  // *** API ใหม่สำหรับ Contact Form  ***
  app.post('/api/contact', async (req, res) => {
    try{
      // 1. รับข้อมูลจาก frontend
      const { name, email, subject, message } = req.body;
      console.log('ข้อมูลที่ได้รับ:', {name, email});

      // 2. สร้างข้อมูลลง Model
      const newConstact = new Contact({
        name,
        email,
        subject,
        message
      });

      // 3. บันทึกลงฐานข้อมูล
      await newConstact.save();
      
      // 4. ตอบกลับ success
      res.status(201).json({
        success: true,
        message: 'บันทึกข้อมูลสำเร็จ! ขอบคุณที่ติดต่อมาครับ'
      });
    } catch (error){
      console.error('เกิดข้อผิดพลาดขณะบันทึกข้อมูลติดต่อ:', error);
      res.status(500).json({
        success: false,
        message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์ ขอโทษด้วยครับ'
      });
    }
});

// เริ่มต้นเซิร์ฟเวอร์
const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
});
server.on('error', console.error);
   
