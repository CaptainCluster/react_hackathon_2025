import { useParams } from "react-router-dom";
import CourseView from "../components/CourseView";

const Course = () => {
  let { id } = useParams();

  return (
    <>
      <CourseView />
    </>
  );
};

export default Course;
