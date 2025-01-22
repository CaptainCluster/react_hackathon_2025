import Course from "../../models/interfaces/Course";

const CourseResult = ({ index, courseEntry }: { index: number; courseEntry: Course }) => {
  return (
    <li 
      className="grid grid-cols-3 mb-2 p-3 border border-gray-300 rounded-lg my-1 hover:border-blue-300 cursor-pointer" 
      key={index}
      onClick={() => window.location.href = `/course/${courseEntry.id}`}
    >
      <div className="grid border border-gray-500 rounded-lg p-2">
        <div className="flex">
          <p>Average grade</p>
          <img alt="Star icon" />
        </div>
        <p>{courseEntry.reviews.length > 0 ? courseEntry.reviews.length : "No"} reviews</p>
      </div>
      <div className="px-3">
        <p className="font-bold">{courseEntry.name} ({courseEntry.credits} ECTS) - course_code</p>
        <div>
          <p className="course-search-subject">Organizer: </p>
          <p className="course-search-subject">Language: </p>
          <p className="course-search-subject">Time: </p>
        </div>
      </div>
      <div className="grid border border-gray-500 rounded-lg p-2">
        <a>Read comments</a>
        <img alt="comment icon"/>
      </div>
    </li>

  );
}

export default CourseResult;
