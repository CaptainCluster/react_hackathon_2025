import { FeedbackTags } from "../enums/FeedbackTags";
import { StudyFieldOption } from "../enums/StudyFieldOption";
import { StudyYearOption } from "../enums/StudyYearOption";

export interface Review {
  id: number;
  name: string;
  studyYear: StudyYearOption;
  studyField: StudyFieldOption;
  anonymity: boolean;
  feedbackTags?: FeedbackTags[];
  stars: number;
  comment?: string;
  date: Date;
}
