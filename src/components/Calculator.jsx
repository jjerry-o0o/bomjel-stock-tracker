export default function Calculator({ inputValue, onChangeInput }) {
  const {initInv, annuInv, expRtn, duration} = inputValue;

  return (
    <div id="user-input">
      <label htmlFor="input1">INITIAL INVESTMENT</label>
      <input type="number" id="initInv" defaultValue={initInv} onChange={onChangeInput}/>
      <label htmlFor="input2">ANNUAL INVESTMENT</label>
      <input type="number" id="annuInv" defaultValue={annuInv} onChange={onChangeInput}/>
      <label htmlFor="input3">EXPECTED RETURN</label>
      <input type="number" id="expRtn" defaultValue={expRtn} onChange={onChangeInput}/>
      <label htmlFor="input4">DURATION</label>
      <input type="number" id="duration" defaultValue={duration} onChange={onChangeInput}/>
    </div>
  );
}
