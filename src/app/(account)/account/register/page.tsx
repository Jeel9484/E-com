import HeroCard from "@/components/molecules/Collection/HeroCard";
import RegisterForm from "@/components/organisms/Account/CreateAccount";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";
export default function Register() {
  return (
    <div>
      <Header />
      <div className="mb-10">
        <HeroCard
          title="Register"
          crumbs={[{ label: "Home", href: "/" }, { label: " Register" }]}
          bgImage="/assets/bg-image.jpeg"
        />
      </div>
      <RegisterForm />
      <Footer />
    </div>
  );
}
