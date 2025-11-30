//ไฟล์นี้ใช้สำหรับกำหนด Schema และ Model ของข้อมูลติดต่อ (Contact) ในฐานข้อมูล MongoDB
import mongoose from 'mongoose';

// 1 กำหนดหน้าตาของข้อมูล Schema
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // บังคับต้องมีข้อมูล
    },
    email: {
        type: String,
        required: true // บังคับต้องมีข้อมูล
    },
    subject: {
        type: String,
        required: false // ไม่บังคับ
    },
    message: {
        type: String,
        required: true // บังคับต้องมีข้อมูล
    },
    createAt:{ 
        type: Date,
        default: Date.now // กำหนดค่าเริ่มต้นเป็นวันที่ปัจจุบัน
    }
});

// 2 สร้าง Model จาก Schema
export const Contact = mongoose.model('Contact', ContactSchema);
