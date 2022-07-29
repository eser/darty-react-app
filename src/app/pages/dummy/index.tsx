import React, { useEffect, useState } from "react";

import { Header } from "semantic-ui-react";

import SummaryResult from "./summaryResult";

function Dummy() {
  const [state, setState] = useState({
    firstNumber: 4,
    secondNumber: 7,
    result: null,
  });

  useEffect(() => {
    const timer = setTimeout(
      () =>
        setState({
          ...state,
          result: state.firstNumber + state.secondNumber,
        }),
      1000,
    );

    return () => clearTimeout(timer);
  });

  let summary;

  if (state.result === null) {
    summary = "Calculating...";
  } else {
    summary = state.result;
  }

  return (
    <>
      <Header as="h1">Dummy</Header>

      <SummaryResult
        firstNumber={state.firstNumber}
        secondNumber={state.secondNumber}
        summary={summary}
      />
    </>
  );
}

export { Dummy as default };
