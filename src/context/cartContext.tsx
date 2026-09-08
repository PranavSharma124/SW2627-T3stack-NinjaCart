"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { getCartProducts } from "@/actions/product/get-cart-products";

export type CartItem = {
  productId: string;
  name: string;
  price: string;
  imageUrl: string;
  quantity: number;
  availableQuantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  refreshStock: () => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const hasLoadedCart = useRef(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("ninjacart-cart");

    if (storedCart) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setItems(JSON.parse(storedCart));
    }

    hasLoadedCart.current = true;
  }, []);

  useEffect(() => {
    if (!hasLoadedCart.current) {
      return;
    }

    localStorage.setItem("ninjacart-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (item: CartItem) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.productId === item.productId,
      );

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.productId === item.productId
            ? {
                ...cartItem,
                quantity: Math.min(
                  cartItem.availableQuantity,
                  cartItem.quantity + item.quantity,
                ),
              }
            : cartItem,
        );
      }

      return [...currentItems, item];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.productId !== productId),
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: Math.min(item.availableQuantity, Math.max(1, quantity)),
            }
          : item,
      ),
    );
  };

  const refreshStock = useCallback(async () => {
    if (items.length === 0) {
      return;
    }

    const productIds = items.map((item) => item.productId);
    const products = await getCartProducts(productIds);

    setItems((currentItems) =>
      currentItems
        .map((item) => {
          const product = products.find(
            (product) => product.id === item.productId,
          );

          if (!product || product.quantity <= 0) {
            return null;
          }

          return {
            ...item,
            availableQuantity: product.quantity,
            quantity: Math.min(item.quantity, product.quantity),
          };
        })
        .filter((item): item is CartItem => item !== null),
    );
  }, [items]);

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        refreshStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
