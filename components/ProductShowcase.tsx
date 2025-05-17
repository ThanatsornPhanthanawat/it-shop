"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
    {
        tag: "ใหม่",
        tagColor: "bg-blue-500",
        image:
            "https://images.unsplash.com/photo-1677086813101-496781a0f327?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "หูฟังเกมมิ่งเสียงแน่น",
        description: "รองรับ 7.1 Surround, ใช้ได้ทั้งพีซีและคอนโซล",
    },
    {
        tag: "Sale",
        tagColor: "bg-red-500",
        image:
            "https://media-cdn.bnn.in.th/381306/samsung-990-pro-ssd-m2-1tb-1-square_medium.jpg",
        title: "SSD 1TB M.2 PCIe Gen4",
        description: "ลดพิเศษ 15% เฉพาะเดือนนี้เท่านั้น!",
    },
    {
        tag: "ใหม่",
        tagColor: "bg-green-500",
        image:
            "https://images.unsplash.com/photo-1626958390943-a70309376444?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "คีย์บอร์ด Mechanical สีรุ้ง",
        description: "มีไฟ RGB แบบปรับได้เอง 18 โหมด",
    },
    {
        tag: "ฮิต",
        tagColor: "bg-yellow-500",
        image:
            "https://images.unsplash.com/photo-1666771410003-8437c4781d49?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "จอ 27 นิ้ว 165Hz",
        description: "เล่นเกมลื่น คมชัดระดับ IPS 2K",
    },
    {
        tag: "ลดราคา",
        tagColor: "bg-orange-500",
        image:
            "https://images.unsplash.com/photo-1593642634367-d91a135587b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "โน้ตบุ๊คสายทำงาน",
        description: "ประสิทธิภาพสูง เหมาะสำหรับกราฟิกและตัดต่อ",
    },
    {
        tag: "ใหม่",
        tagColor: "bg-purple-500",
        image:
            "https://sc04.alicdn.com/kf/H0a3b49fb65774af4991579fd7dc66d60N/Hot-Selling-zero-Gravity--CLUVENS-Scorpion-PC-Gaming-Chair-Cockpit-Fully-Electrical-Recline--for-3-Monitors-IW-SK-Scorpion-Chair.jpg",
        title: "เก้าอี้เกมมิ่ง Premium",
        description: "นั่งสบาย รองรับหลังดี เหมาะกับเล่นเกมยาวๆ",
    },
];

export default function ProductShowcase() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center"
                data-aos="fade-up"
            >
                🔥 สินค้าแนะนำจากร้านเรา
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div
                    key={index}
                    className="group bg-white rounded-xl shadow-md p-4 transition duration-300 hover:shadow-xl hover:scale-[1.02] hover:cursor-pointer"
                    data-aos="fade-up"
                  >
                    <div className="relative mb-3 overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover transform transition duration-300 group-hover:scale-105"
                      />
                      <span
                        className={`absolute top-2 left-2 text-xs text-white px-2 py-1 rounded ${product.tagColor}`}
                      >
                        {product.tag}
                      </span>
                    </div>
                  
                    <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                  

                    <div className="opacity-0 group-hover:opacity-100 transition duration-300">
                      <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition hover:cursor-pointer">
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    );
}
