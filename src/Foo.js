// import Potato from "./potato"


const foodLike = [
    {
      id:1,
      name: "chikin",
      Image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MjZfMjkz%2FMDAxNjI5OTUzMjk0OTM1.rmW638uSwHWpTIsvkFqeGk5OKroJb5Xyk4yw-woCZqYg.759P0qJZ5XjT9xIejNLuwPpVYNy90pjlnhmoBWMluPMg.JPEG.hje1590zz%2FIMG_6315.jpg&type=sc960_832"
    },
    {
      id:2,
      name: "berger",
      Image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MTlfMjYg%2FMDAxNjI0MDg0MzYxMDAy.jj4sOmded5kQA2QNzroHg2016sfJ6XQQ4oi5BTHhFXAg.q191Eem5BbRw8aL-Brop7Gs7FpVJeMNP-UHk_sDVNcUg.JPEG.holyspirit_2%2F20210617%25A3%25DF215933.jpg&type=sc960_832"
    }
  ]
  
  // function renderFood(dish) {
  //   return (
  //     <Food name= {dish.name} picture={dish.Image}/>
  //   )
  
  // } 위에 15~20 줄 요약한게 22번줄
  
  const renderFood = dish => <Food name= {dish.name} picture={dish.Image}/>
  
  function App() {
      return (
      <div>
        {
          foodLike.map(dish => (<Food key = {dish.id} name= {dish.name} picture={dish.Image}/>))
        }
      </div>
    );
  }
  
  function Food({name, picture}){
    return (
      <div>
        <h1> I Like {name}</h1>
        <img src= {picture} alt={name}/>
      </div>
    )
    
  }
  export default App;
  
  import React,{Component} from 'react'
  
  class APP extends Component{
    state = {
      count:0
    }
    render(){
      return (
        <h1>The number is:{this.state.count}</h1>
      )
    }
  }
  export default APP;