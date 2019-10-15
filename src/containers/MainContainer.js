import React from 'react';
// import Home from '../components/Home'
import Question from '../components/Question'
import { connect } from 'react-redux'
import ScoreContainer from './ScoreContainer';
import UserCreater from '../components/UserCreater'

function MainContainer(props) {
    return (
      <div className="main-container">
        {/* <Home /> */}
        {/* {props.showScore ? <ScoreContainer /> : <Question />} */}
        <UserCreater />
      </div>
    )
  }

  function msp(state){
    return {
      showScore: state.showScore
    }
    
  }
  
  export default connect(msp)(MainContainer);