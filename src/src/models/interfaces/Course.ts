import { StudyFieldOption } from "../enums/StudyFieldOption";
import { Review } from "./Review";

export default interface Course {
  id: number;
  name: string;
  credits: number;
  duration: string;
  term: "Spring" | "Fall" | "Anytime";
  teacher: string;
  subject: StudyFieldOption;
  reviews: Review[];
}
