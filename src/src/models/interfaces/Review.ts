import { FeedbackTags } from "../enums/FeedbackTags";
import { StudyFieldOption } from "../enums/StudyFieldOption";

export interface Review {
  id: number;
  name: string;
  studyYear: number | "N-th" | "Graduated" | "Open university"; // TODO: add support for strings
  studyField: StudyFieldOption;
  anonymity: boolean;
  feedbackTags?: FeedbackTags[];
  stars: number;
  comment?: string;
  date: Date;
}
