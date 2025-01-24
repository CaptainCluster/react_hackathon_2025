import { Review } from "../../models/interfaces/Review";
import { Avatar, Card, CardContent } from "@mui/joy/";

/* Component for displaying the review of a course given by a user. 
Component shows data defined in the Review-type 
found in src\models\interfaces\Review.ts*/
const ReviewComment = ({ reviewData }: { reviewData: Review }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <Card
            sx={{
              bgcolor: "var(--darkGray)",
            }}
            variant="plain"
            orientation="horizontal"
            className="focus:outline-none"
          >
            <Avatar size="lg" />
            <CardContent>
              <p className="font-bold text-sm text-white">{reviewData.name}</p>
              <div className="flex flex-row divide-x divide-white">
                <p className="text-xs text-white pr-2">{`Study year: ${reviewData.studyYear}`}</p>
                <p className="text-xs text-white pr-2 pl-2">
                  {Array(reviewData.stars).fill("⭐").join("")}
                </p>
                <p className="text-xs text-white pl-2">
                  {reviewData.studyField}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card
            sx={{
              bgcolor: "var(--lightGray)",
            }}
            variant="plain"
            className="focus:outline-none"
          >
            <CardContent orientation="vertical">
              <p className="text-xs text-gray-600">{`${reviewData.date}`}</p>
              <p className="font-bold text-sm">{reviewData.comment}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ReviewComment;
