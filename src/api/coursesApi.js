import { apiSlice } from "./apiSlice";

export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getCourses: builder.query({
      query: () => "/courses",
      providesTags: ["Courses"],
    }),

    getCategories: builder.query({
      query: () => "/courses/categories",
      providesTags: ["Categories"],
    }),

    getCourseById: builder.query({
      query: (id) => `/courses/${id}`,
      providesTags: (id) => [{ type: "CourseDetails", id }],
    }),

    getCoursesByCategory: builder.query({
      query: (category) => `/courses?category=${category}`,
      providesTags: ["Courses"],
    }),
    enrollCourse: builder.mutation({
      query: (courseId) => ({
        url: `/courses/${courseId}/enroll`,
        method: "POST",
      }),
      invalidatesTags: ["Courses", "CourseDetails"],
    }),
    createCourse: builder.mutation({
      query: (formData) => ({
        url: "/courses",
        method: "POST",
        body: formData,
      }),
    }),

  }),
});

export const {
  useGetCoursesQuery,
  useGetCategoriesQuery,
  useGetCourseByIdQuery,
  useGetCoursesByCategoryQuery,
  useEnrollCourseMutation,
  useCreateCourseMutation,
} = coursesApi;
