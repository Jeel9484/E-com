
import AliceWalkerSection from "@/components/organisms/Collection/AliceWalker";
import BestSellerSection from "@/components/organisms/Collection/BestSeller";
import DailyDealsSection from "@/components/organisms/Collection/Dailydeals";
import FeaturedBookSection from "@/components/organisms/Collection/FeaturedBook";
import GillianFlynnSection from "@/components/organisms/Collection/GillianFlynn";
import HeroSection from "@/components/organisms/Collection/Hero";
import MostViewedSection from "@/components/organisms/Collection/MostView";
import SylviaPlathSection from "@/components/organisms/Collection/SylviaPlath";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";

export default function CollectionsPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <AliceWalkerSection />
      <BestSellerSection />
      <DailyDealsSection />
      <FeaturedBookSection />
      <GillianFlynnSection />
      <MostViewedSection />
      <SylviaPlathSection />
      <Footer />
    </>
  );
}
