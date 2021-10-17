import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    item: [],
    status: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, payload) => {
            state.item = payload ;
        },
        addStatus: (state, payload) => {
            if (state.status === null) {
                state.status = payload;
            }
        }
    },
});
export const { addProducts, addStatus } = productsSlice.actions;
export default productsSlice.reducer;