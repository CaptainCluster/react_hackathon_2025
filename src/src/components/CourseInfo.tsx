import Course from "../models/interfaces/Course";

const CourseInfo = ({ course }: { course: Course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <div>
        {course.duration}
        {course.term}
        {course.teacher}
        {course.subject}
      </div>
    </div>
  );
};

export default CourseInfo;
