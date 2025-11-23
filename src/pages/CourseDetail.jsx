import React from "react";
import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "../api/coursesApi";

export default function CourseDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetCourseByIdQuery(id);

  if (isLoading)
    return <p className="pt-20 text-center text-xl">Loading course...</p>;

  if (isError)
    return <p className="pt-20 text-center text-red-600">Failed to load course</p>;

  const course = data?.course;

  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">{course.title}</h1>

      <p className="text-gray-600 mt-2">{course.category}</p>

      <img
        src={course.thumbnail || "https://via.placeholder.com/600"}
        className="rounded my-6"
        alt="course"
      />

      <p className="text-lg">{course.description}</p>

      <p className="text-2xl font-bold text-indigo-600 mt-4">
        ₹ {course.price}
      </p>
    </div>
  );
}
