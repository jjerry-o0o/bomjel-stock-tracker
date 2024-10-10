## todo list
- [x] 상단에 이미지와 타이틀
- [x] 그 밑에 사용자 input 영역
(INITIAL INVESTMENT, ANNUAL INVESTMENT, EXPECTED RETURN, DURATION,)
- [x] 그 밑에 input 값에 따른 계산 결과를 테이블 형태로 보여줌
- [x] calculateInvestmentResults 외부 함수 사용해보기
- [ ] 테이블에 결과 나오도록 하기
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

