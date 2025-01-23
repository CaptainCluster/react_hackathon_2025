import axios, { AxiosResponse } from "axios";
import FailResponse from "../models/interfaces/response/FailResponse";
import { Review } from "../models/interfaces/Review";

export async function getReviews(CourseID: number): Promise<AxiosResponse<Review[]> | FailResponse> {
  try {
    const response = await axios.get<Review[]>(
      "/src/data/reviews/" + CourseID + ".json"
    );
    return response;
  } catch (error) {
    console.error(error);
    return {
      msg: "Failed to receive review information.",
    }
  }
}

export async function getReviewAmount(CourseID: number): Promise<AxiosResponse<Number> | FailResponse> {
  try {
    const response = await axios.get<Review[]>(
      "/src/data/reviews/" + CourseID + ".json"
    );
    return {
      data: response.data.length
    } as AxiosResponse<number>;
  } catch (error) {
    console.error(error);
    return {
      msg: "Failed to receive review amount.",
    }
  }
}

// TODO:
//  - make sure this actually works
export async function addReview(CourseID: number, newReview: Review): Promise<AxiosResponse<Review> | FailResponse> {
  try {
    const response = await axios.post<Review>(
      "/src/data/reviews/" + CourseID + ".json",
      newReview
    );
    return response;
  } catch (error) {
    console.error(error);
    return {
      msg: "Failed to add new review",
    } as FailResponse;
  }
}