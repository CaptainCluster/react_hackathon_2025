import { Card, CardContent, Stack } from "@mui/joy";
import averageReviewScore from "../../utils/averageReviewScore";
import getCourseStars from "../../utils/getCourseStars";
import Course from "../../models/interfaces/Course";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import reviewColor from "../../utils/reviewColor";

const ReviewSummary = ({
  course,
  numReviews,
}: {
  course: Course;
  numReviews: number;
}) => {
  const avgScore = averageReviewScore(getCourseStars(course)).toFixed(1);
  const color = reviewColor(Number(avgScore));
  const showReviews = numReviews > 0;

  return (
    <div className="ml-[12.5%] sm:ml-0">
      {showReviews ? (
        <Card
          sx={{
            bgcolor: color,
            maxWidth: 270,
          }}
          variant="outlined"
        >
          <CardContent className="flex justify-center">
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <div className="flex flex-row gap-1">
                <p className="text-[32px] sm:text-[44px] font-bold text-white">
                  {avgScore}
                </p>
                <div className="p-2">
                  <StarBorderIcon
                    sx={{ color: "white", height: "40px", width: "40px" }}
                  ></StarBorderIcon>
                </div>
              </div>

              <p className="text-[14px] sm:text-[16px] text-lg text-white">
                {numReviews} Reviews
              </p>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        // <div className="flex place-items-center">No reviews available</div>
        ""
      )}
    </div>
  );
};

export default ReviewSummary;
