import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={course.thumbnail || "https://via.placeholder.com/300"}
        alt={course.title}
        className="rounded mb-3"
      />

      <h2 className="text-xl font-semibold">{course.title}</h2>
      <p className="text-gray-600">{course.category}</p>

      <p className="mt-2 font-bold text-indigo-600">
        ₹ {course.price}
      </p>

      <Link
        to={`/courses/${course._id}`}
        className="block mt-3 bg-indigo-600 text-white text-center py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
