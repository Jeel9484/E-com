import Slug from "@/components/organisms/Blog/slug";
import Footer from "@/layout/Home/Footer";
import Header from "@/layout/Home/Header";

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
  return (
    <>
      <Header />
      <Slug params={resolvedParams} />
      <Footer />
    </>
  );
}
