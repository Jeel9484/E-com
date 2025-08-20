import React from 'react'
import AuthorSection from "@/components/organisms/HomeDemoV1/AuthorSection";
import BestBookSection from "@/components/organisms/HomeDemoV1/BestBookSection";
import CountersSection from "@/components/organisms/HomeDemoV1/CounterSection";
import DealsOfTheWeekSection from "@/components/organisms/HomeDemoV1/Dealsofweekcard";
import PopularBooksSection from "@/components/organisms/HomeDemoV1/PopularBooksection";
import PromoBannersSection from "@/components/organisms/HomeDemoV1/PromoBanner";
import Slider from "@/components/organisms/HomeDemoV1/Slider";
import Header from '@/layout/HomeDemoV1/Header';
import Footer from '@/layout/HomeDemoV1/Footer';
export default function Home1() {
  return (
  <>
      <Header/>
      <Slider/>
      <PopularBooksSection/>
      <PromoBannersSection/>
      <DealsOfTheWeekSection/>
      <AuthorSection/>
      <BestBookSection/>
      <CountersSection/>
      <Footer/>
  </>
  )
}
