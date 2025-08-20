import TemplateSection from "@/components/organisms/Home/Template";
import Banner from "@/components/organisms/HomeDemoV2/Banner";
import BestSellsSection from "@/components/organisms/HomeDemoV2/BestSells";
import CustomerFavouriteSection from "@/components/organisms/HomeDemoV2/CustomerFavourite";
import SliderSection from "@/components/organisms/HomeDemoV2/Slider";
import Header from "@/layout/Home/Header";
import BannerSection from "@/components/organisms/Home/Banner";
import ReadOurGenralSection from "@/components/organisms/Home/ReadOurGeneral";
import Footer from "@/layout/HomeDemoV1/Footer";

export default function Home2(){
    return(
        <>
        <Header/>
        <SliderSection/>
        <TemplateSection/>
        <CustomerFavouriteSection/>
        <Banner/>
        <BestSellsSection/>
        <BannerSection/>
        <ReadOurGenralSection/>
        <Footer/>
        </>
    )
}