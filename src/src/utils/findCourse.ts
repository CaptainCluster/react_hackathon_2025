import Course from "../models/interfaces/Course";

const findCourse = (
  courseData: Course[],
  courseId: number
): Course | undefined => {
  return courseData.find((courseEntry) => courseEntry.id === courseId);
};

export default findCourse;
