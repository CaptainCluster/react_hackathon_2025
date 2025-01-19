import axios, { AxiosResponse } from "axios";
import FailResponse from "../models/interfaces/response/FailResponse";
import { Review } from "../models/interfaces/Review";

export async function getReviews(): Promise<AxiosResponse<Review> | FailResponse> {
  try {
    const response = await axios.get<Review>(
      "/src/data/review.json"
    );
    return response;
  } catch (error) {
    console.error(error);
    return {
      msg: "Failed to receive course information",
    }
  }
}
