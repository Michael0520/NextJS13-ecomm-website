
import { createSlice } from '@reduxjs/toolkit';
import { fakeProductList } from '@/lib/fakerData/fakerData';

const initialState = {
    productList: fakeProductList,
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // 這裡可以添加更多的 reducer
    },
});

export default productSlice.reducer;
