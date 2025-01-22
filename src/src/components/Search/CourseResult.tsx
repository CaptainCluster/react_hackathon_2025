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
        <p>Review count</p>
      </div>
      <div className="px-3">
        <p>{courseEntry.name}</p>
        <p className="course-search-subject">{courseEntry.subject}</p>
      </div>
      <div className="grid border border-gray-500 rounded-lg p-2">
        <a>Read comments</a>
        <img alt="comment icon"/>
      </div>
    </li>

  );
}

export default CourseResult;
