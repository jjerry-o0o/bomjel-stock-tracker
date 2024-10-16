import { useState } from "react";
import Calculator from "./components/Calculator.jsx";
import Result from "./components/Result.jsx";
import * as mathUtil from "./util/investment.js";

const initInputData = {
  initialInvestment : 15000,
  annualInvestment : 1200,
  expectedReturn : 6,
  duration : 10
}

function App() {
  const [inputData, setInputData] = useState(initInputData);
  const deriveResultData = mathUtil.calculateInvestmentResults(inputData);

  const inputIsValid = inputData.duration >= 1;

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
      {inputIsValid ? (<Result resultData={deriveResultData} />
      ) : (<p className="center">DURATION 의 값은 1 이상만 입력 가능합니다.</p>
      )}

    </>
  )
}

export default App
