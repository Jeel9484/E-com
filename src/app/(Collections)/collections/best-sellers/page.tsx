import HeroFeaturedSection from "@/components/organisms/Best-sellers/Hero";
import CategorySliderSection from "@/components/organisms/Featured/CatograySlider";
import ShopInstagramSection from "@/components/organisms/Featured/ShopInstgram";
import PromoBannersSection from "@/components/organisms/HomeDemoV1/PromoBanner";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";
import BestCatalogPage from "@/components/templates/BestCatlogPage";

export default function BestSellersPage() {
    return(
        <>
        <Header />
        <HeroFeaturedSection />
        <CategorySliderSection />
        <BestCatalogPage />
        <PromoBannersSection />
        <ShopInstagramSection />
        <Footer />
        </>
    )
}