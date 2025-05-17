"use client";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef } from "react";

export default function GadgetCarousel() {
  const baseGadget = {
    image:
      "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/Y2361454-01?pgw=1",
    brand: "UGREEN",
    title: "พาวเวอร์แบงค์",
    price: "฿1,290",
    tagColor: "bg-green-500",
    label: "ส่งฟรี",
  };

  const gadgets = Array.from({ length: 10 }, (_, i) => ({
    ...baseGadget,
    title: `${baseGadget.title} #${i + 1}`,
  }));

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 300;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6 relative">
      <h2 className="text-xl font-semibold mb-4">Gadget✨</h2>

      {/* ปุ่มเลื่อนซ้าย */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-[55%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-1 hover:bg-gray-100"
      >
        <MdKeyboardArrowLeft className="text-3xl text-gray-800" />
      </button>

      {/* ปุ่มเลื่อนขวา */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-[55%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-1 hover:bg-gray-100"
      >
        <MdKeyboardArrowRight className="text-3xl text-gray-800" />
      </button>

      <div className="scrollbar-hide overflow-x-auto" ref={scrollRef}>
        <div className="flex space-x-4 pb-4">
          {gadgets.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition p-3"
            >
              <div className="relative mb-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-contain"
                />
                <div className="absolute top-2 right-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full">
                  {item.label}
                </div>
              </div>
              <p className="text-sm text-gray-700 font-semibold leading-tight mb-1">
                {item.title}
              </p>
              <p className="text-red-500 font-bold text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
