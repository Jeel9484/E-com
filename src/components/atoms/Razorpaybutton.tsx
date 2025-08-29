"use client";
import React from "react";

export default function RazorpayButton({ amount }: { amount: number }) {
  const handlePayment = async () => {
    // 1. create order
    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    const order = await res.json();

    // 2. configure razorpay checkout
    const options: any = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Next.js Demo",
      description: "Test Transaction",
      order_id: order.id,
      handler: async function (response: any) {
        const verifyRes = await fetch("/api/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
        const result = await verifyRes.json();
        if (result.success) {
          alert("✅ Payment Successful!");
        } else {
          alert("❌ Payment Verification Failed!");
        }
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Pay ₹{amount}
    </button>
  );
}
