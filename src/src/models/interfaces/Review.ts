import { FeedbackTags } from "../enums/FeedbackTags";

export interface Review {
  id: number;
  name: string;
  studyYear: number | "Graduated" | "Open university";
  anonymity: boolean;
  feedbackTags?: FeedbackTags[];
  comment?: string;
}
