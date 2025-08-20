import CategorySliderSection from "@/components/organisms/Featured/CatograySlider";
import HeroFeaturedSection from "@/components/organisms/Featured/Hero";
import ShopInstagramSection from "@/components/organisms/Featured/ShopInstgram";
import PromoBannersSection from "@/components/organisms/HomeDemoV1/PromoBanner";
import TestCatalogPage from "@/components/templates/CatlogPage";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";

export default function FeaturedPage(){
    return(
        <>
        <Header />
        <HeroFeaturedSection />
        <CategorySliderSection />
        <TestCatalogPage />
        <PromoBannersSection />
        <ShopInstagramSection />
        <Footer />
        </>
    )
}