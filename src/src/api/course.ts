import axios, { AxiosResponse } from "axios";
import FailResponse from "../models/interfaces/response/FailResponse";
import Course from "../models/interfaces/Course";

export async function getCourses(): Promise<AxiosResponse<Course> | FailResponse> {
  try {
    const response = await axios.get("/src/data/filler.json");
    return response;
  } catch (error) {
    console.error(error);
    return {
      msg: "Failed to receive course information",
    }
  }
}
