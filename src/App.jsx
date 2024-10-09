import LOGO from "./assets/bomjel_logo.png";
import {CALCULATOR} from "./util/investment.js";

function App() {
  CALCULATOR();

  return (
    <>
      <header>
        <img src={LOGO} alt="logo_Img"/>
        <h1>B&J Stock Tracker</h1>
      </header>
      <div id="user-input">
        <label htmlFor="input1">INITIAL INVESTMENT</label>
        <input type="text" id="input1"/>
        <label htmlFor="input2">ANNUAL INVESTMENT</label>
        <input type="text" id="input2"/>
        <label htmlFor="input3">EXPECTED RETURN</label>
        <input type="text" id="input3"/>
        <label htmlFor="input4">DURATION</label>
        <input type="text" id="input4"/>
      </div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

    </>
  )
}

export default App
