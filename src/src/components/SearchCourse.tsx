import { getCourses } from "../api/course";
import { useQuery } from "@tanstack/react-query";

const SearchCourse = () => {

  
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getCourses(),
  });

  if (isLoading) {
    return <span className="text-white">Loading...</span>;
  }
  if (isError) {
    return <span className="text-white">Error: {error.message}</span>;
  }
  if (data === undefined) {
    return <span className="text-white">No data</span>;
  }

  return (
    <>
      <h1>Search for a course</h1>
      <ul>
        {data.data.map((courseEntry, index) => <li key={index}>{courseEntry.name}</li> )}           
      </ul>
    </>
  );
}

export default SearchCourse;
