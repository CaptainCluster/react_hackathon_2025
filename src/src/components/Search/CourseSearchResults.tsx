import Course from "../../models/interfaces/Course";
import SearchFilter from "./SearchFilter";

const CourseSearchResults = ({ courseData }: { courseData: Course[] }) => {
  return (
    <>
      <div className="flex mb-2">
        <h1 className="bg-zinc-700 text-white px-5 py-4 w-1/2">Browse all course reviews</h1>
        <SearchFilter />  
      </div>
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
    </>
  )
}

export default CourseSearchResults;
