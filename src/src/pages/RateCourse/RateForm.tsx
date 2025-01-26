import CourseScore from "./CourseScore";
import { StudyFieldOption } from "../../models/enums/StudyFieldOption";
import { StudyYearOption } from "../../models/enums/StudyYearOption";
// import { FeedbackTags } from "../../models/enums/FeedbackTags";
// This should be added if you wanna find a fun way to add many tags
import { useState } from "react";
import { addReview } from "../../api/review";
import { Review } from "../../models/interfaces/Review";
import Course from "../../models/interfaces/Course";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Option,
  Select,
  Textarea,
} from "@mui/joy";
import FailResponse from "../../models/interfaces/response/FailResponse";

/* TODO:
  - add FeedbackTags to the form
*/
const RateForm = ({ courseData }: { courseData: Course }) => {
  const reviewAmount = courseData.reviews.length;
  const [currentStudyField, setCurrentStudyField] = useState<
    StudyFieldOption | undefined
  >(undefined);
  const [currentStudyStage, setCurrentStudyStage] = useState<
    StudyYearOption | undefined
  >(undefined);
  const [selectedScore, setSelectedScore] = useState<number>(0);
  const [anonymity, setAnonymity] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  // function to get keys of an enum
  function getEnumKeys<
    T extends string,
    TEnumValue extends string | number
  >(enumVariable: { [key in T]: TEnumValue }): Array<T> {
    return Object.keys(enumVariable) as Array<T>;
  }

  // function to handle the form submission
  async function handleEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());

    // Study stage or study field can not be undefined in review
    if (currentStudyStage === undefined) {
      return;
    }
    if (currentStudyField === undefined) {
      return;
    }

    const review: Review = {
      id: Number(reviewAmount) + 1,
      name:
        formData["anon-post"] === "on"
          ? "anonymous"
          : (formData["name"] as string),
      studyYear: currentStudyStage,
      studyField: currentStudyField,
      anonymity: formData["anon-post"] === "on",
      stars: Number(selectedScore),
      comment: formData["comment"] as string,
      date: new Date(),
    };

    const response = await addReview(courseData.id, review);
    
    // True if the response contains an error
    if ("msg" in response) {
      alert("Error submitting review. Please try again.");
      console.error("Error submitting review.");
      return;
    }

    // Upon successful review submission
    alert("Review submitted successfully!");
    console.log(`Review submitted successfully: ${response}`);
  }

  return (
    <Card
      className="mt-3"
      variant="plain"
      sx={{
        bgcolor: "#e3e3e3",
      }}
    >
      <form onSubmit={handleEvent}>
        <h1 className="font-bold text-3xl text-black">Review course</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="my-1 font-semibold text-black" htmlFor="name">
              Name
              <Input
                placeholder="Name"
                className="my-2 w-full"
                type="text"
                id="name"
                name="name"
                required
                value={anonymity ? "anonymous" : name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />{" "}
              <div className="grid grid-cols-1">
                <Checkbox
                  label="Post anonymously"
                  id="anon-post"
                  name="anon-post"
                  onChange={(e) => (
                    setAnonymity(e.target.checked),
                    e.target.checked ? setName("anonymous") : setName("")
                  )}
                />
              </div>
            </label>
          </div>
          <div className="col-span-1">
            <p className="my-2 font-semibold">
              Give rating (1 as worst and 5 as best)
              <CourseScore
                setSelectedScore={(score: number) => setSelectedScore(score)}
              />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 my-4">
          <div className="col-span-1">
            <label
              className="my-1 font-semibold text-black"
              htmlFor="studyfield"
            >
              Select studyfield <br />
              <Select
                sx={{ mt: 1 }}
                placeholder="Select a studyfield"
                required
                value={currentStudyField || ""}
                onChange={(_, newValue: string | null) => {
                  setCurrentStudyField(newValue as StudyFieldOption);
                }}
              >
                {getEnumKeys(StudyFieldOption).map((key) => (
                  <Option key={key} value={StudyFieldOption[key]}>
                    {StudyFieldOption[key]}
                  </Option>
                ))}
              </Select>
            </label>
          </div>
          <div className="col-span-1">
            <label
              className="my-2 font-semibold text-black"
              htmlFor="study-stage"
            >
              Current stage of studies
              <Select
                sx={{ mt: 1 }}
                placeholder="Select stage"
                required
                value={currentStudyStage || ""}
                onChange={(_, newValue: string | null) => {
                  setCurrentStudyStage(newValue as StudyYearOption);
                }}
              >
                {getEnumKeys(StudyYearOption).map((key) => (
                  <Option key={key} value={StudyYearOption[key]}>
                    {StudyYearOption[key]}
                  </Option>
                ))}
              </Select>
            </label>
          </div>
        </div>
        <div className="grid my-1">
          <label className="text-black font-semibold" htmlFor="comment">
            Comment <br />
            <Textarea
              required
              sx={{ mt: 1 }}
              className=""
              id="comment"
              name="comment"
              placeholder="Share your thoughts about the course with others"
            />
          </label>
        </div>
        <Button
          type="submit"
          className=""
          size="lg"
          sx={{
            mt: 2,
            bgcolor: "#2C2C2C",
            ":hover": {
              bgcolor: "#3f3f3f",
            },
          }}
        >
          Submit review
        </Button>
      </form>
    </Card>
  );
};

export default RateForm;
