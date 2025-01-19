import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../api/course";
import findCourse from "../utils/findCourse";
import { useParams } from "react-router-dom";
import ReviewComment from "../components/ReviewComment";

const Course = () => {
  const courseId: string | undefined = useParams().id;

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
  if (data === undefined) {
    return <span className="text-white">No data</span>;
  }
  const course = findCourse(data.data, Number(courseId));

  return (
    <div>
      <div>
        {course.reviews.map((reviewEntry, index) => (
          <ReviewComment reviewData={reviewEntry} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Course;
