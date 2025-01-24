import { NavLink } from "react-router-dom";
import Course from "../../models/interfaces/Course";
import ReviewSummary from "../Course/ReviewSummary";
const CourseResult = ({ courseEntry }: { courseEntry: Course }) => {
  const numReviews = courseEntry.reviews.length;
  return (
    <NavLink to={`/course/${courseEntry.id}`}>
      <li className="bg-white grid sm:grid-cols-3 gap-x-4 mb-3 p-3 border border-gray-300 my-1 hover:border-blue-300 cursor-pointer">
        {numReviews > 0 ? (
          <ReviewSummary
            numReviews={numReviews}
            course={courseEntry}
          ></ReviewSummary>
        ) : (
          <div className="flex justify-center bg-black w-[270px] align-middle p-2 rounded-lg ml-[12.5%] sm:ml-0 h-[150%] sm:h-[100%]">
            <p className="m-auto font-bold text-white">No reviews available</p>
          </div>
        )}
        <div className="grid sm:px-12 mt-5 sm:mt-0 sm:ml-[-20%]">
          <p className="font-bold">
            {courseEntry.name} ({courseEntry.credits} ECTS) - {courseEntry.code}
          </p>
          <div>
            <p className="course-search-subject">
              Subject: {courseEntry.subject}
            </p>
            <p className="course-search-subject">
              Language: {courseEntry.language}
            </p>
            <p className="course-search-subject">Term: {courseEntry.term}</p>
          </div>
        </div>
        <div className="flex w-fit mr-[15%] sm:mr-0 mt-5 sm:mt-0 border border-gray-500 rounded-lg p-2 bg-zinc-500 text-white font-bold justify-self-end">
          <p className="self-center w-1/2">Read comments</p>
          <img className="self-center" alt="comment icon" />
        </div>
      </li>
    </NavLink>
  );
};

export default CourseResult;
