import { useState } from "react";
import LOGO from "./assets/bomjel_logo.png";
import Calculator from "./components/Calculator.jsx";
import Result from "./components/Result.jsx";
import * as mathUtil from "./util/investment.js";

const initInputData = {
  initInv : 0,
  annuInv : 0,
  expRtn : 0,
  duration : 0
}

function App() {
  const [inputData, setInputData] = useState(initInputData);
  const [resultData, setResultData] = useState();

  const resultArray = [];

  /* 함수 호출 테스트 start */
  // const param = { initialInvestment : 10,
  //   annualInvestment : 2,
  //   expectedReturn : 5,
  //   duration : 3, }
  // const arr = mathUtil.calculateInvestmentResults(param);
  //
  // console.log("result : " + JSON.stringify(arr));
  // console.log(mathUtil.formatter.format(250));
  //
  // 결과
  // result : [{ "year":1, "interest":0.5, "valueEndOfYear":12.5, "annualInvestment":2 },
  //           { "year":2, "interest":0.625, "valueEndOfYear":15.125, "annualInvestment":2 },
  //           { "year":3, "interest":0.7562500000000001, "valueEndOfYear":17.88125, "annualInvestment":2 }]
  /* 함수 호출 테스트 end */

  function calculation() {
    const {id, value} = event.target;
    console.log("target : " + id + " | targetValue : " + value);

    setInputData((prevInputData) => {
      return {
        id: value,
        ...prevInputData
      };
    });
  }

  return (
    <>
      <header>
        <img src={LOGO} alt="logo_Img"/>
        <h1>B&J Stock Tracker</h1>
      </header>

      <Calculator
        inputValue={inputData}
        onChangeInput={calculation}
      />
      <Result />
    </>
  )
}

export default App
