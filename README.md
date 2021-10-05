# 김민호 201740204

[ 9월 29일 ]
* 음식 데이터에 rating 추가하기
 1. 값의 자료형은 number을 사용한다.
 2. props의 자료형을 검사할 수 있도록 만들어 주는 prop-types라는 도구가 필요하다.
 3. 터미널에서 npm install prop-types 입력후 설치한다.
 4.  Package.json 파일을 열어 dependencies 키에 있는 값에서 prop-types가 등록되어 있는지 확인한다.
 5. import PropTypes from ‘prop-types’;를 추가해야 한다
 6. 실행을 했는데 오류창이 떳으면 rating: PropTypes.string.isRequired 대신 rating: PropTypes.number.isRequired 로 교체해서 실행하면 된다.


[ 9월 15일 ]

 function renderFood(dish) {<br>
return (<br>
<Food name= {dish.name} picture={dish.Image}/>  )<br>
를 한줄로 요약한게 밑에 const 구문이다 <br>
const renderFood = dish => <Food name= {dish.name} picture={dish.Image}/> <br>
* 오늘 수업 압축 내용 코드
function App() {<br>
    return (<br>
    <div><br>
      {<br>
        foodLike.map(dish => (<Food key = {dish.id} name= {dish.name} picture={dish.Image}/>))<br>
      }<br>
    </div><br>
);}<br>

 [ 9월 8일 ]
 favicon 은 페이지위에 대표하는 사진 이다<br>
 실행을 시키려면 동일한 id값이 필요하다<br>
 리액트는 컴포넌트<br>