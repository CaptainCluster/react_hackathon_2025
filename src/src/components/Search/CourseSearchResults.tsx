import Course from "../../models/interfaces/Course";

const CourseSearchResults = ({ courseData }: { courseData: Course[] }) => {
  return (
    <ul>
      {courseData.map((courseEntry, index) => (
        <li 
          className="p-3 border border-gray-300 rounded-lg my-1 hover:border-blue-300 cursor-pointer" 
          key={index}
          onClick={() => window.location.href = `/course/${courseEntry.id}`}
        >
          <p>{courseEntry.name}</p>
          <p className="course-search-subject">{courseEntry.subject}</p>
        </li>
      ))}
    </ul>
  )
}

export default CourseSearchResults;
