export default function Progress({
  index,
  numQuestions,
  points,
  maxPassiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        Pints <strong>{points}</strong>/ {maxPassiblePoints}
      </p>
    </header>
  );
}
