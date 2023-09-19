/* Instruments */
import { cartSlice, storeSlice } from "./slices"

export const reducer = {
  cart: cartSlice.reducer,
  storeList: storeSlice.reducer,
}
