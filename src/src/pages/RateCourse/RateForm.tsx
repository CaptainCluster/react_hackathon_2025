const RateForm = () => {
  return(
    <div className="border border-black rounded-lg p-5">
      <h1 className="font-bold">Review course</h1>

      <label htmlFor="course-name">Course name</label>
      <input type="text" id="course-name" name="course-name"></input>

      <label htmlFor="years-study">Current year of study</label>
      <input type="text" id="years-study" name="years-study"></input>

      <label htmlFor="anon-post">Post anonymously</label>
      <input type="checkbox" id="anon-post" name="anon-post"></input>

      <label htmlFor="comment">Comment</label>
      <input type="text" id="comment" name="comment"></input>

      <button>Submit review</button>
    </div>
  );
}

export default RateForm;
