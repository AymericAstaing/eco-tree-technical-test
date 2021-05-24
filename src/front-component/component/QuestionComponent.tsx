import React, { useState } from 'react';
import CSS from 'csstype';
import './../../css/App.css';

interface QuestionCardProps {
  onCardAnswerClicked: (id: number) => void;
  answerText: string;
  answerNbr: number;
}
interface QuestionComponentProps {
  onCardAnswerClicked: (id: number) => void;
}

export const QuestionTitle: React.FC<any> = (props) => {
  const textStyle : CSS.Properties = {
    color: "#282c34",
    alignSelf: "center"
  };

  return (<p style={textStyle}>Who in your life is the worst at using technology?</p>);
}

export const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  return (
    <div className="App-question-card" onClick={() => props.onCardAnswerClicked(props.answerNbr)}>
      <p>{props.answerText}</p>
    </div>
  );
}

export const QuestionComponent: React.FC<QuestionComponentProps> = (props) => {
  let [state] = useState<QuestionComponentProps>({
    onCardAnswerClicked: props.onCardAnswerClicked,
  });

  return (
    <div>
      <div className="App-question-body">
        <QuestionTitle/>
      </div>
      <div className="App-question-card-area">
        <QuestionCard onCardAnswerClicked={state.onCardAnswerClicked} answerText={"First answer"} answerNbr={1}/>
        <QuestionCard onCardAnswerClicked={state.onCardAnswerClicked} answerText={"Second answer"} answerNbr={2}/>
        <QuestionCard onCardAnswerClicked={state.onCardAnswerClicked} answerText={"Third answer"} answerNbr={3}/>
        <QuestionCard onCardAnswerClicked={state.onCardAnswerClicked} answerText={"Fourth answer"} answerNbr={4}/>
        <QuestionCard onCardAnswerClicked={state.onCardAnswerClicked} answerText={"Fifth  answer"} answerNbr={5}/>
        </div>
    </div>
  );
}

export default QuestionComponent;
