import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, payload) => {
            state.items = payload
        },
        addStatus: (state, payload) => {
            if (state.status === null) {
                state.status = payload;
            }
        }
    },
});
export const {addProducts, addStatus} = productsSlice.actions;
export default productsSlice.reducer;