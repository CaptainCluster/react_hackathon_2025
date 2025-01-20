import CourseScore from "./CourseScore";

const RateForm = () => {
  return(
    <div className="border border-gray-400 rounded-lg p-5 m-2">
      <h1 className="font-bold">Review course</h1>
      <p>Course Name</p>
      
      <CourseScore />
      <div className="grid grid-cols-2">
        <label className="my-1" htmlFor="years-study">Current year of study</label>
        <input className="my-2 border-gray-400" type="text" id="years-study" name="years-study"></input>

        <label className="my-1" htmlFor="anon-post">Post anonymously</label>
        <input className="my-2" type="checkbox" id="anon-post" name="anon-post"></input>

     </div>
      <div className="grid my-1">
        <label htmlFor="comment">Comment</label>
        <input className="border-gray-400" type="text" id="comment" name="comment"></input>
      </div>
      <button className="my-2 p-2">Submit review</button>
    </div>
  );
}

export default RateForm;
