import HeroCard from "@/components/molecules/Collection/HeroCard";
import LoginForm from "@/components/organisms/Account/Login";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="mb-10">
        <HeroCard
          title="Login"
          crumbs={[{ label: "Home", href: "/" }, { label: " Login" }]}
          bgImage="/assets/bg-image.jpeg"
        />
      </div>
      <LoginForm />
      <Footer />
    </div>
  );
}
