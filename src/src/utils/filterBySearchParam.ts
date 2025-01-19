import Course from "../models/interfaces/Course";

const filterBySearchParam = (searchParam: string, data: Course[]) => {
  // All data is displayed with empty search query
  if (searchParam.length === 0) {
    return data;
  }
  
  const filteredDataArray: Course[] = [];
  data.forEach(element => {
    if (!element.name.toLowerCase().indexOf(searchParam.toLowerCase())) {
      filteredDataArray.push(element);
    }
  });
  return filteredDataArray;
}

export default filterBySearchParam;
