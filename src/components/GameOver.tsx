
import { useContext } from "react";
import WellDone from "../img/welldone.svg";
import { QuizContext } from "../context/quiz";

const GameOver = () => {

    const quizContext = useContext(QuizContext);

    if(!quizContext){
        throw new Error("QuizContext deve ser usado dentro de um QuizProvider");  }

    const {state: quizState, dispatch} = quizContext;
  return (
    <div className='flex flex-col items-center justify-between mt-5 gap-3 text-white w-[25%]'>
       <h2 className='font-bold text-4xl'>Fim de Jogo!</h2>
       <p>Porntuação: {quizState.score}</p>
       <p>Voce acertou {quizState.score} de {quizState.questions.length} de perguntas.</p>
       <img src={WellDone} alt="" />
       <button className='mt-5' onClick={() => dispatch({ type: "NEW_GAME"})}>Reiniciar</button>
        
    </div>
  )
}

export default GameOver
