import { Review } from "../models/interfaces/Review";


const ReviewComment = ({ reviewData, index }: { reviewData: Review; index: number }) => {

  return (
    <div key={index}>
      <div>
        <p>{reviewData.name}</p>
        <p>{reviewData.studyYear}</p>
      </div>
      <div>
        <p>{`Stars: ${reviewData.stars}`}</p>
        <p>{`Date: ${reviewData.date}`}</p>
      </div>
      <div>
        {reviewData.comment}
      </div>
    </div>
  )
}

export default ReviewComment;
