# 김민호 201740204

[11월 24일]
* getting start
- react는 처음부터 점진적으로 적용 할수 있도록 설계되었으며 필요한 만큼 리액트를 사용할 수 있다
- codesandbox는 creat-react-app으로 생선된 프로젝트와 동일한 환경에서 테스가 가능하다
- cdn방식으로 간편하게 테스트할 수 있도록 html코드를 제공해준다
- react문서가 어렵게 느껴진다면. tania rascia가 쓴 react 개요를 먼저 학습하는 것이 도움이 된다
- 개발을 통해 react를 학습하고 싶다면 자습서를 추천

[ 11월 17일]
* todolist 요소
-  todoapp 과 todolist 두개의 컴포넌트로 구성 하고 유저입력을 강제로 대문자로 변경할 경우에도 사용한다
-  handlechange는 모든키보드 입력마다 리액트의 state를 갱신해서 보여준다
* 외부 플러그인을 사용하는 컴포넌트
- 외부 컴포넌트를 사용한 markdown 에디터이다
- 다만 외부 플러그인은 remarkable

기본 필수 태그
~~~javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script crossorigin src="..."></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel">

    </script>    
</head>
<body>
    <div id=""></div>
</body>
</html>
~~~



[ 11월 10일]

오늘의 수업 중요 포인트 :  
npm install gh-pages 설치해야 실행가능
배포기능 : npm run deploy

min 파일
줄바꿈을 다 없애버리고 한줄로 사용.-> 줄바꿈도 1byte 이기 때문에 500줄 짜리 한줄로 만들면 500byte 줄일수 있음./배포할때는 min 파일로 해야함.
* 홈페이지 url주소 :  "homepage": "https://minho98.github.io/movie_app_2021-5"

* Home.js 코드
~~~javascript
import React from "react"
import axios from "axios"
import Movie from "../components/Movie"
import "./Home.css"

class Home extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }

  getMovies = async() => {
    const{
      data: {
        data : {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    this.setState({movies, isLoading: false})
  }

  componentDidMount(){
   this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state
    return(
      <section className='container'>
        { isLoading ?
        ( <div className='loader'>
          <span className='loader-text'> Loading....</span>
          </div>
          ) : (
            <div className='movies'>
              {
                movies.map((movie) => {
                  return <Movie 
                          key = {movie.id}
                          id = {movie.id}
                          year = {movie.year}
                          title = {movie.title}
                          summary = {movie.summary}
                          poster = {movie.medium_cover_image}
                          genres = {movie.genres}
                          />
                        })}
            </div>
          )}
        </section>
    )
  }
}

export default Home;
~~~
* about.js 코드
~~~javascript
import './About.css'

function About(props) {
    console.log(props);
    return(
        <div className='about-container'>   
        <span><h1>Hello!!</h1></span>
        </div>
    )
}

export default About
~~~


[ 11월 3일 ]
* package.json과 package-lock.json 차이
- package.json은 패기지 의존성 관리 파일이다. 
- 협업을 할 때는 팀원들 각자의 컴퓨터에 같은 패키지들을 설치해서 동일한 개발환경을 구성해야 하는게 이때 사용하는 것이 package.json이다. 
- package-lock.json은 package.json 이 변경될 때 마다 업데이트 되는 것으로 좀더 정확한 버전이기록되어 있다.

수업시간에 한  중요코드들 기록하기
* navigation.js 코드
Home과 About이라는 2개의 버튼을 만들고, 각각의 버튼을 눌렸을 때 해당 화면이 보인다
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
export default Navigation
~~~

* detail.js 코드
~~~javascript
import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history} = this.props
        if(location.state === undefined){
            history.push("/")
        }
    }
    render(){
        return(
            <span>Hello</span>
        )
    }
}

export default Detail
~~~



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