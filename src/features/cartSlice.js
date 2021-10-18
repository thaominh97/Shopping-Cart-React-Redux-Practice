import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            const itemIndex = state.cartItems.findIndex( (item) => item.id === payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info("increased product quantity", {
                    position: "bottom-left",
                });
            } else {
                const tempProducts = {...payload, cartQuantity: 1};
                state.cartItems.push(tempProducts);
                toast.success("add new product to cart", {
                    position: "bottom-left",
                });
            }
        },
    },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;