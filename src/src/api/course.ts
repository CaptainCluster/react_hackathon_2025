import axios, { AxiosResponse } from "axios";
import FailResponse from "../models/interfaces/response/FailResponse";
import Course from "../models/interfaces/Course";

const port: number = 3000;
const ip: string = "http://localhost:" + port;
const endpoint: string = ip+"/courses";
export async function getCourses(): Promise<
  AxiosResponse<Course[]> | FailResponse
> {
  try {
    const response = await axios.get<Course[]>(endpoint);
    console.log("response:",response)
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
      const response = await axios.get<Course[]>(endpoint,
        {params: {id: CourseID}}
      );
      console.log("getCourseById response:",response)
      const course: Course | undefined = response.data[0]
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