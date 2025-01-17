import { getCourses } from "../api/course";

const SearchCourse = () => {

  const data = getCourses();
  console.log(data.data);

  return (
    <>
      <h1>Search for a course</h1>
      <div>
           
      </div>
    </>
  );
}

export default SearchCourse;
