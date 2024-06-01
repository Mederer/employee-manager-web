import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Employee } from "../employees/types";

export const employeeManagerApi = createApi({
  reducerPath: "employeeManagerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => "employees",
    }),
  }),
});

export const { useGetEmployeesQuery } = employeeManagerApi;
