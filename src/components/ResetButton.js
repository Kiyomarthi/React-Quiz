export default function ResetButton({ dispatch }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "resetart" })}
    >
      Reset Question
    </button>
  );
}
