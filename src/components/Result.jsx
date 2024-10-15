import * as mathUtil from "../util/investment.js";

// Year = year
// Investment Value = valueEndOfYear
// Interest(Year) = interest
// Total Interest = interest 누적
// Invested Capital = 투자금 총합
export default function Result({resultData}) {
  let totalInterest = 0;

  return (
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
      {resultData.map((tdData, tdIdx) => {
        totalInterest += tdData.interest;
        const investedCapital = tdData.valueEndOfYear - totalInterest;

        return (
          <tr key={tdIdx}>
            <td>{tdData.year}</td>
            <td>{mathUtil.formatter.format(Math.round(tdData.valueEndOfYear))}</td>
            <td>{mathUtil.formatter.format(Math.round(tdData.interest))}</td>
            <td>{mathUtil.formatter.format(Math.round(totalInterest))}</td>
            <td>{mathUtil.formatter.format(Math.round(investedCapital))}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}
