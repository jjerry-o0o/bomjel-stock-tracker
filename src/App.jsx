import { useState } from "react";
import LOGO from "./assets/bomjel_logo.png";
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
      <header>
        <img src={LOGO} alt="logo_Img"/>
        <h1>B&J Stock Tracker</h1>
      </header>

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
