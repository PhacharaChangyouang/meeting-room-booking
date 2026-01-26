# Meeting Room Booking System

## Project Overview
ระบบจองห้องประชุมอัจฉริยะ สำหรับพนักงานและทีมงานในองค์กร
- ค้นหาห้องประชุมได้รวดเร็ว
- จองผ่านมือถือหรือเว็บ
- ตรวจสอบอุปกรณ์และความพร้อมของห้อง
- การแจ้งเตือนอัจฉริยะ
- ผสานกับปฏิทินการทำงาน (Google / Outlook)
- รองรับการใช้งานหลายคนและทีม

---

## Spin 2 – MVP Features

| User Story | Description | Status |
|------------|-------------|--------|
| US-01 Quick Room Search | ค้นหาห้องว่างและจองได้ทันที | ✅ Completed |
| US-02 Mobile-First Booking | จองห้องผ่านมือถือไม่เกิน 3 taps | ✅ Completed |
| US-03 Smart Notifications (Mock) | แจ้งเตือนก่อนประชุม / no-show | ✅ Completed |
| US-04 Equipment Visibility | ดูรายการอุปกรณ์และสถานะ | ✅ Completed |
| US-05 Calendar Integration | Sync การจองกับ Google/Outlook | ✅ Completed |

---

## Spin 3 – New Features & Improvements

| Feature | Description | Status |
|---------|-------------|--------|
| Recurring Meetings | จองประชุมซ้ำรายสัปดาห์/รายเดือน | ⬜ Planned |
| Team Calendar View | ดูตารางห้องรวมทีม | ⬜ Planned |
| Advanced Filtering | Filter ตาม capacity, equipment, location | ⬜ Planned |
| Delegation & Permissions | มอบสิทธิ์การจองให้คนอื่น / admin | ⬜ Planned |
| Usage Analytics | ดูสถิติการใช้งานห้อง, no-show rate | ⬜ Planned |
| Smart Notifications – Real | ส่ง push / desktop / email จริง | ⬜ Planned |
| UI/UX Enhancement | ปรับหน้าเว็บให้สวย, mobile-friendly | ⬜ Planned |
| Testing & Deployment | Unit, Integration, E2E + Deploy server/cloud | ⬜ Planned |

---

## Goals
- ระบบสมบูรณ์แบบสำหรับใช้งานจริง
- รองรับผู้ใช้หลายคน / ทีม
- ลดปัญหา No-show / Booking conflict
- ครบทั้ง MVP + Advanced Features

---

## Usage
1. เปิดหน้า frontend (`index.html`) หรือรันผ่าน server  
2. เลือกห้อง, เวลา, ใส่หัวข้อประชุม  
3. กด **Book** → ระบบจะแจ้งเตือนและบันทึกลงฐานข้อมูล  
4. ตรวจสอบการจองของคุณที่หน้า **My Bookings**

---

## Tech Stack
- Backend: Node.js + Express + SQLite3  
- Frontend: HTML + CSS + JS (Bootstrap)  
- Notifications: Mock / Real push & email (Spin3)  
- Version Control: Git + GitHub
