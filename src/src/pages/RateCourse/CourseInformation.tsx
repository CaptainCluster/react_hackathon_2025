import Course from "../../models/interfaces/Course";
import InformationLi from "./InformationLi";

const CourseInformation = ({ courseData }: { courseData: Course }) => {

  // TODO: Fill the descriptions for InformationLi components
  return (
    <div className="border border-black rounded-lg p-5">
      <h1 className="font-bold">{courseData.name.toUpperCase()}</h1>
      <ul>
        <InformationLi header={"Organizer"}/>
        <InformationLi header={"Language"}/>
        <InformationLi header={"Time"}/>
        <InformationLi header={"Target student group"}/>
      </ul>
    </div>
  );
}

export default CourseInformation;
