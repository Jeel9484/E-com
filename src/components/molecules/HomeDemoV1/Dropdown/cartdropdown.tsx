"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";

export const CartDropdown = () => {
  const { state, removeFromCart, updateQuantity } = useCart();
  const { checkout } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="p-4 min-w-[300px]">
        <h4 className="font-semibold text-lg mb-2">Cart</h4>
        <p className="text-sm text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-4 min-w-[350px]">
      <h4 className="font-semibold text-lg mb-4">Cart ({state.itemCount} items)</h4>
      
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {state.items.map((item) => (
          <div key={item.id} className="flex items-center gap-3 p-2">
            <Image
              src={item.image.startsWith('/') ? item.image : `/assets/${item.image}`}
              alt={item.title}
              width={50}
              height={60}
              className="w-24 h-20 object-cover rounded"
            />
            
            <div className="flex-1 min-w-0">
              <h5 className="font-medium text-base truncate">{item.title}</h5>
              <p className="text-sm text-gray-500">{item.author}</p>
              <p className="text-base font-semibold text-orange-600">£{item.price.toFixed(2)}</p>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Minus size={12} />
              </button>
              <span className="text-sm w-6 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Plus size={12} />
              </button>
            </div>
            
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-1 hover:bg-red-50 hover:text-red-600 rounded"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-200 pt-3 mt-3">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">£{state.total.toFixed(2)}</span>
        </div>
        
        <div className="space-y-2">
          <Link
            href="/cart"
            className="block w-full bg-black text-white text-center py-2 px-4 hover:bg-gray-800 transition"
          >
            View Cart
          </Link>
          <button
            onClick={checkout}
            className="block w-full bg-orange-500 text-white text-center py-2 px-4 hover:bg-orange-600 transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};