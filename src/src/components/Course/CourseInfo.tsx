import Course from "../../models/interfaces/Course";
import { Card, CardContent, Stack, Avatar } from "@mui/joy/";

const CourseInfo = ({ course }: { course: Course }) => {
  return (
    <Card
      variant="plain"
      sx={{
        bgcolor: "var(--lightGray)",
      }}
    >
      <div className="grid grid-cols-2 gap-6">
        <Stack
          direction="column"
          spacing={1}
          sx={{
            alignItems: "flex-start",
          }}
        >
          <h1 className="font-bold text-2xl ">{course.name}</h1>
          <div>
            <p className="text-sm">Duration</p>
            <p className="font-bold text-base">{course.duration}</p>
          </div>
          <div>
            <p className="text-sm">Teaching period</p>
            <p className="font-bold text-base">{course.term}</p>
          </div>
          <div>
            <p className="text-sm">Organizer</p>
            <p className="font-bold text-base">{course.subject}</p>
          </div>
        </Stack>
        <div className="grid grid-rows-2">
          <p className="additional-info">Rating component here</p>
          <div>
            <Card
              sx={{
                bgcolor: "var(--lightGray)",
              }}
              variant="plain"
              orientation="horizontal"
              className="focus:outline-none"
            >
              <Avatar size="lg" />
              <CardContent>
                <p className="text-sm">Current teacher</p>
                <p className="font-bold text-base">{course.teacher}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseInfo;
