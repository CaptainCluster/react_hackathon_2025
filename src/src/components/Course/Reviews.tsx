import ReviewComment from "./ReviewComment";
import Course from "../../models/interfaces/Course";
import { Card } from "@mui/joy/";

const Reviews = ({ course }: { course: Course }) => {
  return (
    <Card
      variant="plain"
      sx={{
        bgcolor: "var(--darkGray)",
      }}
    >
      <div className="overflow-auto max-h-72 flex flex-col space-y-2 ">
        {course.reviews.map((reviewEntry, index) => (
          <ReviewComment reviewData={reviewEntry} index={index} />
        ))}
      </div>
    </Card>
  );
};

export default Reviews;
