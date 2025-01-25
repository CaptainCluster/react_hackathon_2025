import CourseScore from "./CourseScore";
import { StudyFieldOption } from "../../models/enums/StudyFieldOption";
// import { FeedbackTags } from "../../models/enums/FeedbackTags";
// This should be added if you wanna find a fun way to add many tags
import { useState } from "react";
import { addReview } from "../../api/review";
import { Review } from "../../models/interfaces/Review";
import Course from "../../models/interfaces/Course";

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
    addReview(courseData.id, review)
      .then((response) => {
        console.log("Review submitted successfully:", response);
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });
  }

  return (
    <form className="border border-gray-400 rounded-lg p-3 sm:p-5 m-2" onSubmit={handleEvent}>
      <h1 className="font-bold">Review course</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="my-1" htmlFor="name">
            Name
            <input
              className="my-2 border-gray-400 w-full"
              type="text"
              id="name"
              name="name"
              required
              value={anonymity ? "anonymous" : name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
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
        <label className="my-1">
          Post anonymously
          <input
            className="m-2"
            type="checkbox"
            id="anon-post"
            name="anon-post"
            onChange={(e) => {
              setAnonymity(e.target.checked);
              e.target.checked ? setName("anonymous") : setName("");
            }}
          ></input>
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="my-1" htmlFor="studyfield">
            Select studyfield <br />
            <select
              className="w-[110%] sm:w-auto"
              value={currentStudyField}
              onChange={(e) => {
                setCurrentStudyField(e.target.value as StudyFieldOption);
              }}
            >
              {getEnumKeys(StudyFieldOption).map((key, index) => (
                <option key={index} value={key}>
                  {StudyFieldOption[key]}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="col-span-1">
          <label className="my-2" htmlFor="years-study">
            Current year of study
            <input
              className="my-2 border-gray-400 w-full"
              type="text"
              id="years-study"
              name="years-study"
              required
            ></input>
          </label>
        </div>
      </div>
      <div className="grid my-1">
        <label htmlFor="comment">
          Comment <br />
          <input
            className="border-gray-400"
            type="text"
            id="comment"
            name="comment"
          ></input>
        </label>
      </div>
      <button type="submit" className="my-2 p-2">
        Submit review
      </button>
    </form>
  );
};

export default RateForm;
