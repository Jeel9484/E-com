"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";

export interface CartItem {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  oldPrice?: number | null;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartState };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        const newTotal = updatedItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        const newItemCount = updatedItems.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

        return {
          ...state,
          items: updatedItems,
          total: newTotal,
          itemCount: newItemCount,
        };
      } else {
        const newItems = [...state.items, action.payload];
        const newTotal = newItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        const newItemCount = newItems.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

        return {
          ...state,
          items: newItems,
          total: newTotal,
          itemCount: newItemCount,
        };
      }
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const newItemCount = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case "UPDATE_QUANTITY": {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        )
        .filter((item) => item.quantity > 0);

      const newTotal = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const newItemCount = updatedItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      };
    }

    case "CLEAR_CART":
      return initialState;

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  checkout: () => void; // 👈 Razorpay integration
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: parsedCart });
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    dispatch({
      type: "ADD_ITEM",
      payload: { ...item, quantity: 1 },
    });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // 👇 Razorpay Checkout Function
  const checkout = async () => {
    if (state.total <= 0) {
      alert("Cart is empty!");
      return;
    }

    // 1. Order create API call
    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: state.total }),
    });
    const data = await res.json();

    if (!data?.id) {
      alert("Failed to create order");
      return;
    }

    // 2. Open Razorpay Checkout
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: data.amount,
      currency: "INR",
      name: "My Shop",
      description: "Checkout Payment",
      order_id: data.id,
      handler: function (response: any) {
        alert("Payment Successful!");
        console.log("Payment success:", response);
        clearCart();
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
