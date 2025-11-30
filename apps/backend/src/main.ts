// Backend Entry Point
import express from 'express';
import * as path from 'path';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { Contact } from './models/contact.model';
import cors from 'cors';

// 1. โหลดค่า Config
dotenv.config();

const app = express();

// 2. Middleware
// ⚠️ แก้ไข CORS: อนุญาตให้ Vercel เข้าถึงได้ (ใส่ * เพื่อให้เทสง่ายก่อน)
app.use(cors({
  origin: (origin, callback) => {
    // กรณีที่ 1: ไม่มี origin (เช่น ยิงจาก Postman หรือ Server-to-Server) -> อนุญาต
    if (!origin) return callback(null, true);

    // กรณีที่ 2: มาจาก Localhost หรือ Vercel (ไม่ว่าชื่อข้างหน้าจะเป็นอะไรขอแค่ลงท้ายด้วย .vercel.app) -> อนุญาต
    if (origin.includes('localhost') || origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }

    // กรณีที่ 3: นอกเหนือจากนี้ -> บล็อก
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

app.use(express.json()); // เพื่อแปลง req.body เป็น JSON
app.use(express.urlencoded({ extended: true }));

// 3. เชื่อมต่อฐานข้อมูล MongoDB
const MONGO_URI = process.env.MONGO_URI || '';

if (!MONGO_URI) {
  console.error("Error: ไม่พบค่า MONGO_URI ใน .env");
}

// เชื่อมต่อฐานข้อมูล
mongoose.connect(MONGO_URI)
  .then(() => console.log('เชื่อมต่อ MongoDB สำเร็จ'))
  .catch((err) => console.error('เชื่อมต่อ MongoDB ไม่สำเร็จ:', err));

// 4. กำหนดเส้นทาง API

// ✅ เพิ่ม Route หน้าแรก (/) เพื่อให้รู้ว่า Server ไม่ตาย (แก้ปัญหา Cannot GET /)
app.get('/', (req, res) => {
  res.send('Portfolio API is Running... 🚀');
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// ✅ แก้ไขจุดผิด: เปลี่ยน .api เป็น /api
app.get('/api', (req, res) => {
  res.send({ message: 'ยินดีต้อนรับสู่ backend! ฐานข้อมูลพร้อมใช้งานแล้ว' });
});

// *** API สำหรับ Contact Form ***
app.post('/api/contact', async (req, res) => {
  try {
    // 1. รับข้อมูลจาก frontend
    const { name, email, subject, message } = req.body;
    console.log('ข้อมูลที่ได้รับ:', { name, email });

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
  } catch (error) {
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
  console.log(`Listening at http://localhost:${port}/`)
});
server.on('error', console.error);