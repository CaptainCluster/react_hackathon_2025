import { useQuery } from "@tanstack/react-query";
import CourseInfo from "./CourseInfo";
import Reviews from "./Reviews";
import { getCourses } from "../../api/course";
import findCourse from "../../utils/findCourse";
import { Button } from "@mui/joy/";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { NavLink } from "react-router-dom";

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

  const numReviews = courseData.reviews.length;
  const showReviews = numReviews > 0;
  return (
    <>
      <div className="p-2 pt-16 mx-2 flex flex-col items-start justify-start mb-4 gap-4">
        <NavLink to="/">
          <Button
            sx={{
              bgcolor: "#2C2C2C",
            }}
            startDecorator={<KeyboardArrowLeft />}
          >
            Back
          </Button>
        </NavLink>

        <div className="flex flex-col gap-2 max-w-3xl min-w-md md:min-w-3xl">
          <CourseInfo course={courseData} numReviews={numReviews} />
          <h3 className="font-bold text-xl">
            {showReviews ? `${numReviews} Reviews` : "No reviews"}
          </h3>
          {showReviews ? <Reviews course={courseData} /> : ""}
        </div>
        <div className="flex justify-center">
          <NavLink to={`/rate/${courseId}`}>
            <Button
              size="lg"
              sx={{
                bgcolor: "#2C2C2C",
              }}
            >
              Review Course
            </Button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default CourseView;
