const averageReviewScore = (stars: number[]) => {
    let sum: number = 0;
    stars.forEach((star: number)=> {
        sum += star;
    });
    return sum/stars.length;
}

export default averageReviewScore;