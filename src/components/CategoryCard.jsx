import React from "react";

export default function CategoryCard({ name, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white border p-5 rounded-xl shadow hover:shadow-lg transition text-center"
    >
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
}
