import { Review } from "../models/interfaces/Review";

/**
 * @function checkReviewSubmission
 *
 * Ensures a review submitted by a client is valid.
 *
 * @returns {boolean}
 *  true  - review is adequate
 *  false - if not 
 */ 
const checkReviewSubmission = (reviewSubmission: Review): boolean => {
  
  // Ensuring all necessary content is within a submission
  if (!reviewSubmission.id === undefined
    || !reviewSubmission.studyField === undefined
    || !reviewSubmission.date === undefined
    || !reviewSubmission.stars === undefined
    || !reviewSubmission.name === undefined
    || !reviewSubmission.comment === undefined
    || !reviewSubmission.studyYear === undefined
  ) {
    return false;
  }

  // Valid feedback must be given.
  if (reviewSubmission.comment?.length === 0) {
    return false;
  }
  
  // Review score (stars) must be within 1-5 scale.
  if (reviewSubmission.stars <= 0 || reviewSubmission.stars > 5) {
    return false;
  }

  return true;
}

export default checkReviewSubmission;
