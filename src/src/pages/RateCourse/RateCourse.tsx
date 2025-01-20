import { useParams } from "react-router-dom";
import findCourse from "../../utils/findCourse";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../api/course";
import CourseInformation from "./CourseInformation";
import RateForm from "./RateForm";

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
  if (data === undefined) {
    return <span className="text-white">No data</span>;
  }
  const courseData = findCourse(data.data, Number(courseId));
  
  return (
    <div className="w-screen grid justify-center">
      <div className="">
        <CourseInformation courseData={courseData}/>
        <RateForm />
      </div>
    </div>
  );
}

export default RateCourse;
