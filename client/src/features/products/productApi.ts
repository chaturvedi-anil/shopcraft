import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loadToken } from "../../utils/storage";
import type { Product } from "./productSlice";

export type AddProductPayload = {
  name: string;
  price: number;
  description: string;
  category: string;
};

export type UpdateProductPayload = {
  id: number;
  price?: number;
  description?: string;
  category?: string;
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers) => {
      const token = loadToken();
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),

    addProduct: builder.mutation<Product, AddProductPayload>({
      query: (payload) => ({
        url: "/products",
        method: "POST",
        body: payload,
      }),
    }),

    getMyProduct: builder.query<Product[], void>({
      query: () => "/me/products",
    }),

    deleteProduct: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/products/:${id}`,
        method: "DELETE",
      }),
    }),

    updateProduct: builder.mutation<Product, UpdateProductPayload>({
      query: ({ id, ...payload }) => ({
        url: `/products/:${id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useGetMyProductQuery,
  useUpdateProductMutation,
} = productApi;
