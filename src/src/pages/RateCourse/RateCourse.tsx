import { useParams } from "react-router-dom";
import findCourse from "../../utils/findCourse";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../api/course";
import CourseInfo from "../../components/Course/CourseInfo";
import RateForm from "./RateForm";
import { Button } from "@mui/joy";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";

const RateCourse = () => {
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
  if (data === undefined || "msg" in data) {
    return <span className="text-white">No data</span>;
  }
  const courseData = findCourse(data.data, Number(courseId));
  if (courseData === undefined) {
    return <span className="text-white">No course</span>;
  }

  return (
    <div className="w-screen grid justify-center">
      <div className="m-2">
        <Button
          sx={{
            bgcolor: "#2C2C2C",
          }}
          startDecorator={<KeyboardArrowLeft />}
          onClick={() => (window.location.href = `/course/${courseId}`)}
        >
          Back to course view
        </Button>
      </div>
      <CourseInfo course={courseData} />
      <RateForm />
    </div>
  );
};

export default RateCourse;
