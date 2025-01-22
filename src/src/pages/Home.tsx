import { getCourses } from "../api/course";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import filterBySearchParam from "../utils/filterBySearchParam";
import CourseSearchResults from "../components/Search/CourseSearchResults";

const Home = () => {
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
  if (data === undefined || "msg" in data) {
    return <span className="text-white">No data</span>;
  }

  const filteredData = filterBySearchParam(searchParam, data.data);

  return (
    <>
      <div className="w-screen flex justify-center">
        <div className="flex justify-center mb-6 py-24 pb-8 px-20 w-1/2 border border-gray-300">
          <img alt="LUT logo" />
          <input
            className="input-form rounded-2xl"
            value={searchParam}
            onChange={(event) => {
              setSearchParam(event.target.value);
              console.log(event.target.value);
            }}
          ></input>
        </div>
      </div>
      <CourseSearchResults courseData={filteredData} />
    </>
  );
};

export default Home;
