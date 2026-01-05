import { baseApi } from "../baseApi";
import { DashboardResponse } from "./types/Dashboard";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStart: builder.query<DashboardResponse, void>({
      query: () => ({
        url: "/admin/dashboard",
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),
  }),
});

export const { useGetDashboardStartQuery } = dashboardApi;
