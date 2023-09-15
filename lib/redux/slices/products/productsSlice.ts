import { createSlice } from "@reduxjs/toolkit"

import { fakeProductList } from "@/lib/fakerData/fakerData"

const initialState = {
  productList: fakeProductList,
}

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
})

export default productSlice.reducer
