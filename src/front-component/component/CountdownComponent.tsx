import React, { useState } from 'react';
import './../../css/App.css';

interface CountdownComponentProps {
  nb: number;
  onDone: () => void;
}

const timePerQuesionInS = 30;

export const CountdownComponent: React.FC<CountdownComponentProps> = (props) => {
  let [state] = useState<CountdownComponentProps>({
    nb: props.nb,
    onDone: props.onDone,
  });

  const [counter, setCounter] = React.useState(timePerQuesionInS);

  let resetTimer = () => {
    setCounter(timePerQuesionInS);
  }

  React.useEffect(() => {
    if (counter <= 0) {
      resetTimer();
      state.onDone();
    } else {
      const timer = setTimeout( () => { setCounter((counter) => counter - 1) }, 1000);
      return () => clearTimeout(timer);
    }
  }, [counter]);

  React.useEffect(() => {
    resetTimer();
  }, [props.nb]);

  return (
    <div className="App-countdown">
      <div >{counter}s</div>
    </div>
  );
}

export default CountdownComponent;
