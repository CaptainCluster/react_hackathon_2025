import Course from "../../models/interfaces/Course";
import ReviewSummary from "../Course/ReviewSummary";

const CourseResult = ({
  index,
  courseEntry,
}: {
  index: number;
  courseEntry: Course;
}) => {
  const numReviews = courseEntry.reviews.length;
  return (
    <li
      className="bg-white grid grid-cols-3 mb-3 p-3 border border-gray-300  my-1 hover:border-blue-300 cursor-pointer"
      key={index}
      onClick={() => (window.location.href = `/course/${courseEntry.id}`)}
    >
      {numReviews > 0 ? (
        <ReviewSummary
          numReviews={numReviews}
          course={courseEntry}
        ></ReviewSummary>
      ) : (
        <div>No reviews available</div>
      )}
      <div className="grid justify-self-start px-3 core-course-info">
        <p className="font-bold">{courseEntry.name} ({courseEntry.credits} ECTS) - {courseEntry.code}</p>
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
      <div className="flex w-fit border border-gray-500 rounded-lg p-2 bg-zinc-500 text-white font-bold justify-self-end">
        <a className="self-center w-1/2">Read comments</a>
        <img className="self-center" alt="comment icon" />
      </div>
    </li>
  );
};

export default CourseResult;
