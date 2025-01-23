const reviewColor = (star: number) => {
  const green = "#1DC611";
  const yellow = "#F99F18";
  const red = "#C61411";
  if (star >= 0 && star <= 2.4) {
    return red;
  } else if (star >= 2.5 && star <= 3.9) {
    return yellow;
  } else if (star > 3.9 && star <= 5) {
    return green;
  }
};

export default reviewColor;
