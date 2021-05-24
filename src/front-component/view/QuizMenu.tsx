import React, { useContext, useState } from 'react';
import './../../css/App.css';

interface QuizMenuProps {
  onStateChanged: (reqState: any) => void;
}

export const QuizMenu: React.FC<QuizMenuProps> = (props) => {

  let [state, setState] = useState<QuizMenuProps>({
    onStateChanged: props.onStateChanged
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Quiz eco tree</p>
        <button onClick={() => state.onStateChanged('IN_QUIZ')}>
          Start
        </button>
      </header> 
    </div>
  );
}

export default QuizMenu;
