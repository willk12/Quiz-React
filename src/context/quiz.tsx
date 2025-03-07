import { createContext, useReducer, ReactNode, Dispatch } from "react";
import questions from "../data/questions";


const STAGES = ["Start", "Playing", "End"] as const;
type GameStage = typeof STAGES[number];


interface QuizState {
  gameStage: GameStage;
  questions: typeof questions;
  currentQuestion: number;
  score: number;
  answerSelected: boolean;
}


type QuizAction = 
  | { type: "CHANGE_STATE"; payload: GameStage }
  | { type: "RESET" }
  | { type: "REORDER_QUESTIONS" }
  | { type: "CHANGE_QUESTIONS" }
  | { type: "NEW_GAME" }
  | { type: "CHECK_ANSWER"; payload: { answer: any; option: any } };

const initialState: QuizState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
        
      };

      case "REORDER_QUESTIONS":
         const reorderedQuestions = questions.sort(() =>{
          return Math.random() - 0.5;
         });
         return{
            ...state,
            questions: reorderedQuestions,
         };

         case "CHANGE_QUESTIONS":
           const nextQuestion =  state.currentQuestion + 1;  
           let endGame = false;
           if(!questions[nextQuestion]){
             endGame = true;
           }
             
           return {
              ...state,
              currentQuestion: nextQuestion,
              gameStage: endGame ? STAGES[2] : state.gameStage,
              answerSelected: false,
           };

           case "NEW_GAME":
             return initialState;


           case "CHECK_ANSWER":

           if(state.answerSelected) return state;
            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

           


            if(answer === option) correctAnswer = 1;

            return {
              ...state,
              score: state.score + correctAnswer,
              answerSelected: option,
            };
             


    default:
      return state;
  }
};


export const QuizContext = createContext<{
  state: QuizState;
  dispatch: Dispatch<QuizAction>;
} | null>(null);




export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};