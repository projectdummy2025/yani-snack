import { useState, useCallback } from 'react';
import type { CartItem } from '../types/cartType';

let globalCartCount = 2;

export function useCartManager() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const addToCart = useCallback((itemName: string) => {
    globalCartCount += 1;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === itemName);
      if (existing) {
        return prev.map((item) =>
          item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: crypto.randomUUID(), name: itemName, quantity: 1 }];
    });

    setToast(`10 pcs ${itemName} ditambahkan ke nampan.`);
    setTimeout(() => setToast(null), 2500);
  }, []);

  return {
    cartCount: globalCartCount,
    cartItems,
    toast,
    addToCart
  };
}
