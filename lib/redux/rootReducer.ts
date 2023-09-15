/* Instruments */
import { cartSlice, productSlice } from "./slices"

export const reducer = {
  cart: cartSlice.reducer,
  products: productSlice.reducer
}
