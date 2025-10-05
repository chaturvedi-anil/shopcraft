import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { loadToken } from "../../utils/storage";

export type AddProductPayload = {
  name: string;
  price: number;
  descriptiom: string;
  category: string;
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
    addProduct: builder.mutation({
      query: (payload) => ({
        url: "/products",
        method: "POST",
        body: payload,
      }),
    }),

    getMyProduct: builder.query({
      query: () => "/me/products",
    }),

    deleteProduct: builder.mutation({
      query: (id: number) => ({
        url: `/products/:${id}`,
        method: "DELETE",
      }),
    }),

    updateProduct: builder.mutation({
      query: (id: number, payload: any) => ({
        url: `/products/:${id}`,
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetMyProductQuery,
  useUpdateProductMutation,
} = productApi;
