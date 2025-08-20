import AuthorSection from "@/components/organisms/Pages/AuthorList/AuthorList";
import BannerSection from "@/components/organisms/Pages/AuthorList/Bannersection";
import HeroFeaturedSection from "@/components/organisms/Pages/AuthorList/Hero";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";

export default function AuthorListPage() {
return(
    <>
    <Header />
    <HeroFeaturedSection />
    <AuthorSection />
    <BannerSection />
    <Footer />
    </>
)
}