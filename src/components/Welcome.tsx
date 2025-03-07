import { useContext } from 'react'
import Quiz from '../img/quiz.svg'
import { QuizContext } from '../context/quiz'

const Welcome = () => {
  const quizContext = useContext(QuizContext);

  if (!quizContext) {
    throw new Error("QuizContext deve ser usado dentro de um QuizProvider");
  }

  const {dispatch } = quizContext;


  return (
    <div className='flex flex-col justify-center w-[30%]'>
      <div className='flex flex-col items-center justify-between mt-5 gap-3 text-white'>
      <h2 className='font-bold text-3xl'>Seja bem-vindo</h2>
      <p className='text-violet-800 font-semibold'>Clique no botão abaixo para começar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE", payload: "Playing" })}>
        Iniciar
      </button>
      </div>
     
      <div className='w-full'>
      <img src={Quiz} alt="Início do Quiz" />
      </div>
    </div>
    
  )
}

export default Welcome