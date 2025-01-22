import Course from "../../models/interfaces/Course";

const CourseResult = ({ index, courseEntry }: { index: number; courseEntry: Course }) => {
  return (
    <li 
      className="grid grid-cols-3 mb-2 p-3 border border-gray-300 rounded-lg my-1 hover:border-blue-300 cursor-pointer" 
      key={index}
      onClick={() => window.location.href = `/course/${courseEntry.id}`}
    >
      <div className="grid grid-cols-2 border border-gray-500 rounded-lg p-2">
        <div className="flex flex-col">
          <p>Average grade</p>
          <img alt="Star icon" />
        </div>
        <p>{courseEntry.reviews.length > 0 ? courseEntry.reviews.length : "No"} reviews</p>
      </div>
      <div className="px-3">
        <p className="font-bold">{courseEntry.name} ({courseEntry.credits} ECTS) - course_code</p>
        <div>
          <p className="course-search-subject">Subject: {courseEntry.subject}</p>
          <p className="course-search-subject">Language: {courseEntry.language}</p>
          <p className="course-search-subject">Term: {courseEntry.term}</p>
        </div>
      </div>
      <div className="grid border border-gray-500 rounded-lg p-2 bg-zinc-500 text-white font-bold">
        <a>Read comments</a>
        <img alt="comment icon"/>
      </div>
    </li>

  );
}

export default CourseResult;
