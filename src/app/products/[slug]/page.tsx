// src/app/products/[slug]/page.tsx

import Header from "@/layout/Home/Header";
import Footer from "@/layout/Home/Footer";
import ProductPage from "@/components/organisms/Product/ProductPage";
import productData from "@/data/Productdata.json";

export default async function Product({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = productData.products.find(
    (p: any) => p.slug === resolvedParams.slug
  );

  // Debug: Log the found product
  console.log("Found product:", product);

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
      <ProductPage params={resolvedParams} product={product} />
      <Footer />
    </>
  );
}