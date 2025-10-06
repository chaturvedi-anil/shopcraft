import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  createdBy: number;
};

interface ProductState {
  myProducts: Product[];
}

const initialState: ProductState = {
  myProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setMyProducts: (state, action: PayloadAction<Product[]>) => {
      state.myProducts = action.payload;
    },
    clearMyProducts: (state) => {
      state.myProducts = [];
    },
  },
});

export const { setMyProducts, clearMyProducts } = productSlice.actions;
export default productSlice.reducer;
