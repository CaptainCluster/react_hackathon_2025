export interface Course {
  id: number;
  name: string;
  duration: string;
  term: "Spring" | "Fall" | "Anytime";
  teacher: string;
  subject: StudyFieldOption;
}

export interface Review {
  id: number;
  name: string;
  studyYear: number | "Graduated" | "Open university";
  anonymity: boolean;
  feedbackTags?: FeedbackTags[];
  comment?: string;
}

export enum FeedbackTags {
  Engaging = "Engaging",
  Challenging = "Challenging",
  Helpful = "Helpful",
  Unclear = "Unclear",
  Fun = "Fun",
  Interactive = "Interactive",
  Flexible = "Flexible",
  Innovative = "Innovative",
  Clear = "Clear",
  Practical = "Practical",
  Demanding = "Demanding",
  Straightforward = "Straightforward",
  Technical = "Technical",
  TheoryHeavy = "Theory-heavy",
  Advanced = "Advanced",
  Introductory = "Introductory",
  Confusing = "Confusing",
  Disorganized = "Disorganized",
  Boring = "Boring",
  Outdated = "Outdated",
  Inflexible = "Inflexible",
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
