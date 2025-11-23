import { useGetCategoriesQuery, useGetCoursesQuery } from "../api/coursesApi";
import CategoryCard from "../components/CategoryCard";
import { useNavigate } from "react-router-dom";
import CourseCard from "../components/CourseCard";

export default function Home() {
  const { data: coursesData, isLoading: loadingCourses } = useGetCoursesQuery();
  const { data: categoriesData, isLoading: loadingCats } = useGetCategoriesQuery();

  const navigate = useNavigate();

  if (loadingCourses || loadingCats)
    return <p className="pt-20 text-center text-xl">Loading...</p>;

  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto">

      {/* Featured Courses */}
      <h1 className="text-3xl font-bold mb-6">Trending Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {coursesData?.courses?.slice(0, 3)?.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>


      {/* Category Section */}
      <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>

      <div className="flex space-x-4 overflow-x-auto pb-3">
            {categoriesData?.categories?.map((cat) => (
                <div className="flex-none w-40">
                <CategoryCard
                    key={cat}
                    name={cat}
                    onClick={() => navigate(`/categories/${cat}`)}
                />
                </div>
            ))}
        </div>


    </div>
  );
}
