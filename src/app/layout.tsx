import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* Meta, title, favicon etc. */}</head>
      <body>
        {/* Wrap whole app inside CartProvider */}
        <CartProvider>{children}</CartProvider>

        {/* ✅ Load Razorpay checkout script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
