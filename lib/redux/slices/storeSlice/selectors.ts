// selectors.ts
import type { ReduxState } from "@/lib/redux"
import { OpenStatus, StoreType } from "@/lib/validations/store"

// 取得所有的店鋪列表
export const selectAllStores = (state: ReduxState) => state.storeList.storeList

// 取得開放中的店鋪
export const selectOpenStores = (state: ReduxState) => {
  return state.storeList.storeList.filter(
    (store) => store.openStatus === OpenStatus.OPEN
  )
}

// 取得指定 ID 的店鋪
export const selectStoreById = (
  state: ReduxState,
  id: string
): StoreType | undefined => {
  return state.storeList.storeList.find((store) => store.id === id)
}

// 取得每個店鋪中的產品數量
export const selectProductCountByStore = (
  state: ReduxState
): Record<string, number> => {
  const productCount: Record<string, number> = {}
  for (const store of state.storeList.storeList) {
    productCount[store.id] = store.products ? store.products.length : 0
  }
  return productCount
}

// 取得每個開放狀態（OPEN, CLOSED, COMING_SOON）的店鋪數量
export const selectStoreCountByStatus = (
  state: ReduxState
): Record<string, number> => {
  const statusCount: Record<string, number> = {
    OPEN: 0,
    CLOSED: 0,
    COMING_SOON: 0,
  }
  for (const store of state.storeList.storeList) {
    statusCount[store.openStatus]++
  }
  return statusCount
}
