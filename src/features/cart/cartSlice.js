import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload:item in the form of object
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload: pizzaId;
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload:pizzaId
      const reqItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      reqItem.quantity++;
      reqItem.totalPrice = reqItem.quantity * reqItem.price;
    },
    decreaseItemQuantity(state, action) {
      //payload:pizzaId
      const reqItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      reqItem.quantity--;
      reqItem.totalPrice = reqItem.quantity * reqItem.price;

      //you can also do this after if() cartSlice.caseReducers.deleteItem(state,action) video 320;
      if (reqItem.quantity === 0)
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload,
        );
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (store) => store.cart.cart;

export const getId = (store) => store.cart.cart.map((item) => item.pizzaId);

export const getTotalPrice = (store) =>
  store.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
