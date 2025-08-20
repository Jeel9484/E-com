"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Share2,
  Clock,
  Box,
} from "lucide-react";
import ProductTabs from "@/components/molecules/Products/ProductTabs";
import YouMayLikeSection from "@/components/molecules/Products/YouMakelike";


import {
  defaultGallery,
  defaultProductActions,
  defaultPurchaseOptions,
  defaultCheckoutInformation,
  defaultSocialSharing,
  defaultShippingInformation,
  defaultProductDetails,
  defaultDescription,
} from "@/constant/productconstant";

// Define your product type
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
  // Add any other fields as needed
};

export default function ProductPage({
  params,
  product,
}: {
  params: { slug: string };
  product: ProductType;
}) {
  if (!product) {
    return <div>Product not found</div>;
  }

  const fullProduct = {
    gallery: defaultGallery,
    product_actions: defaultProductActions,
    purchase_options: defaultPurchaseOptions,
    checkout_information: defaultCheckoutInformation,
    social_sharing: defaultSocialSharing,
    shipping_information: defaultShippingInformation,
    product_details: defaultProductDetails,
    description: defaultDescription,
    ...product,
  };

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const galleryImages = fullProduct.gallery.filter(
    (img: string) => img !== fullProduct.mainImage
  );
  const allImages = [fullProduct.mainImage, ...galleryImages];

  const imagePath = (img: string) => `/assets/${img}`;

  return (
    <section className="container-fluid md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <Swiper
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Thumbs]}
            className="mySwiper2"
          >
            {allImages.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={imagePath(img)}
                  alt={`Product image ${i + 1}`}
                  width={600}
                  height={600}
                  className="w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Gallery */}
          <div className="relative group">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[Navigation, Thumbs]}
              className="mySwiper"
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
            >
              {allImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={imagePath(img)}
                    alt={`Thumbnail ${i + 1}`}
                    width={150}
                    height={180}
                    className="object-contain w-full cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-black hover:bg-[#e9452e] transition-all w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center group">
                <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
            <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-black hover:bg-[#e9452e] transition-all w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center group">
                <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl mb-2">{fullProduct.title}</h1>

          <div className="flex items-center gap-3 mb-4">
            {fullProduct.old_price && (
              <p className="line-through text-gray-400 text-2xl">
                ${fullProduct.old_price}
              </p>
            )}
            <p className="text-2xl text-orange-600">${fullProduct.price}</p>
          </div>

          <p className="text-base text-gray-600 mb-4">
            {fullProduct.availability > 0
              ? `${fullProduct.availability} in stock`
              : "Out of stock"}
          </p>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 text-xl">{fullProduct.description}</p>
          </div>

          {/* Product Details Table */}
          <div className="mb-8 border-t border-b border-gray-200">
            <table className="w-full">
              <tbody className="text-xl">
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4">Name :</td>
                  <td className="py-4">{fullProduct.name}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4">Vendor :</td>
                  <td className="py-4">{fullProduct.vendor}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 pr-4">Type :</td>
                  <td className="py-4">{fullProduct.type}</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4">Manufacturing :</td>
                  <td className="py-4">{fullProduct.manufacturing}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Product Actions */}
          <div className="mb-6 flex gap-4 text-lg">
            {fullProduct.product_actions.map((action: any, i: number) => (
              <Link href="#" key={i}>
                {action.text}
              </Link>
            ))}
          </div>

          {/* Purchase Options */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <label>Quantity:</label>
              <div className="flex items-center border">
                <button className="px-3 py-1">
                  {fullProduct.purchase_options.quantity_selector.decrease_button}
                </button>
                <span className="px-4">
                  {fullProduct.purchase_options.quantity_selector.quantity}
                </span>
                <button className="px-3 py-1">
                  {fullProduct.purchase_options.quantity_selector.increase_button}
                </button>
              </div>
              <button
                className="bg-black text-white px-6 py-3 w-fit hover:bg-gray-800 disabled:bg-gray-400"
                disabled={
                  fullProduct.purchase_options.add_to_cart_button.status !==
                  "active"
                }
              >
                {fullProduct.purchase_options.add_to_cart_button.text}
              </button>
            </div>
            <button
              className="bg-blue-600 text-white px-6 py-3 w-[43%] hover:bg-blue-700 disabled:bg-gray-400"
              disabled={
                fullProduct.purchase_options.buy_it_now_button.status !== "active"
              }
            >
              {fullProduct.purchase_options.buy_it_now_button.text}
            </button>
          </div>

          <div className="mb-6">
            <span className="text-xl">Categories: </span>
            <span>{fullProduct.product_details.categories.join(" , ")}</span>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-2">Guaranteed safe checkout:</h3>
            <div className="flex gap-2">
              {fullProduct.checkout_information.payment_methods.map(
                (method: string, i: number) => (
                  <Image
                    key={i}
                    src={`/assets/${method}`}
                    alt={`Payment method ${i + 1}`}
                    width={260}
                    height={140}
                    className="object-contain"
                  />
                )
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xl">Share:</span>
            <div className="flex gap-2">
              <Link href="#" className="text-blue-600">
                <Facebook />
              </Link>
              <Link href="#" className="text-sky-500">
                <Twitter />
              </Link>
              <Link href="#" className="text-red-600">
                <Share2 />
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center text-lg gap-2">
              <Clock size={20} />
              <span>{fullProduct.shipping_information.shipping_time}</span>
            </div>
            <div className="flex items-center text-lg gap-2">
              <Box size={20} />
              <span>{fullProduct.shipping_information.free_shipping}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 mb-10">
        <ProductTabs />
      </div>

      <div>
        <YouMayLikeSection />
      </div>
    </section>
  );
}