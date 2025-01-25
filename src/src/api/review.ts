import axios, { AxiosResponse } from "axios";
import FailResponse from "../models/interfaces/response/FailResponse";
import { Review } from "../models/interfaces/Review";
import Course from "../models/interfaces/Course";
import checkReviewSubmission from "../utils/checkReviewSubmission";

const port: number = 3000;
const ip: string = `http://localhost:${port}`;
const endpoint: string = `${ip}/courses`;


export async function getReviews(
  CourseID: number
): Promise<AxiosResponse<Review[]> | FailResponse> {
  try {
    const response = await axios.get<Course[]>(endpoint, {
      params: { id: CourseID },
    });
    const course: Course | undefined = response.data[0];

    if (course === undefined) {
      return {
        msg: "Course not found",
      } as FailResponse;
    }
    return {
      data: course.reviews,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    } as AxiosResponse<Review[]>;
  } catch (error) {
    console.error(error);
    return {
      msg: "Failed to receive review information.",
    };
  }
}

export async function getReviewAmount(
  CourseID: number
): Promise<AxiosResponse<Number> | FailResponse> {
  try {
    const response = await axios.get<Course[]>(endpoint, {
      params: { id: CourseID },
    });
    const course: Course | undefined = response.data[0];

    if (course === undefined) {
      return {
        msg: "Course not found",
      } as FailResponse;
    }
    return {
      data: course.reviews.length,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    } as AxiosResponse<number>;
  } catch (error) {
    console.error(error);
    return {
      msg: "Failed to receive review amount.",
    };
  }
}

export async function addReview(
  CourseID: number,
  newReview: Review
): Promise<AxiosResponse<Course> | FailResponse> {
  try {
    const response = await axios.get<Course[]>(endpoint, {
      params: { id: CourseID },
    });
    const course: Course | undefined = response.data[0];

    if (course === undefined) {
      return {
        msg: "Course not found",
      } as FailResponse;
    }
    
    if (!checkReviewSubmission(newReview)) {
      console.error("Either invalid data within review or the occurrence of an issue within the application.");
    }

    // Cant be found????????
    course.reviews.push(newReview);
    const response2 = await axios.put<Course>(
      endpoint + "/" + CourseID,
      course
    );
    return response2;
  } catch (error) {
    //console.error(error);
    return {
      msg: "Failed to add new review",
    } as FailResponse;
  }
}
