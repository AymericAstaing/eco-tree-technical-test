import React, { useState } from 'react';
import CSS from 'csstype';
import './../../css/App.css';

interface QuizMenuProps {
  onStateChanged: (reqState: any) => void;
}

export const QuizMenu: React.FC<QuizMenuProps> = (props) => {
  let [state] = useState<QuizMenuProps>({
    onStateChanged: props.onStateChanged
  });

  const introTextStyle : CSS.Properties = {
    color: "#FBD872",
    fontSize: "calc(50px + 2vmin)"
  };

  return (
    <div className="App">
      <div style={introTextStyle} className="App-menu-body">
        <p>QUIZ ECO TREE</p>
        <button className="App-menu-button" onClick={() => state.onStateChanged('IN_QUIZ')}>
          START
        </button>
      </div> 
    </div>
  );
}

export default QuizMenu;
