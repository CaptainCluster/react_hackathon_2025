import ReviewComment from "./ReviewComment";
import Course from "../models/interfaces/Course";

const Reviews = ({ course }: { course: Course }) => {
  return (
    <div className="p-5 border border-gray-200 rounded-lg">
      <h3 className="border-b border-gray-200">Reviews</h3>
      <div className="mt-2">
        {course.reviews.map((reviewEntry, index) => (
          <ReviewComment reviewData={reviewEntry} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
