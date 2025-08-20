import BannerSection from "@/components/organisms/Home/Banner";
import DailyDealsSection from "@/components/organisms/Home/DailyDealsSection";
import HeroSection from "@/components/organisms/Home/HeroSection";
import LogoSection from "@/components/organisms/Home/LogoSection";
import NewReleaseBookSection from "@/components/organisms/Home/NewRealseBook";
import ReadOurGenralSection from "@/components/organisms/Home/ReadOurGeneral";
import TemplateSection from "@/components/organisms/Home/Template";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <TemplateSection/>
      <DailyDealsSection/>
      <BannerSection/>
      <NewReleaseBookSection/>
      <ReadOurGenralSection/>
      <LogoSection/>
      <Footer/>
    </>
  );
}
