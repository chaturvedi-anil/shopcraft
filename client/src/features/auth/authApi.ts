import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  loadToken,
  removeToken,
  removeUser,
  saveToken,
  saveUser,
} from "../../utils/storage";
import { clearAuth, setAuth } from "./authSlice";

type User = { id: string; name: string; email: string };

export type LoginPayload = { email: string; password: string };

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export type AuthResponse = { token: string; user: User };

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers) => {
      const token = loadToken();
      if (token) headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginPayload>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setAuth(data));
          saveUser(data.user);
          saveToken(data.token);
        } catch (error) {
          console.log("login failed: ", error);
        }
      },
    }),

    register: builder.mutation<AuthResponse, RegisterPayload>({
      query: (payload) => ({
        url: "/register",
        method: "/POST",
        body: payload,
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setAuth(data));
          saveUser(data.user);
          saveToken(data.token);
        } catch (error) {
          console.log("register failed: ", error);
        }
      },
    }),

    getMe: builder.query({
      query: () => "/auth/me",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuth(data));
          saveUser(data);
        } catch (error) {
          console.log("getMe failed: ", error);
          dispatch(clearAuth());
          removeToken();
          removeUser();
        }
      },
    }),
  }),
});

export const { useGetMeQuery, useLoginMutation, useRegisterMutation } = authApi;
