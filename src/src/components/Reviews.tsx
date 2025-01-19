import ReviewComment from "./ReviewComment";
import Course from "../models/interfaces/Course";

const Reviews = ({ course }: { course: Course }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <div>
        {course.reviews.map((reviewEntry, index) => (
          <ReviewComment reviewData={reviewEntry} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
