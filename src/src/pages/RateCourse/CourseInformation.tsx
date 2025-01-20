import Course from "../../models/interfaces/Course";
import InformationLi from "./InformationLi";

const CourseInformation = ({ courseData }: { courseData: Course }) => {

  // TODO: Fill the descriptions for InformationLi components
  return (
    <div className="border border-black rounded-lg p-5 m-2">
      <h1 className="font-bold">{courseData.name.toUpperCase()}</h1>
      <ul className="justify-center">
        <InformationLi header={"Organizer"} info="To be filled"/>
        <InformationLi header={"Language"} info="To be filled"/>
        <InformationLi header={"Time"} info="To be filled"/>
        <InformationLi header={"Target student group"} info="To be filled"/>
      </ul>
    </div>
  );
}

export default CourseInformation;
