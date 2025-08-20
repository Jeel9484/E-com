import BannerSectionAboutUs from "@/components/organisms/Pages/AboutUs/Banner";
import ClientSlider from "@/components/organisms/Pages/AboutUs/ClientSlider";
import HeroFeaturedSectionAboutus from "@/components/organisms/Pages/AboutUs/Hero";
import AboutSection2 from "@/components/organisms/Pages/AboutUs/HeroSection2";
import PurchaseSection from "@/components/organisms/Pages/AboutUs/PurchaseSection";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";

export default function AboutUs(){
    return(
        <>
        <Header />
        <HeroFeaturedSectionAboutus />
        <AboutSection2 />
        <ClientSlider />
        <BannerSectionAboutUs />
        <PurchaseSection />
        <Footer />
        </>
    )
}