import SliderSection from "@/components/organisms/HomeDemoV3/Slider";
import Header from "@/layout/HomeDemoV3/Header";
import TemplateSection from "@/components/organisms/Home/Template";
import AuthorOfTheMonthSection from "@/components/organisms/HomeDemoV3/AuthorOfMonth";
import PromoBannersSection from "@/components/organisms/HomeDemoV1/PromoBanner";
import NewRealseBookSection from "@/components/organisms/HomeDemoV3/NewRealseBook";
import BookFestivalSection from "@/components/organisms/HomeDemoV3/BookFestivle";
import ShopInstagram from "@/components/organisms/HomeDemoV3/ShopInstgram";
import Footer from "@/layout/HomeDemoV3/Footer";

export default function Home3(){
    return(
        <>
        <Header/>
        <SliderSection/>
        <TemplateSection/>
        <AuthorOfTheMonthSection/>
        <PromoBannersSection/>
        <NewRealseBookSection/>
        <BookFestivalSection/>
        <ShopInstagram/>
        <Footer/>
        </>
    )
}