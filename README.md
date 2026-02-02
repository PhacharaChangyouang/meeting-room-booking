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
| Advanced Filtering & Search | Filter ตาม capacity, equipment, status และค้นหาชื่อห้อง | ✅ Implemented (Spin3) |
| Delegation & Permissions | มอบสิทธิ์การจองให้คนอื่น / admin | ⬜ Planned |
| Usage Analytics | ดูสถิติการใช้งานห้อง, no-show rate | ⬜ Planned |
| Smart Notifications – Real | ส่ง push / desktop / email จริง | ⬜ Planned |
| UI/UX Enhancement | ปรับหน้าเว็บให้สวย, mobile-friendly, interactive particle background | ✅ Implemented (Spin3) |
| Testing & Deployment | Unit, Integration, E2E + Deploy server/cloud | ⬜ Planned |

---

## Goals
- ระบบสมบูรณ์แบบสำหรับใช้งานจริง
- รองรับผู้ใช้หลายคน / ทีม
- ลดปัญหา No-show / Booking conflict
- ครบทั้ง MVP + Advanced Features

---

## Usage (Spin3)
1. เปิด terminal → cd ไปที่ backend folder:

```bash
cd /mnt/c/WINDOWS/system32/meeting-room-booking
ติดตั้ง dependencies (ครั้งแรก):

node app.js
รัน Node.js server:

node app.js
เปิด browser → ไปที่:

http://localhost:3000
ใช้งานระบบ:

ค้นหาห้อง, กรองตามสถานะ / capacity / equipment

เลือกห้อง, เวลา, ใส่หัวข้อประชุม

กด Book → ระบบแจ้งเตือน, highlight ห้องที่ถูกจอง

ยกเลิกการจองผ่าน modal confirm

หน้าเว็บ interactive + pagination + sorting

Tech Stack
Backend: Node.js + Express + SQLite3

Frontend: HTML + CSS + JS (Vanilla, interactive particle background)

Notifications: Mock notifications (Spin3)

Version Control: Git + GitHub

Notes
SQLite database อยู่ใน database.db

Frontend อยู่ใน frontend/

สามารถปรับจำนวนห้องประชุมใน app.js → seed data

สำหรับ production แนะนำใช้ Cloud VPS หรือ Render/ Railway
