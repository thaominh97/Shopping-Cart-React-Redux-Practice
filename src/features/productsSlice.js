import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            const {payload} = action;
            state.items = payload;
        },
        addStatus: (state, action) => {
            const {payload} = action;
            if (state.status === null) {
                state.status = payload;
            }
        }
    },
});
export const {addProducts, addStatus} = productsSlice.actions;
export default productsSlice.reducer;