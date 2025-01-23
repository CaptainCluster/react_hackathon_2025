/**
 * Gets the stars from all reviews for a specific course
 */
import Course from "../models/interfaces/Course";

const getCourseStars = (course: Course) => {
    const courseStars: number[] = [];
    course.reviews.map((reviewEntry) => {
        courseStars.push(reviewEntry.stars);
    });
    return courseStars;
}

export default getCourseStars;