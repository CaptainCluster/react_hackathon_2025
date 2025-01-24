import ReviewComment from "./ReviewComment";
import { Card } from "@mui/joy/";
import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../../api/review";
import { Review } from "../../models/interfaces/Review";

const Reviews = ({ courseId }: { courseId: string | undefined }) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["Reviews"],
    queryFn: () => getReviews(Number(courseId)),
  });

  if (isLoading) {
    return <span className="text-black">Loading...</span>;
  }
  if (isError) {
    return <span className="text-black">Error: {error.message}</span>;
  }
  if (data === undefined || "msg" in data) {
    return <span className="text-black">No Reviews</span>;
  }
  const reviews: Review[] = data.data;
  console.log("reviews:", reviews);
  return (
    <Card
      variant="plain"
      sx={{
        bgcolor: "var(--darkGray)",
      }}
    >
      <div className="overflow-auto max-h-72 flex flex-col space-y-2 ">
        {reviews.map((reviewEntry, index) => (
          <ReviewComment key={index} reviewData={reviewEntry} />
        ))}
      </div>
    </Card>
  );
};

export default Reviews;
