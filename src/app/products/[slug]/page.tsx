import Header from "@/layout/Home/Header";
import Footer from "@/layout/Home/Footer";
import ProductPage from "@/components/organisms/Product/ProductPage";
import productData from "@/data/Productdata.json";

type ProductType = {
  slug: string;
  title: string;
  mainImage: string;
  price: number;
  old_price?: number | null;
  availability: number;
  name: string;
  vendor: string;
  type: string;
  manufacturing: string;
};

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const productList = productData.products as ProductType[];
  const product = productList.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Header />
        <div>Product not found</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ProductPage product={product} />
      <Footer />
    </>
  );
}