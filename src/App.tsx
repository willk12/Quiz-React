import "./App.css";
import GameOver from "./components/GameOver";
import Questions from "./components/Questions";
import Welcome from "./components/Welcome";
import { QuizContext } from "./context/quiz";
import { useContext, useEffect } from "react";

function App() {

  const quizContext = useContext(QuizContext);

  if(!quizContext){
    throw new Error("QuizContext deve ser usado dentro de um QuizProvider");
  }

  const { state, dispatch } = quizContext;

  useEffect(()=>{
      dispatch({ type: "REORDER_QUESTIONS" });
  },[])

  return (
    <>
      <div className="App h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold pt-3 text-center text-white mb-3">Quiz de Programação</h1>
        {state.gameStage === "Start" && <Welcome />}
        {state.gameStage === "Playing" && <Questions />}
        {state.gameStage === "End" && <GameOver />}
      </div>
    </>
  );
}

export default App;