"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';

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
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  console.log('Cart Reducer - Action:', action.type, JSON.stringify(action, null, 2));
  console.log('Cart Reducer - Current State:', JSON.stringify(state, null, 2));
  
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Update quantity if item already exists
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        
        const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        
        const newState = {
          ...state,
          items: updatedItems,
          total: newTotal,
          itemCount: newItemCount,
        };
        console.log('Cart Reducer - Updated existing item, new state:', JSON.stringify(newState, null, 2));
        return newState;
      } else {
        // Add new item
        const newItems = [...state.items, action.payload];
        const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const newItemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
        
        const newState = {
          ...state,
          items: newItems,
          total: newTotal,
          itemCount: newItemCount,
        };
        console.log('Cart Reducer - Added new item, new state:', JSON.stringify(newState, null, 2));
        return newState;
      }
    }
    
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      
      const newState = {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      };
      console.log('Cart Reducer - Removed item, new state:', JSON.stringify(newState, null, 2));
      return newState;
    }
    
    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter(item => item.quantity > 0); // Remove items with 0 quantity
      
      const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const newItemCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      
      const newState = {
        ...state,
        items: updatedItems,
        total: newTotal,
        itemCount: newItemCount,
      };
      console.log('Cart Reducer - Updated quantity, new state:', JSON.stringify(newState, null, 2));
      return newState;
    }
    
    case 'CLEAR_CART':
      console.log('Cart Reducer - Cleared cart');
      return initialState;
    
    case 'LOAD_CART':
      console.log('Cart Reducer - Loaded cart from localStorage:', JSON.stringify(action.payload, null, 2));
      return action.payload;
    
    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
    console.log('Cart Provider - Saved to localStorage:', JSON.stringify(state, null, 2));
  }, [state]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    console.log('Cart Provider - Adding to cart:', JSON.stringify(item, null, 2));
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...item, quantity: 1 }
    });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
