import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Options from "./Options";

const Questions = () => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error("QuizContext deve ser usado dentro de um QuizProvider.");
  }

  const { state, dispatch } = quizContext;
  const currentQuestion = state.questions[state.currentQuestion];

  const onSelectOption = (option: boolean) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload:{answer: currentQuestion.answer, option}
    })
  };

  return (
    <div
      className="text-white text-center font-bold max-w-lg bg-violet-800 rounded-2xl p-4"
      id="question"
    >
      <p className="font-light">
        Pergunta {state.currentQuestion + 1} de {state.questions.length}
      </p>
      <h2 className="my-4 ">{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option: any) => (
          <Options
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {state.answerSelected && (
        <button
          className="border-2 border-b-gray-50"
          onClick={() => dispatch({ type: "CHANGE_QUESTIONS" })}
        >
          Continuar
        </button>
      )}
    </div>
  );
};

export default Questions;
