"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { X,Plus,Minus } from "lucide-react";

const CartPage: React.FC = () => {
  const { state, removeFromCart, updateQuantity } = useCart();
  const [deliveryDate, setDeliveryDate] = useState<string>("");
  const [specialInstructions, setSpecialInstructions] = useState<string>("");

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  const handleDeliveryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryDate(e.target.value);
  };

  const handleSpecialInstructionsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSpecialInstructions(e.target.value);
  };

  return (
    <div className="container-fluid px-4 py-8">
      <div className="mb-8">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 px-2 text-center border-r border-gray-200">Image</th>
              <th className="py-4 px-2 text-center border-r border-gray-200">Product</th>
              <th className="py-4 px-2 text-center border-r border-gray-200">Price</th>
              <th className="py-4 px-2 text-center border-r border-gray-200">Quantity</th>
              <th className="py-4 px-2 text-center border-r border-gray-200">Total</th>
              <th className="py-4 px-2 text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {state.items.length > 0 ? (
              state.items.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-4 px-2 text-center border-r border-gray-200">
                    <div className="w-full h-32 relative p-2 mx-auto">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: "contain" }}
                      />
            
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center border-r border-gray-200">
                    <div>
                      <h3 className="text-xl">{item.title}</h3>
                      <p className="text-gray-600 text-base">{item.author}</p>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center border-r border-gray-200">£{item.price.toFixed(2)}</td>
                  <td className="py-4 px-2 text-center border-r border-gray-200">
                    <div className="flex items-center justify-center">
                      <button className="px-2 py-1"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
        
                      >
                        <Minus />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1"
                      >
                       <Plus />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center border-r border-gray-200">
                    £{(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-4 px-2 text-center">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500"
                    >
                      <X />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-8 text-center">
                  Your cart is empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mb-8 flex justify-between">
        <Link
          href="/shop"
          className="bg-black text-white py-3 px-6 hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
        <div>
          <button className="bg-black text-white py-3 px-6 hover:bg-gray-800 transition mr-4">
            Update Cart
          </button>
          <button className="bg-black text-white py-3 px-6 hover:bg-gray-800 transition">
            Clear Cart
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="border border-gray-200 p-6 mb-6">
            <h2 className="text-xl mb-4">Delivery Date</h2>
            <div className="mb-4">
              <label className="block mb-2">Pick a delivery date:</label> 
              <input
                type="date"
                className="border border-gray-200 p-2 w-full"
                value={deliveryDate}
                onChange={handleDeliveryDateChange}
              />
            </div>
            <p className="text-gray-600">
              We do not deliver during the week-end.
            </p>
          </div>

          <div className="border border-gray-200 p-6">
            <h2 className="text-xl font-medium mb-4">
              Special instructions for seller
            </h2>
            <textarea
              className="border border-gray-200 p-2 w-full h-32"
              value={specialInstructions}
              onChange={handleSpecialInstructionsChange}
            ></textarea>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="border border-gray-200 p-6">
            <h2 className="text-xl font-medium mb-4">Cart Totals</h2>
            <table className="w-full border-collapse border border-gray-200 mb-6">
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 border-r border-gray-200">Subtotal</td>
                <td className="py-4 px-4">£{state.total.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="py-4 px-4 border-r border-gray-200">Total</td>
                <td className="py-4 px-4">£{state.total.toFixed(2)}</td>
              </tr>
            </table>
            <Link
              href="/checkout"
              className="block text-center bg-black text-white py-3 px-4 w-1/2 hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
