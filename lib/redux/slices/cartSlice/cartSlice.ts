import { CartType } from '@/lib/validations/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Types */
export interface CartState {
    items: CartType[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CartState = {
    items: [],
    status: 'idle',
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        addItem: (state, action: PayloadAction<CartType>) => {
            // 檢查購物車中是否已有該商品
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            const itemExists = existingItemIndex !== -1;


            if (itemExists) {
                // 如果已有，則增加商品的數量
                state.items[existingItemIndex].quantity += action.payload.quantity;
            } else {
                // 如果沒有，則加入新的商品
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            // 根據 id 移除商品
            state.items = state.items.filter(item => item.id !== action.payload.toString());
        },
        updateItem: (state, action: PayloadAction<CartType>) => {
            // 根據 id 更新商品
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        clearCart: (state) => {
            // 清空購物車
            state.items = [];
        },
    },
    extraReducers: (builder) => {

    },
});
