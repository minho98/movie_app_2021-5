# 김민호 201740204

[ 11월 3일 ]
* package.json과 package-lock.json 차이
- package.json은 패기지 의존성 관리 파일이다. 
- 협업을 할 때는 팀원들 각자의 컴퓨터에 같은 패키지들을 설치해서 동일한 개발환경을 구성해야 하는게 이때 사용하는 것이 package.json이다. 
- package-lock.json은 package.json 이 변경될 때 마다 업데이트 되는 것으로 좀더 정확한 버전이기록되어 있다.


* navigation.js 코드
~~~javascript
import {Link} from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return(
        <div className="nav">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        </div>
    )
}
~~~

export default Navigation

[ 10월 6일 ]
* 
~~~javascript
import React from "react"
import axios from "axios"

class App extends React.Component{
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
      const{
        data: {
          data: {movies}
        }
      }= await axios.get("https://yts-proxy.now.sh/list_movies.json")
      // const movies 
      console.log(movies.data.data.movies);
    }

    componentDidMount(){
      this.getMovies()
    }
    render(){
        const {isLoading} = this.state
        return(
            <div>
                { isLoading ? 'Loading...' : '영호ㅏ 데이터 출력'}
            </div>
        )
    }

}

export default App
~~~
[ 9월 29일 ]
* 음식 데이터에 rating 추가하기
 1. 값의 자료형은 number을 사용한다.
 2. props의 자료형을 검사할 수 있도록 만들어 주는 prop-types라는 도구가 필요하다.
 3. 터미널에서 npm install prop-types 입력후 설치한다.
 4.  Package.json 파일을 열어 dependencies 키에 있는 값에서 prop-types가 등록되어 있는지 확인한다.
 5. import PropTypes from ‘prop-types’;를 추가해야 한다
 6. 실행을 했는데 오류창이 떳으면 rating: PropTypes.string.isRequired 대신 rating: PropTypes.number.isRequired 로 교체해서 실행하면 된다.
 ----------------------------------------
 * state로 숫자 증감 기능 만들어 보기
 ~~~ javascript 
 state = {
    count:0
  }

  add = () =>{
    this.setState({count : this.state.count +1})
    // console.log('add');
  }

  minus = () =>{
    this.setState({count : this.state.count -1})
    // console.log('minus');
  }
  render(){
    console.log('render');
    return (
      <div>
      <h1>The number is:{this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>minus</button>
      </div>
~~~


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