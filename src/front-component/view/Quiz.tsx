import { stat } from 'fs';
import React, { useContext, useState } from 'react';
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
    currentQuestionIndex: props.currentQuestionIndex
  });

  let goToNextQuestion = () => {
    console.log("OK");
    state.currentQuestionIndex++;
    setState(state);
  };

  {/* Function trigered on countdown finished */}
  let onDone = () => {
    return goToNextQuestion();
  };

  return (
    <div className="Quiz">
      <CountdownComponent nb={state.currentQuestionIndex} onDone={onDone}/>
      <QuestionComponent/>  
    </div>
  );
}

export default Quiz;
