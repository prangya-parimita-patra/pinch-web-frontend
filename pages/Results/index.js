import { useEffect, useState } from 'react';
import QuestionStyle from '../quiz/Questions.module.css'
import PinchPlay from '../../public/pinchPlay.png'
import Image from 'next/image';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    // const location = useLocation();
    // console.log(router.query);
    if(!router.query){
        router.push("/");
    }
    let queryItems;
    const [userAnswers, setUserAnswers] = useState([]);
    const [cAnswer, setCAnswer] = useState([]);
    const [checkAnswer, setCheckAnswer] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [explanation, setExplanation] = useState([]);
    // console.log(location.state);
    useEffect(() => {
        if(!localStorage.getItem('query')){
            localStorage.setItem('query', JSON.stringify(router.query))
        }
        queryItems = JSON.parse(localStorage.getItem('query'));
        setUserAnswers(queryItems.userAnswer);
        setCAnswer(queryItems.answers);
        setQuestions(queryItems.questions);
        setExplanation(queryItems.explanation);
      let A = [...queryItems.userAnswer];
      let B = [...queryItems.answers];
      let C = [...checkAnswer];
      for(let i=0; i<B.length; i++){
        if(A[i]===B[i]){
          C[i]=true;
        }
        else C[i]=false;
      }
      setCheckAnswer(C);
    }, [])
  return (
    <div className={`${QuestionStyle.quiz__home}`}>
      <Image src={PinchPlay} alt="PinchPlayLogo" width={282} height={114} />
      {
        checkAnswer.map((data, index) => (
          <div className="check" key={index}>
            {
              data ? (
                <div className={`${QuestionStyle.answers} ${QuestionStyle.correct}`}>
                  <h2>{questions[index]}</h2>
                  <div>
                    <p>Your Answer : {userAnswers[index]}</p>
                    <p>Correct Answer : {cAnswer[index]}</p>
                    {/* <p>Explanation : {explanation[index]}</p> */}
                  </div>
                </div>
              ) : (
                <div className={`${QuestionStyle.answers} ${QuestionStyle.incorrect}`}>
                  <h2>{questions[index]}</h2>
                  <div>
                    <p>Your Answer : {userAnswers[index]}</p>
                    <p>Correct Answer : {cAnswer[index]}</p>
                    {/* <p>Explanation : {explanation[index]}</p> */}
                  </div>
                </div>
              )
            }
          </div>
          
        ))
      }
    </div>
  )
};

export default Index;
