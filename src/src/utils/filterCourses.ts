import { Review } from "../models/interfaces/Review";

const filterCourses = (reviewData: Review[], courseId: string | undefined) => {
  if (courseId as string === "undefined") {
    return reviewData;
  }
  const filteredData: Review[] = [];
  
  reviewData.forEach(reviewEntry => {
    if (courseData.courseId === courseId as number) {
      filteredDataArray.push(element);
    }
  });
  return filteredDataArray;
}

export default filterCourses;
