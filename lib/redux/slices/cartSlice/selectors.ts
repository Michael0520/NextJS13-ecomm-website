/* Instruments */
import type { ReduxState } from '@/lib/redux'

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const selectCartState = (state: ReduxState) => state.cart

export const selectCartItems = (state: ReduxState) => state.cart.items

export const selectCartStatus = (state: ReduxState) => state.cart.status

export const selectTotalItemsInCart = (state: ReduxState) => {
    return state.cart.items.reduce((acc, item) => acc + item.quantity, 0);
}
export const selectTotalPriceInCart = (state: ReduxState) => {
    return state.cart.items.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
}

