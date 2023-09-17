import { createSlice } from "@reduxjs/toolkit"

import { fakeProductList, fakeStoreList } from "@/lib/fakerData/fakerData"

const initialState = {
  productList: fakeProductList,
  storeList: fakeStoreList,
}

export const storeSlice = createSlice({
  name: "storeList",
  initialState,
  reducers: {},
})

export default storeSlice.reducer
