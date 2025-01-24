import { getCourses } from "../api/course";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import filterBySearchParam from "../utils/filterBySearchParam";
import CourseSearchResults from "../components/Search/CourseSearchResults";
import lutImage from "../assets/lut_image.png";
import Header from "../components/Header";

const Home = () => {
  const [searchParam, setSearchParam] = useState("");

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["coursess"],
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
      <Header headerText="Rate my LUT courses" />
      <div className="flex justify-center">
        <div className="container">
          <div className="flex justify-center">
            <div className="grid w-3/4 sm:w-1/2 justify-center shadow shadow-black my-6 py-16 pb-8 px-20 border border-gray-300">
              <img
                className="w-3/4 sm:w-1/2 justify-self-center mb-6 sm:mb-4"
                src={lutImage}
                alt="LUT logo"
              />
              <input
                className="input-form rounded-2xl course-search"
                value={searchParam}
                onChange={(event) => {
                  setSearchParam(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <CourseSearchResults courseData={filteredData} />
        </div>
      </div>
    </>
  );
};

export default Home;
