export default function Calculator({ inputValue, onChangeInput }) {
  const {initialInvestment, annualInvestment, expectedReturn, duration} = inputValue;

  return (
    <section id="user-input">
      <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
      <input type="number" id="initialInvestment" name="initialInvestment" required
             defaultValue={initialInvestment} onChange={onChangeInput}/>
      <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
      <input type="number" id="annualInvestment" name="annualInvestment" required
             defaultValue={annualInvestment} onChange={onChangeInput}/>
      <label htmlFor="expectedReturn">EXPECTED RETURN</label>
      <input type="number" id="expectedReturn" name="expectedReturn" required
             defaultValue={expectedReturn} onChange={onChangeInput}/>
      <label htmlFor="duration">DURATION</label>
      <input type="number" id="duration" name="duration" required
             defaultValue={duration} onChange={onChangeInput}/>
    </section>
  );
}
