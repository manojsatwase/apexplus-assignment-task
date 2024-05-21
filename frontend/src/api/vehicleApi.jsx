import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vehicleApi = createApi({
  reducerPath: 'vehicleApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/vehicles' }), // Ensuring base URL is correct
  tagTypes: ['Vehicle'],
  endpoints: (builder) => ({
    addNewVehicle: builder.mutation({
      query: (addVehicle) => ({
        url: 'add',
        method: 'POST',
        body: addVehicle,
      }),
      invalidatesTags: ['Vehicle'],
    }),
    fetchAllVehicle: builder.query({
      query: () => 'all',
      providesTags: ['Vehicle'],
    }),
    fetchVehicle: builder.query({
      query: (vehicleId) => `/${vehicleId}`,
      providesTags: ['Vehicle'],
    }),
    editVehicle: builder.mutation({
      query: (vehicleData) => ({
        url: `/${vehicleData.vehicleId}`,
        method: 'PUT', 
        body: vehicleData,
      }),
      invalidatesTags: ['Vehicle'],
    }),
    deleteVehicle: builder.mutation({
      query: (vehicleId) => ({
        url: `/${vehicleId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Vehicle'],
    }),
  }),
});

export const { 
   useFetchAllVehicleQuery,
   useFetchVehicleQuery,
   useAddNewVehicleMutation,
   useDeleteVehicleMutation,
   useEditVehicleMutation 
  } = vehicleApi;
