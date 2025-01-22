import CourseScore from "./CourseScore";
import { StudyFieldOption } from "../../models/enums/StudyFieldOption";
// import { FeedbackTags } from "../../models/enums/FeedbackTags";
// This should be added if you wanna find a fun way to add many tags
import { useState } from "react";

const RateForm = (CourseID: any ) => {
  /* For some reason typecasting raises an error on RateCourse */
  CourseID = Number(CourseID)
  const [currentStudyField, setCurrentStudyField] = useState<StudyFieldOption>()

  // function to get keys of an enum
  function getEnumKeys<T extends string, TEnumValue extends string | number,>
  (enumVariable: { [key in T]: TEnumValue }): Array<T> {
    return Object.keys(enumVariable) as Array<T>;
  }
  /*
    meitsi meni pilaamaan noi classNamet, joten ne saa korjata :D
  */
  return (
    <div className="border border-gray-400 rounded-lg p-5 m-2">
      <h1 className="font-bold">Review course</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="my-1" htmlFor="name">
            Name
          </label>
          <input
            className="my-2 border-gray-400 w-full"
            type="text"
            id="name"
            name="name"
          ></input>
        </div>
        <div className="col-span-1">
          <label className="my-1">
            Review Score
          </label>
          <CourseScore />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <label className="my-1" htmlFor="anon-post">
          Post anonymously
        </label>
        <input
          className="my-2"
          type="checkbox"
          id="anon-post"
          name="anon-post"
        ></input>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <label className="my-1" htmlFor="studyfield">
            Select studyfield
          </label> <br />
          <select
            value={currentStudyField}
            onChange={(e) => {
              setCurrentStudyField(StudyFieldOption[e.target.value as keyof typeof StudyFieldOption]);
            }}>
            {getEnumKeys(StudyFieldOption).map((key, index) => (
              <option key={index} value={key}>
                {StudyFieldOption[key]}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <label className="my-2" htmlFor="years-study">
            Current year of study
          </label>
          <input
            className="my-2 border-gray-400 w-full"
            type="text"
            id="years-study"
            name="years-study"
          ></input>
        </div>
      </div>
      <div className="grid my-1">
        <label htmlFor="comment">Comment</label>
        <input
          className="border-gray-400"
          type="text"
          id="comment"
          name="comment"
        ></input>
      </div>
      <button 
        className="my-2 p-2"
        onSubmit={(e) => {
          // TODO: Implement submit review
          console.log(e)
        }}>
        Submit review
      </button>
    </div>
  );
};

export default RateForm;
