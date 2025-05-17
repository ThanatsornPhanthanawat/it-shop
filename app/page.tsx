"use client";

import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import BannerCarousel from "@/components/BannerCarousel";
import InfoBar from "@/components/InfoBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <BannerCarousel />
      <ProductShowcase />
      <InfoBar />
      <Footer />
    </div>
  );
}
