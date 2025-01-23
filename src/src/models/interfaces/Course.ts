import { StudyFieldOption } from "../enums/StudyFieldOption";

export default interface Course {
  id: number;
  name: string;
  credits: number;
  language: string;
  duration: string;
  term: "Spring" | "Fall" | "Anytime";
  teacher: string;
  subject: StudyFieldOption;
  reviewAmount: number;
  reviewScore: number;
}
