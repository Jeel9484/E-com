import Header from "@/layout/HomeDemoV3/Header";
import HeroCard from "@/components/molecules/Collection/HeroCard";
import Footer from "@/layout/HomeDemoV3/Footer";
import CartPage from "@/components/organisms/Cart/QA/CartPage";

export default function Cart() {
  return(
    <>
      <Header/>
      <HeroCard
        title="Cart"
        crumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        bgImage="/assets/bg-image.jpeg"
      />
      <CartPage />
      <Footer/>
    </>
  )
}
