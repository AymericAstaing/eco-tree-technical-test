import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import Quiz from '../view/Quiz';
import './../../css/App.css';


interface CountdownComponentProps {
  nb: number;
  onDone: () => void;
}

const timePerQuesionInS = 5;
let currentQuestionNbr = 0;

export const CountdownComponent: React.FC<CountdownComponentProps> = (props) => {
  let [state, setState] = useState<CountdownComponentProps>({
    nb: props.nb,
    onDone: props.onDone,
  });

  currentQuestionNbr = props.nb;
  
  const [counter, setCounter] = React.useState(timePerQuesionInS);

  const tick = () => {
    setCounter(counter - 1);
    if (counter == 0) {
      props.onDone();
      setCounter(timePerQuesionInS);
    }
  };

  React.useEffect(() => {
    counter >= 0 && setTimeout(() => tick(), 1000);
  }, [counter]);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
}

export default CountdownComponent;
