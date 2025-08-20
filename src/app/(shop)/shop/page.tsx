import HeroShop from "@/components/organisms/Shop/Hero";
import CategorySliderSection from "@/components/organisms/Featured/CatograySlider";
import BestCatalogPage from "@/components/templates/BestCatlogPage";
import Footer from "@/layout/HomeDemoV1/Footer";
import Header from "@/layout/HomeDemoV1/Header";
import ShopInstagramSection from "@/components/organisms/Featured/ShopInstgram";
import PromoBannersSection from "@/components/organisms/HomeDemoV1/PromoBanner"


export default function ShopPage(){
    return(
        <>
        <Header/>
        <HeroShop/>
        <CategorySliderSection />
        <BestCatalogPage />
         <PromoBannersSection />
        <ShopInstagramSection />
        <Footer/>
        </>
    )
}