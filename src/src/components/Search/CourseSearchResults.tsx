import Course from "../../models/interfaces/Course";
import CourseResult from "./CourseResult";
import SearchFilter from "./SearchFilter";

const CourseSearchResults = ({ courseData }: { courseData: Course[] }) => {
  return (
    <>
      <div className="flex mb-2">
        <h1 className="bg-zinc-700 text-white px-5 py-4 w-1/2">Browse all course reviews</h1>
        <SearchFilter />  
      </div>
      <ul className="p-2 border-t border-x border-gray-300" >
        {courseData.map((courseEntry, index) => (
          <CourseResult index={index} courseEntry={courseEntry}/>
        ))}
      </ul>
    </>
  )
}

export default CourseSearchResults;
