"use client";

import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";



export default function BannerCarousel() {
    const images = [
        "https://media-cdn.bnn.in.th/491814/ComputerSetEQUIP-2000X720-010525_310525-homepage_desktop_banner_medium.jpg",
        "https://media-cdn.bnn.in.th/490508/ClaimAMDPureThinLightGamingNotebook-2000x720-010525_300625-homepage_desktop_banner_medium.jpg",
        "https://media-cdn.bnn.in.th/495226/CaseiPhonandiPadBacktoSchool-2000x720-160525_310525-homepage_desktop_banner_medium.jpg",
        "https://media-cdn.bnn.in.th/492741/ClaimSamsungMonitorBacktoSchool-2000x720-050525_310525-homepage_desktop_banner_medium.jpg",
    ];

    const [current, setCurrent] = useState(0);

    // Auto slide every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden mt-4 rounded-lg">
            <div className="w-full h-[220px] md:h-[300px] lg:h-[360px]">
                <img
                    src={images[current]}
                    alt={`banner-${current}`}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                />
            </div>

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1"
            >
                <MdKeyboardArrowLeft className="text-3xl text-gray-700" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1"
            >
                <MdKeyboardArrowRight className="text-3xl text-gray-700" />
            </button>

            {/* Indicator Dots*/}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === current ? "bg-white" : "bg-white/50"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
