## todo list
- [x] 상단에 이미지와 타이틀
- [x] 그 밑에 사용자 input 영역
(INITIAL INVESTMENT, ANNUAL INVESTMENT, EXPECTED RETURN, DURATION,)
- [x] 그 밑에 input 값에 따른 계산 결과를 테이블 형태로 보여줌
- [x] calculateInvestmentResults 외부 함수 사용해보기
- [x] 테이블에 결과 나오도록 하기
- [x] component 분리하기

## 계산 및 결과 기능 구현
### | 24.10.10 생각한 방법

- Calculator 에서 할 거
  - 사용자 입력 값을 mathUtil 사용해서 계산
  - Result 로 결과값 전달

- App 에서 할 거
  - 형제 컴포넌트는 서로 prop 전달이 안되므로, 중간 과정을 도와줌
  - Calculator 에서 전달 받은 결과 값을 Result 에 전달

- Result 에서 할 거
  - App 에서 전달 받은 결과 값을 mathUtil 사용해서 포맷팅
- for 문 돌려서 테이블 데이터 새로 생성

### | 24.10.11 수정한 방법

- 상태가 바뀌는 부분이 result 만 있는 것 같음.
- 그럼 result data 상태를 App 에서 관리 하는게 맞을 것 같음.
- Calculator 할 일 : input 값 App 에 전달
- App 할 일 : mathUtil 사용해서 계산한 결과 Result 에 전달
- Result 할 일 : mathUtil 사용해서 포맷팅 한 값 테이블에 바인딩


- 생각해보니...
- input data 도 상태로 관리해서 값이 바뀌면 
App 에서 mathUtil 의 계산 함수 호출 되도록 해야겠음.



## 연습 버전 완성 후, 강의 보면서 보완 (24.10.16)

- 강의 : 로고와 타이틀이 들어간 Header 컴포넌트를 만들었음.
> 정적인 부분은 index.html 에 작성해놔도 되기 때문에,
  강의와 다르게 header 부분을 index.html 로 이동

- 강의 : 사용자 입력을 받는 컴포넌트(Calculator.jsx)에서 section 태그를 사용.
> div 를 사용했었으나 section 이 '영역' 이라는 의미에서 명확한 느낌이라 수정

- 강의 : input 에 required 속성 추가
> '필수 값' 부분은 생각을 못 했는데, 필요한 것 같아 추가함

- 강의 : 사용자 입력(Calculator)에서 입력값(inputValue)의 상태 관리 및 calculateInvestmentResults() 호출
> 입력값(inputValue)이나, calculateInvestmentResults() 호출을
> Calculator 와 Result 컴포넌트에서 공통으로 사용하는 값이라 App 에서 관리하면 된다고 생각했는데,
> 모듈화에 중점을 두어 생각해보면 강의처럼 각 컴포넌트의 역할에 집중해서 App 이 아닌
> Calculator 와 Result 컴포넌트 각자의 역할에 맞게 나누는게 맞는 것 같아 수정
>> 하려고 했으나 강의에서도 App 에 다 때려넣어버림. 내가 맞게 했나 봄

- 강의 : input 의 value 가 string 이라서 계산할 때 나타나는 버그를
  입력값(inputValue)의 상태 변경하는 단계에서 value 앞에 '+' 붙이는 방법으로 해결함
> parseInt 사용했었는데, '+' 로 수정

- 강의 : Result 컴포넌트에서 map() 사용해서 테이블에 바인딩 할 때,
중복되지 않는 값을 갖고 있는 year 을 key로 사용함
> Index(tdIdx)를 따로 생성해서 key 에 대입했었는데, year 로 수정 

- 강의 : round() 사용 안하고, formatter.format() 만 사용
> formatter.format() 가 반올림도 해주는지 몰랐음. 수정함
