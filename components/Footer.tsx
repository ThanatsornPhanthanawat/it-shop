"use client";

import { FaFacebook, FaLine } from "react-icons/fa";


export default function Footer() {
    return (
        <div className="bg-gray-900 text-white py-10 mt-8">
            <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div>
                    <h3 className="font-bold text-lg mb-3">เกี่ยวกับเรา</h3>
                    <ul className="space-y-2">
                        <li>บริษัท ไอทีช็อป จำกัด</li>
                        <li>จําหน่ายคอมพิวเตอร์ โน้ตบุ๊ก อุปกรณ์เสริม</li>
                        <li>เลขที่ผู้เสียภาษี: 1234567890</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3">บริการลูกค้า</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">นโยบายการคืนสินค้า</a></li>
                        <li><a href="#" className="hover:underline">เงื่อนไขการรับประกัน</a></li>
                        <li><a href="#" className="hover:underline">คำถามที่พบบ่อย (FAQ)</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3">ติดต่อเรา</h3>
                    <ul className="space-y-2">
                        <li>โทร: 099-999-9999</li>
                        <li>อีเมล: contact@itshop.com</li>
                        <li>Line: @itshop</li>
                        <li>เปิดบริการ: ทุกวัน 09:00 - 18:00</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-3">ติดตามเรา</h3>
                    <div className="flex space-x-4">
                        <FaFacebook className="text-3xl hover:text-blue-400 transition hover:cursor-pointer" />
                        <FaLine className="text-3xl hover:text-green-400 transition hover:cursor-pointer" />
                    </div>
                    <p className="mt-4 text-gray-400">© {new Date().getFullYear()} IT Shop. All rights reserved.</p>
                </div>
            </div>
        </div>

    );
}