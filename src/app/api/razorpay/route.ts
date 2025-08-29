import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount } = body;

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      throw new Error("Missing Razorpay env keys");
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: Math.round(Number(amount) * 100), 
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    };

    const order = await instance.orders.create(options);
    return NextResponse.json(order);
  } catch (err: any) {
    console.error("Razorpay Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
