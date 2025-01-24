import CourseScore from "./CourseScore";
import { StudyFieldOption } from "../../models/enums/StudyFieldOption";
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

/* TODO:
  - make the form look better
  - add FeedbackTags to the form
*/
const RateForm = ({ courseData }: { courseData: Course }) => {
  const reviewAmount = courseData.reviews.length;
  const [currentStudyField, setCurrentStudyField] = useState<StudyFieldOption>(
    StudyFieldOption["softwareEng"]
  );
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
  function handleEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());

    const review: Review = {
      id: Number(reviewAmount) + 1,
      name:
        formData["anon-post"] === "on"
          ? "anonymous"
          : (formData["name"] as string),
      studyYear: Number(formData["years-study"]),
      studyField: currentStudyField,
      anonymity: formData["anon-post"] === "on",
      stars: Number(selectedScore),
      comment: formData["comment"] as string,
      date: new Date(),
    };

    console.log("review:", review);
    addReview(courseData.id, review)
      .then((response) => {
        console.log("Review submitted successfully:", response);
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });
  }

  return (
    <Card
      className="mt-3"
      variant="plain"
      sx={{
        bgcolor: "var(--darkGray)",
      }}
    >
      <form onSubmit={handleEvent}>
        <h1 className="font-bold text-3xl text-white">Review course</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="my-1 text-black" htmlFor="name">
              Name
              <Input
                placeholder="Name"
                className="my-2 border-gray-400 w-full"
                type="text"
                id="name"
                name="name"
                required
                value={anonymity ? "anomyous" : name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          </div>
          <div className="col-span-1">
            <label className="my-2">
              <CourseScore
                onChange={(score: number) => setSelectedScore(score)}
              />
            </label>
          </div>
        </div>
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
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="my-1 text-black" htmlFor="studyfield">
              Select studyfield <br />
              <Select
                placeholder="Select a studyfield"
                required
                value={currentStudyField}
                onChange={(_, newValue: string | null) => {
                  setCurrentStudyField(newValue as StudyFieldOption);
                }}
              >
                {getEnumKeys(StudyFieldOption).map((key, index) => (
                  <Option key={index} value={key}>
                    {StudyFieldOption[key]}
                  </Option>
                ))}
              </Select>
            </label>
          </div>
          <div className="col-span-1">
            <label className="my-2 text-black" htmlFor="years-study">
              Current year of study
              <Input
                className="my-2 border-gray-400 w-full"
                type="text"
                id="years-study"
                name="years-study"
                required
                placeholder="Study year as numbers"
              />
            </label>
          </div>
        </div>
        <div className="grid my-1">
          <label className="text-black" htmlFor="comment">
            Comment <br />
            <Textarea
              className="border-gray-400"
              id="comment"
              name="comment"
              placeholder="Share your thoughts about the course with others"
            />
          </label>
        </div>
        <Button
          type="submit"
          className="my-10 p-2"
          size="lg"
          sx={{
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
