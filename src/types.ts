export interface Course {
  id: number;
  name: string;
  duration: string;
  term: "Spring" | "Fall" | "Anytime";
  teacher: string;
  subject: StudyFieldOption;
}

export enum StudyFieldOption {
  chemical_eng = "Chemical Engineering",
  computational_eng = "Computational engineering",
  electrical_eng = "Electrical engineering",
  energy_tech = "Energy technology",
  environmental_tech = "Environmental technology",
  iem = "Industrial engineering and management",
  mechanical_eng = "Mechanical engineering",
  software_eng = "Software engineering",
  business = "Business",
  social_sci = "Social sciences",
}
