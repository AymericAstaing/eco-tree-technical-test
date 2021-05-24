import React, { useContext, useState } from 'react';
import QuizMenu from './front-component/view/QuizMenu'
import Quiz from './front-component/view/Quiz'
import './css/App.css';
import ReactDOM from 'react-dom';
import { updateSourceFile } from 'typescript';

const views = ['MENU', 'IN_QUIZ'];

interface AppState {
  currentView: string
} 

function AppManager () {

  let [state, setState] = useState<AppState>({
    currentView: views[0]
  });

  {/* Function called when child wants to change current view */}
  let onStateChanged = (reqState: any) => {
    if (state.currentView != reqState) {
      state.currentView = reqState;
      setState(state);
      console.log(state.currentView)

    }
  };

  return state.currentView == views[0] ?
  <QuizMenu onStateChanged={onStateChanged}/> :
  <Quiz onStateChanged={onStateChanged} totalQuestionNbr={20} currentQuestionIndex={0}/>;
}

export default AppManager;
