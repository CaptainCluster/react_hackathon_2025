import { Card } from "@mui/joy";

const ReviewSummary = ({ numReviews }: { numReviews: number }) => {
  return (
    <>
      <Card
        sx={{
          bgcolor: "#1DC611",
        }}
      >
        <div>{numReviews} Reviews</div>
      </Card>
    </>
  );
};

export default ReviewSummary;
