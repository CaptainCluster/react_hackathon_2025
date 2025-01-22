import Course from "../../models/interfaces/Course";
import CourseResult from "./CourseResult";
import SearchFilter from "./SearchFilter";

const CourseSearchResults = ({ courseData }: { courseData: Course[] }) => {
  return (
    <div className="bg-gray-200 border border-gray-300">
      <div className="flex mb-2">
        <h1 className="bg-zinc-700 text-white font-bold px-5 py-4 w-1/2">Browse all course reviews: </h1>
        <SearchFilter />  
      </div>
      <ul className="mt-4 p-2" >
        {courseData.map((courseEntry, index) => (
          <CourseResult index={index} courseEntry={courseEntry}/>
        ))}
      </ul>
    </div>
  )
}

export default CourseSearchResults;
