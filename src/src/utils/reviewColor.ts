const reviewColor = (star: number) => {
    if (star >= 0 && star <= 2.4) {
        return "red"
    }
    else if (star >= 2.5 && star <= 3.9) {
        return "yellow"
    }
    else if (star > 3.9 && star <= 5) {
        return "green"
    }
        
}

export default reviewColor;