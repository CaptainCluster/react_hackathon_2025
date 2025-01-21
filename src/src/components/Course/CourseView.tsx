import { useQuery } from "@tanstack/react-query";
import CourseInfo from "./CourseInfo";
import Reviews from "../Reviews";
import { getCourses } from "../../api/course";
import findCourse from "../../utils/findCourse";
import { Button } from "@mui/joy/";

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
  const courseData = findCourse(data.data, Number(courseId));
  if (courseData === undefined) {
    return <span className="text-white">No course</span>;
  }

  return (
    <>
      <div className="grid grid-rows-2 gap-2">
        <CourseInfo course={courseData} />
        <Reviews course={courseData} />
        <Button
          sx={{
            bgcolor: "#2C2C2C", // Ensure a consistent color
          }}
          onClick={() => (window.location.href = `/rate/${courseId}`)}
        >
          Review Course
        </Button>
      </div>
    </>
  );
};

export default CourseView;
