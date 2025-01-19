import { getCourses } from "../api/course";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import filterBySearchParam from "../utils/filterBySearchParam";

const SearchCourse = () => {
  const [searchParam, setSearchParam] = useState("");
  
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

  const filteredData = filterBySearchParam(searchParam, data.data);

  return (
    <>
      <h1>Search for a course</h1>
      <input
        className="input-form"
        value={searchParam}
        onChange={(event) => {
          setSearchParam(event.target.value)
          console.log(event.target.value)
        }}>
      </input>
      <ul>
        {filteredData.map((courseEntry, index) => <li key={index}>{courseEntry.name}</li> )}           
      </ul>
    </>
  );
}

export default SearchCourse;
