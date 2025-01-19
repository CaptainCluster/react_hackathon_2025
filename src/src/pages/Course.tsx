import { useParams } from "react-router-dom";
import CourseView from "../components/CourseView";

const Course = () => {
  const courseId: string | undefined = useParams().id;

  return <CourseView courseId={courseId} />;
};

export default Course;