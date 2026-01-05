import { baseApi } from "../baseApi";
import { SingleUserResponse, UpdateUserRequest } from "./types/singleUser";
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
    getSingleUser: builder.query<SingleUserResponse, string>({
      query: (id) => ({
        url: `/admin/users/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),
    updateSingleUser: builder.mutation<
      void,
      { id: string; data: UpdateUserRequest }
    >({
      query: ({ id, data }) => ({
        url: `/admin/users/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteSingleUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/admin/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateSingleUserMutation,
  useDeleteSingleUserMutation,
} = userManagementApi;
