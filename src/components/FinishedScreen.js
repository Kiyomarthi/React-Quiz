import ResetButton from "./ResetButton";

export default function FinishedScreen({
  points,
  maxPassiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPassiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🏆";
  if (percentage >= 80 && percentage < 100) emoji = "👏";
  if (percentage >= 50 && percentage < 80) emoji = "😃";
  if (percentage >= 0 && percentage < 50) emoji = "🙄";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        {emoji} you scord {points} out of {maxPassiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">highscore: {highscore} points </p>
      <ResetButton dispatch={dispatch} />
    </>
  );
}
