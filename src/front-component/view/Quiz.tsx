import React, { useState } from 'react';
import './../../css/App.css';
import CountdownComponent from './../component/CountdownComponent'
import QuestionComponent from './../component/QuestionComponent'

interface QuizRunningProps {
  onStateChanged: (reqState: any) => void;
  totalQuestionNbr: number;
  currentQuestionIndex: number;
}

export const Quiz: React.FC<QuizRunningProps> = (props) => {
  let [state, setState] = useState<QuizRunningProps>({
    onStateChanged: props.onStateChanged,
    totalQuestionNbr: props.totalQuestionNbr,
    currentQuestionIndex: props.currentQuestionIndex,
  });

  {/* Function trigered on countdown finished */}
  let onDone = () => {
    state.currentQuestionIndex = state.currentQuestionIndex + 1;
    setState({onStateChanged: props.onStateChanged, totalQuestionNbr: props.totalQuestionNbr, currentQuestionIndex: state.currentQuestionIndex});
    console.log(state.currentQuestionIndex);
  };

  {/* Function trigered on answer card clicked */}
  let onCardAnswerClicked = (id: number) => {
    if (state.currentQuestionIndex === state.totalQuestionNbr)
      state.onStateChanged('MENU')
    else {
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      setState({onStateChanged: props.onStateChanged, totalQuestionNbr: props.totalQuestionNbr, currentQuestionIndex: state.currentQuestionIndex});
    }
  }

  return (
    <div className="Quiz">
      <header className="App-header">
        <button className="App-backbutton" onClick={() => state.onStateChanged('MENU')}>
          MENU
        </button>
        <p className="App-questionCount">{state.currentQuestionIndex}/{state.totalQuestionNbr}</p>
        <CountdownComponent nb={state.currentQuestionIndex} onDone={onDone} />
      </header> 
      <QuestionComponent onCardAnswerClicked={onCardAnswerClicked}/>  
    </div>
  );
}

export default Quiz;
