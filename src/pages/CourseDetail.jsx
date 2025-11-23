import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetCourseByIdQuery } from "../api/coursesApi";
import { useEnrollCourseMutation } from "../api/coursesApi";

export default function CourseDetail() {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isError } = useGetCourseByIdQuery(id);
  const [enrollCourse, { isLoading: enrolling }] = useEnrollCourseMutation();


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
      {user ? (
                <button
                  onClick={() => enrollCourse(course._id)}
                  disabled={enrolling}
                  className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  {enrolling ? "Enrolling..." : "Enroll Now"}
                </button>
              ) : (
                <p className="mt-4 text-red-600">Please login to enroll.</p>
      )}
    </div>
  );
}
