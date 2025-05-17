"use client";

import Navbar from "@/components/Navbar";
import ProductShowcase from "@/components/ProductShowcase";
import BannerCarousel from "@/components/BannerCarousel";
import InfoBar from "@/components/InfoBar";
import Footer from "@/components/Footer";
import GadgetCarousel from "@/components/Gadget";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <BannerCarousel />
      <ProductShowcase />
      <GadgetCarousel />
      <InfoBar />
      <Footer />
    </div>
  );
}
