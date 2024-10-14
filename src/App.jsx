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
  // console.log("인풋 : "+JSON.stringify(inputData));
  // console.log("결과 : "+JSON.stringify(deriveResultData));

  function deriveInputData() {
    const {name, value} = event.target;
    console.log("target : " + name + " | targetValue : " + value);

    setInputData((prevInputData) => ({
      ...prevInputData,
      [name] : value
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
