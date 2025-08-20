import { Map, Mail, Phone } from "lucide-react";
import { Facebook,Twitter,Instagram,Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darkgray py-16">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* About Info */}
          <div className="col-span-6">
            <h3 className="text-white text-2xl font-normal mb-8">About Info</h3>
            <p className="text-white/90 text-base mb-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod <br /> tempor inci ut labore et dolore.
            </p>
            <div className="flex items-center gap-3 text-white mb-3">
              <Map size={18} />
              <span className="text-base">Addresss: 123 Pall Mall, London England</span>
            </div>
            <div className="flex items-center gap-3 text-white mb-3">
              <Mail size={18} />
              <span className="text-base">Email: hello@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-white mb-3">
              <Phone size={18} />
              <span className="text-base">Phone: (012) 345 6789</span>
            </div>
          </div>

          {/* Information */}
          <div className="col-span-2">
            <h3 className="text-white text-2xl mb-8">Information</h3>
            <ul className="space-y-3">
              <li className="text-white hover:text-orange-700 transition cursor-pointer">Contact us</li>
              <li className="text-white hover:text-orange-700 transition cursor-pointer">About us</li>
              <li className="text-white hover:text-orange-700 transition cursor-pointer">Term & Conditions</li>
              <li className="text-white hover:text-orange-700 transition cursor-pointer">Gift Vouchers</li>
              <li className="text-white hover:text-orange-700 transition cursor-pointer">BestSellers</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-2">
            <h3 className="text-white text-2xl font-normal mb-8">Quick Links</h3>
            <ul className="space-y-3">
              <li className="text-white hover:text-orange-700 transition cursor-pointer">My Account</li>
              <li className="text-white hover:text-orange-700 transition cursor-pointer">Shopping cart</li>
              <li className="text-white hover:text-orange-700 transition cursor-pointer">Wishlist</li>
              <li className="text-white hover:text-orange-700 transition cursor-pointer">Custom Link</li>
              <li className="text-white hover:text-orange-700 transition cursor-pointer">Help</li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2">
            <h3 className="text-white text-2xl font-normal mb-8">Follow Us On</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white cursor-pointer hover:text-orange-700">
                <Facebook  size={18} /> Facebook 
              </li>
              <li className="flex items-center gap-3 text-white cursor-pointer hover:text-orange-700">
                <Twitter size={18} /> Twitter
              </li>
              <li className="flex items-center gap-3 text-white cursor-pointer hover:text-orange-700">
                <Instagram size={18} /> Instagram
              </li>
              <li className="flex items-center gap-3 text-white cursor-pointer hover:text-orange-700">
                <Youtube size={18} /> Youtube
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
