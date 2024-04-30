import Option from "./Option";

export default function Question({ question }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <Option question={question} />
    </div>
  );
}
