import { useQuery } from "@tanstack/react-query";
import CourseInfo from "./CourseInfo";
import Reviews from "./Reviews";
import { getCourses } from "../api/course";
import findCourse from "../utils/findCourse";

const CourseView = ({ courseId }: { courseId: string | undefined }) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getCourses(),
  });
  if (isLoading) {
    return <span className="text-white">Loading...</span>;
  }
  if (isError) {
    return <span className="text-white">Error: {error.message}</span>;
  }
  if (data === undefined || "msg" in data) {
    return <span className="text-white">No data</span>;
  }
  const course = findCourse(data.data, Number(courseId));
  if (course === undefined) {
    return <span className="text-white">No course</span>;
  }

  return (
    <>
      <CourseInfo course={course} />
      <Reviews course={course} />
    </>
  );
};

export default CourseView;
