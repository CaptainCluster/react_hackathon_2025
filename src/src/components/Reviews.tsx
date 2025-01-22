import ReviewComment from "./ReviewComment";
import Course from "../models/interfaces/Course";

const Reviews = ({ course }: { course: Course }) => {
  return (
    <div className="overflow-auto max-h-96 p-5 border border-gray-200 rounded-lg">
      {course.reviews.map((reviewEntry, index) => (
        <ReviewComment reviewData={reviewEntry} index={index} />
      ))}
    </div>
  );
};

export default Reviews;
