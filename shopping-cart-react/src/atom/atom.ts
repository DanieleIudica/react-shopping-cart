import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type CartItem = {
  id: number;
  quantity: number;
};

export const darkModeAtom = atomWithStorage("darkMode", false);

export const isCartOpenAtom = atom(false);

export const cartItemsAtom = atomWithStorage<CartItem[]>("shopping-cart", []);
