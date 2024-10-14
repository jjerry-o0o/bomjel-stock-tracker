export default function Calculator({ inputValue, onChangeInput }) {
  const {initialInvestment, annualInvestment, expectedReturn, duration} = inputValue;

  return (
    <div id="user-input">
      <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
      <input type="number" id="initialInvestment" name="initialInvestment"
             defaultValue={initialInvestment} onChange={onChangeInput}/>
      <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
      <input type="number" id="annualInvestment" name="annualInvestment"
             defaultValue={annualInvestment} onChange={onChangeInput}/>
      <label htmlFor="expectedReturn">EXPECTED RETURN</label>
      <input type="number" id="expectedReturn" name="expectedReturn"
             defaultValue={expectedReturn} onChange={onChangeInput}/>
      <label htmlFor="duration">DURATION</label>
      <input type="number" id="duration" name="duration"
             defaultValue={duration} onChange={onChangeInput}/>
    </div>
  );
}
