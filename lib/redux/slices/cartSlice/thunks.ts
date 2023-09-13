/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
// import { fetchProductById } from './fetchProductById'
// import { selectCartItems } from './selectors'
// import { cartSlice } from './cartSlice'
import type { ReduxThunkAction } from '@/lib/redux'

// 這個 thunk 用來異步地添加產品到購物車
export const addToCartAsync = createAppAsyncThunk(
    'cart/addProduct',
    async (productId: number) => {
        // const response = await fetchProductById(productId)

        // 返回值會成為 fulfilled action 的 payload
        // return response.data
    }
)

// 這個 thunk 用來在購物車內的某個產品數量為奇數時，添加更多的該產品
export const addIfOddAsync =
    (productId: number): ReduxThunkAction =>
        (dispatch, getState) => {
            // const cartItems = selectCartItems(getState())
            // const targetItem = cartItems.find(item => item.id === productId)

            // if (targetItem && targetItem.quantity % 2 === 1) {
            //     dispatch(cartSlice.actions.incrementItemQuantity(productId))
            // }
        }
