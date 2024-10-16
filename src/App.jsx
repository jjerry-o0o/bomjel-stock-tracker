import { useState } from "react";
import Calculator from "./components/Calculator.jsx";
import Result from "./components/Result.jsx";
import * as mathUtil from "./util/investment.js";

const initInputData = {
  initialInvestment : 0,
  annualInvestment : 0,
  expectedReturn : 0,
  duration : 0
}

function App() {
  const [inputData, setInputData] = useState(initInputData);
  const deriveResultData = mathUtil.calculateInvestmentResults(inputData);

  function deriveInputData() {
    const {name, value} = event.target;

    setInputData((prevInputData) => ({
      ...prevInputData,
      [name] : parseInt(value)
  }));
  }

  return (
    <>


      <Calculator
        inputValue={inputData}
        onChangeInput={deriveInputData}
      />
      <Result
        resultData={deriveResultData}
      />
    </>
  )
}

export default App
