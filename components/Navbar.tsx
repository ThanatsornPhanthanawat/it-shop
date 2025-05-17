"use client";

import { useState } from "react";
import { IoSearchSharp, IoPersonSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

export default function Navbar() {
    const navItems = [
        {
            title: "สินค้า",
            items: [
                {
                    heading: "คอมพิวเตอร์ & โน้ตบุ๊ก",
                    links: ["คอมพิวเตอร์ตั้งโต๊ะ", "โน้ตบุ๊ก", "จอมอนิเตอร์", "All-in-One"],
                },
                {
                    heading: "อุปกรณ์เครือข่าย",
                    links: ["เร้าเตอร์", "สวิตช์", "Access Point", "สาย LAN"],
                },
                {
                    heading: "อุปกรณ์เกมมิ่ง",
                    links: ["เมาส์เกมมิ่ง", "คีย์บอร์ดเกมมิ่ง", "เก้าอี้เกมมิ่ง", "หูฟังเกมมิ่ง"],
                },
            ],
        },
        {
            title: "อุปกรณ์เสริม",
            items: [
                {
                    heading: "ต่อพ่วง",
                    links: ["เมาส์", "คีย์บอร์ด", "ฮับ USB", "เครื่องพิมพ์"],
                },
                {
                    heading: "เสียง & ภาพ",
                    links: ["หูฟัง", "ลำโพง", "ไมโครโฟน", "Webcam"],
                },
            ],
        },
        {
            title: "อะไหล่ / อัปเกรด",
            items: [
                {
                    heading: "ชิ้นส่วนหลัก",
                    links: ["CPU", "RAM", "Mainboard", "PSU", "การ์ดจอ"],
                },
                {
                    heading: "จัดเก็บข้อมูล",
                    links: ["SSD", "HDD", "External Drive", "NAS"],
                },
            ],
        },
        {
            title: "บริการ",
            items: [
                {
                    heading: "บริการของเรา",
                    links: [
                        "ประกอบคอม",
                        "อัปเกรดคอม",
                        "ซ่อมเครื่อง",
                        "ลง Windows / โปรแกรม",
                        "บริการนอกสถานที่",
                    ],
                },
            ],
        },
        {
            title: "โปรโมชั่น",
            items: [
                {
                    heading: "ข้อเสนอพิเศษ",
                    links: ["ลดราคาประจำเดือน", "แถมฟรี", "ผ่อน 0%"],
                },
            ],
        },
    ];


    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="bg-white border-b border-gray-300">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex items-center justify-between py-2 font-medium text-gray-800">
                    <div className="flex items-center space-x-6 w-full">
                        {/* เมนูหลัก */}
                        <div className="flex space-x-8">
                            {navItems.map((category, index) => (
                                <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <button className="hover:text-blue-600 hover:cursor-pointer">{category.title}</button>
                                    <div className={`absolute left-0 top-full mt-0 z-50 ${hoveredIndex === index ? "block" : "hidden"}`}>
                                        <div className="bg-white shadow-sm rounded-md p-4 grid grid-cols-2 gap-6 min-w-max">
                                            {category.items.map((section, sIndex) => (
                                                <div key={sIndex}>
                                                    <h4 className="font-semibold mb-2">{section.heading}</h4>
                                                    <ul className="space-y-1">
                                                        {section.links.map((link, lIndex) => (
                                                            <li key={lIndex}>
                                                                <a
                                                                    href="#"
                                                                    className="text-sm text-gray-600 hover:text-blue-500 whitespace-nowrap"
                                                                >
                                                                    {link}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Search + Cart + User */}
                        <div className="flex items-center space-x-4 ml-auto">
                            {/* Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="ค้นหา..."
                                    className="border border-gray-300 rounded-md pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <IoSearchSharp className="absolute left-3 top-1.5 text-gray-500" />
                            </div>

                            {/* Cart */}
                            <button className="relative hover:text-blue-600 cursor-pointer text-xl">
                                <BsCart2 />
                            </button>

                            {/* User icon with dropdown */}
                            <div className="relative group">
                                <button className="text-xl hover:text-blue-600 cursor-pointer">
                                    <IoPersonSharp className="mt-2"/>
                                </button>
                                <div className="absolute right-[-16px] top-full mt-2 w-40 bg-white shadow-md rounded-md py-2 text-sm text-gray-700 hidden group-hover:block z-50">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">เข้าสู่ระบบ</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">สมัครสมาชิก</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
