import { StudyFieldOption } from "../enums/StudyFieldOption";

export default interface Course {
  id: number;
  name: string;
  duration: string;
  term: "Spring" | "Fall" | "Anytime";
  teacher: string;
  subject: StudyFieldOption;
}

