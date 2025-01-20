import Course from "../../models/interfaces/Course";

const CourseInfo = ({ course }: { course: Course }) => {
  return (
    <div className="p-5 border border-gray-200 rounded-lg">
      <h1>{course.name}</h1>
      <div className="grid grid-cols-2">
        <p className="additional-info">{course.duration}</p>
        <p className="additional-info">{course.term}</p>
        <p className="additional-info">{course.teacher}</p>
        <p className="additional-info">{course.subject}</p>
      </div>
    </div>
  );
};

export default CourseInfo;
