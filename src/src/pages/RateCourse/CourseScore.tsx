import React, { useState } from 'react';

interface CourseScoreProps {
  onChange: (score: number) => void;
}
const CourseScore: React.FC<CourseScoreProps> = ({ onChange }) => {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  const handleClick = (score: number) => {
    setSelectedScore(score);
    onChange(score)
  };

  return (
    <div className="border border-gray-200 rounded-lg p-2 w-fit">
      {[1, 2, 3, 4, 5].map((score) => (
        <button
          key={score}
          type="button"
          onClick={() => handleClick(score)}
          className={selectedScore === score ? 'bg-blue-500 text-white' : ''}
        >
          {score}
        </button>
      ))}
    </div>
  );
};

export default CourseScore;
