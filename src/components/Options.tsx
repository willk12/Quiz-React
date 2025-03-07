import { useContext } from "react";
import { QuizContext } from "../context/quiz";

interface OptionsProps {
    option: string;
    selectOption: () => void;
    answer: string;
  }

const Options = ({ option, selectOption, answer }: OptionsProps) => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error("QuizContext deve ser usado dentro de um QuizProvider");
  }

  const { state } = quizContext;

  return (
    <div
      onClick={() => {
        selectOption();
      }}
    >
      <p
        className={`option bg-violet-950 rounded mb-2 p-4 font-light opacity-[0.8] cursor-pointer hover:opacity-[1] transition ${
          state.answerSelected && option === answer ? "correct" : " "
        }
        ${state.answerSelected && option !== answer ? "wrong" : " "}  `}
      >
        {option}
      </p>
    </div>
  );
};

export default Options;
