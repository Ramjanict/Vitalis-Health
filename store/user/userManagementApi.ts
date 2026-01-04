import { baseApi } from "../baseApi";
import { AdminUsersResponse, UserParams } from "./types/user";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<AdminUsersResponse, UserParams>({
      query: (params) => ({
        url: "/admin/users",
        method: "GET",
        params,
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetAllUsersQuery } = userManagementApi;
