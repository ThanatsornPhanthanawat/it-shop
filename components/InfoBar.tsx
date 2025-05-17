"use client";

import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { useEffect, useState } from "react";


export default function InfoBar() {
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartScroll(true), 500); // delay ให้เห็น animation
  }, []);

  return (

    <div className="w-full bg-gray-100   py-4 overflow-hidden -mb-7">
      <div
        className={`flex items-center justify-center gap-12 whitespace-nowrap ${
          startScroll ? "animate-marquee" : ""
        }`}
      >
        {/* 1 */}
        <div className="flex items-center gap-2">
          <IoShieldCheckmarkOutline className="text-2xl text-black" />
          <div className="text-sm text-black">การันตีสินค้าของแท้ 100%</div>
        </div>

        {/* 2 */}
        <div className="flex items-center gap-2">
          <TbTruckDelivery className="text-2xl text-black" />
          <div className="text-sm text-black">จัดส่งทั่วประเทศ</div>
        </div>

        {/* 3 */}
        <div className="flex items-center gap-2">
          <MdOutlinePayment className="text-2xl text-black" />
          <div className="text-sm text-black">ชำระสินค้าได้หลายช่องทาง</div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
