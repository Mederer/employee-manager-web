import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Employee } from "../employees/types";

export const employeeManagerApi = createApi({
  reducerPath: "employeeManagerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Employee"],
  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => "employees",
      providesTags: ["Employee"],
    }),
    getEmployee: builder.query<Employee, string>({
      query: (id) => `employees/${id}`,
      providesTags: ["Employee"],
    }),
  }),
});

export const { useGetEmployeesQuery, useGetEmployeeQuery } = employeeManagerApi;
