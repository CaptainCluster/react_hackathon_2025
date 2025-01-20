import { Review } from "../models/interfaces/Review";


const ReviewComment = ({ reviewData, index }: { reviewData: Review; index: number }) => {

  return (
    <>
      <div className="grid grid-cols-2" key={index}>
        <div className="py-1">
          <p className="additional-info">{reviewData.name}</p>
          <p className="additional-info">{`Year of study: ${reviewData.studyYear}`}</p>
        </div>
        <div className="py-1">
          <p className="additional-info">{`Stars: ${reviewData.stars}`}</p>
          <p className="additional-info">{`Date: ${reviewData.date}`}</p>
        </div>
      </div>
      <div>
        <div className="py-1">
          {reviewData.comment}
        </div>
      </div>
    </>
  )
}

export default ReviewComment;
