import { getCourses } from "../api/course";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import filterBySearchParam from "../utils/filterBySearchParam";
import CourseSearchResults from "../components/Search/CourseSearchResults";
import lutImage from "../assets/lut_image.png"


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
        <div className="grid w-1/2 justify-center shadow shadow-black mb-6 py-16 pb-8 px-20 border border-gray-300">
          <img className="w-1/2 justify-self-center mb-4" src={lutImage} alt="LUT logo" />
          <input
            className="input-form rounded-2xl course-search"
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
