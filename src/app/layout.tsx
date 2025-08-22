import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <CartProvider>
          <main>
               {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
