import HeroFeaturedSection from "@/components/organisms/Most-viewed/Hero";
import CategorySliderSection from "@/components/organisms/Featured/CatograySlider";
import TestCatalogPage from "@/components/templates/CatlogPage";
import ShopInstagramSection from "@/components/organisms/Featured/ShopInstgram";
import PromoBannersSection from "@/components/organisms/HomeDemoV1/PromoBanner";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";

export default function MostViewedPage() {
    return(
        <>
        <Header />
        <HeroFeaturedSection/>
        <CategorySliderSection />
        <TestCatalogPage />
        <PromoBannersSection />
        <ShopInstagramSection />
        <Footer />
        </>
    )
}