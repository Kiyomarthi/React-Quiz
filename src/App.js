import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import { type } from "@testing-library/user-event/dist/type/index.js";

const initialState = {
  questions: [],
  status: "Loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "Error" };
    default:
      throw new Error("action unkown");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="App">
      <Header />
      <Main>
        <p>1/15</p>
        <p>question?</p>
      </Main>
    </div>
  );
}

export default App;
