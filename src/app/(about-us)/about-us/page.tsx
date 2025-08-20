"use client"
import AboutUsSection from "@/components/molecules/Pages/AboutUs/AboutSection";
import BannerSectionAboutUs from "@/components/organisms/Pages/AboutUs/Banner";
import ClientSlider from "@/components/organisms/Pages/AboutUs/ClientSlider";
import HeroFeaturedSectionAboutus from "@/components/organisms/Pages/AboutUs/Hero";
import PurchaseSection from "@/components/organisms/Pages/AboutUs/PurchaseSection";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";

export default function AboutUs(){
    return(
        <>
        <Header />
        <HeroFeaturedSectionAboutus />
        <AboutUsSection/>
        <ClientSlider />
        <BannerSectionAboutUs />
        <PurchaseSection />
        <Footer />
        </>
    )
}