export default function Result({resultData}) {
  const {year, interest, valueEndOfYear, annualInvestment} = resultData;

  return (
    <table id="result">
      <thead>
      <tr>
        <th>Year</th> <!--year-->
        <th>Investment Value</th> <!--valueEndOfYear-->
        <th>Interest(Year)</th> <!--interest-->
        <th>Total Interest</th> <!--year-->
        <th>Invested Capital</th> <!--year-->
      </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  );
}
