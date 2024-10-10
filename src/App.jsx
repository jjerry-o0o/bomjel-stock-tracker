import LOGO from "./assets/bomjel_logo.png";
import Calculator from "./components/Calculator.jsx";
import Result from "./components/Result.jsx";
import * as mathUtil from "./util/investment.js";

function App() {
  const param = { initialInvestment : 10,
                  annualInvestment : 2,
                  expectedReturn : 5,
                  duration : 3, }
  const arr = mathUtil.calculateInvestmentResults(param);

  console.log("result : " + JSON.stringify(arr));
  console.log(mathUtil.formatter.format(250));

  return (
    <>
      <header>
        <img src={LOGO} alt="logo_Img"/>
        <h1>B&J Stock Tracker</h1>
      </header>

      <Calculator />
      <Result />
    </>
  )
}

export default App
