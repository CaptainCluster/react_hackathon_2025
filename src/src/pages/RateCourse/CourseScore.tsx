import { Button, ToggleButtonGroup } from "@mui/joy";
import { useState } from "react";

interface CourseScoreProps {
  setSelectedScore: (score: number) => void;
}
const CourseScore: React.FC<CourseScoreProps> = ({ setSelectedScore }) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="rounded-lg p-2 w-fit">
      <ToggleButtonGroup
        value={value}
        onChange={(event, newValue) => {
          if (!newValue) {
            return;
          }
          setValue(newValue);
          setSelectedScore(parseInt(newValue, 10));
        }}
      >
        {new Array(5).fill(undefined).map((_, index) => {
          const rating = (index + 1).toString();
          return (
            <Button
              sx={{
                padding: {
                  xs: "4px 8px",
                  sm: "6px 12px",
                  md: "8px 16px",
                },
              }}
              variant="solid"
              key={rating}
              value={rating}
            >
              {rating}
            </Button>
          );
        })}
      </ToggleButtonGroup>
    </div>
  );
};

export default CourseScore;
