import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const scenarioApi = createApi({
  reducerPath: 'scenarioApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/scenarios' }),
  tagTypes: ['Scenario'],
  endpoints: (builder) => ({
    newAddScenario: builder.mutation({
      query: (addScenario) => ({
        url: 'add',
        method: 'POST',
        body: addScenario,
      }),
      invalidatesTags: ['Scenario'],
    }),
    fetchAllScenarios: builder.query({
      query: () => 'all',
      providesTags: ['Scenario'],
    }),
    updateNumberOfVehicles: builder.mutation({
      query: ({ _id, numberOfVehicles }) => ({
        url: `addNumberVehicles`,
        method: 'PUT',
        body: {_id, numberOfVehicles },
      }),
      invalidatesTags: ['Scenario'],
    }),
   singleScenario: builder.query({
      query: (scenarioId) => `/${scenarioId}`,
      providesTags: ['Scenario'],
    }),
    editScenario: builder.mutation({
      query: ({scenarioId,scenarioData}) => ({
        url: `/${scenarioId}`,
        method: 'PUT',
        body: scenarioData,
      }),
      invalidatesTags: ['Scenario'],
    }),
    deleteScenario: builder.mutation({
      query: (scenarioId) => ({
        url: `/${scenarioId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Scenario'],
    }),
    deleteAllScenario: builder.mutation({
      query: () => ({
        url: '/',
        method: 'DELETE',
      }),
      invalidatesTags: ['Scenario'],
    }),
  }),
});

export const { 
    useNewAddScenarioMutation,
    useFetchAllScenariosQuery ,
    useUpdateNumberOfVehiclesMutation,
    useSingleScenarioQuery,
    useEditScenarioMutation,
    useDeleteScenarioMutation,
    useDeleteAllScenarioMutation
  } = scenarioApi;
