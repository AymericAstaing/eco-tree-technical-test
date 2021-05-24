import React, { useState } from 'react';
import QuizMenu from './front-component/view/QuizMenu'
import Quiz from './front-component/view/Quiz'
import './css/App.css';

const views = ['MENU', 'IN_QUIZ'];
const totalQuestionNbr = 20;

interface AppState {
  currentView: string
} 

function AppManager () {
  let [state, setState] = useState<AppState>({
    currentView: views[0]
  });

  let onStateChanged = (viewState: any) => {
    setState({currentView: viewState});
  };

  return (state.currentView === views[0] ?
    <QuizMenu onStateChanged={onStateChanged}/> :
    <Quiz onStateChanged={onStateChanged} totalQuestionNbr={totalQuestionNbr} currentQuestionIndex={1}/>);
}

export default AppManager;
