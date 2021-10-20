import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
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
                toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`, {
                    position: "bottom-left",
                });
            } else {
                const tempProducts = {...payload, cartQuantity: 1};
                state.cartItems.push(tempProducts);
                toast.success(`${payload.name} added to cart`, {
                    position: "bottom-left",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseCart: (state, {payload}) => {
            const itemIndex = state.cartItems.findIndex( (item) => item.id === payload.id);
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.info(`Decreased ${state.cartItems[itemIndex].name} cart quantity`, {
                    position: "bottom-left",
                });
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem.id !== payload.id
                )
                state.cartItems = nextCartItems;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

                toast.error(`${payload.name} remove from cart`, {
                    position: "bottom-left",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, {payload}) => {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== payload.id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.error(`${payload.name} remove from cart`, {
                position: "bottom-left",
            });
        },
        clearCart: (state, {payload}) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            toast.error("Clear Cart", {
                position: "bottom-left",
            });
        },
        getTotals: (state, {payload}) => {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                total: 0,
                quantity: 0
            });
            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        }
    },
});
export const { addToCart, decreaseCart, removeFromCart, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;