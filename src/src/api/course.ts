import axios, { AxiosResponse } from "axios";
import FailResponse from "../models/interfaces/response/FailResponse";
import Course from "../models/interfaces/Course";

export async function getCourses(): Promise<
  AxiosResponse<Course[]> | FailResponse
> {
  try {
    const response = await axios.get<Course[]>("/src/data/filler.json");
    return response;
  } catch (error) {
    console.error(error);
    return {
      msg: "Failed to receive course information",
    } as FailResponse;
  }
}

export async function getCourseById(CourseID:number): Promise<
  AxiosResponse<Course> | FailResponse> {
    try {
      const response = await axios.get<Course[]>("/src/data/filler.json");
      const course: Course | undefined = response.data.find(
        (course) => course.id === CourseID);

      if (course === undefined) {
        return {
          msg: "Course not found",
        } as FailResponse;
      }
      return {
        data: course,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      } as AxiosResponse<Course>;
      

    } catch (error) {
      console.error(error);
      return {
        msg: "Failed to receive course information",
      } as FailResponse;
    }
}