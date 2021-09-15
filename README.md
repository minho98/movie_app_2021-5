# 김민호 201740204

[ 9월 15일 ]

 function renderFood(dish) {<br>
return (<br>
<Food name= {dish.name} picture={dish.Image}/>  )<br>
를 한줄로 요약한게 밑에 const 구문이다 <br>
const renderFood = dish => <Food name= {dish.name} picture={dish.Image}/><br>
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