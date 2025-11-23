import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
  const { id } = useParams();

  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">Course Details</h1>
      <p className="mt-4">Course ID: {id}</p>
    </div>
  );
}
