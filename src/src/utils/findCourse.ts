import Course from "../models/interfaces/Course";

const findCourse = (courseData: Course[], courseId: number) => {
  let wantedEntry;
  courseData.map(courseEntry => {
    if (courseEntry.id == courseId) {
      wantedEntry = courseEntry;
    }
  });
  return wantedEntry
}

export default findCourse;
