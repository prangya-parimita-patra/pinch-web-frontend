import { useState, useEffect, useContext } from "react";
import QuestionStyle from './Questions.module.css'
import swal from 'sweetalert'
import PinchPlay from '../../public/pinchPlay.png'
import Image from 'next/image';
import Badge from '../../public/reward badge.png'
import Link from "next/link";
import {useRouter} from "next/router"
import getURL from "../../utils/fetchURL";
import axios from "axios";

const Index = ({data,ID}) => {
    const router = useRouter();
    const [questions, setQuestions] = useState([]);
    const [mcqs, setMcqs] = useState([]);
    const [numeric, setNumeric] = useState([]);
    const [userAnswer, setUserAnswer] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [explanation, setExplanation] = useState([]);
    const [val, setVal] = useState(0);
    useEffect(() => {
        if(!data){
            router.push("/");
            if(ID===401){
                swal({
                    title: "Error!",
                    text: "You have given the quiz for the maximum times, please wait for further updates...",
                    icon: "error",
                    button: "Continue",
                })
            }
            else if(ID===503){
                swal({
                    title: "Error!",
                    text: "User not found",
                    icon: "error",
                    button: "Continue",
                })
            }
            else if(ID===405){
                swal({
                    title: "Error!",
                    text: "Some server error occured",
                    icon: "error",
                    button: "Continue",
                })
            }
        }
        else{
            setMcqs(data.mcqArr);
            setNumeric(data.numArr);
            let a = [...questions];
            data.mcqArr.map((c) => {
                    a.push(c.Question.Questions);
                    userAnswer.push("Not Selected")
            })
            data.numArr.map((c) => {
                a.push(c.Question.Questions);
                userAnswer.push("Not Selected")
            })
            setQuestions(a);
        }
    }, [data]);
    // quizData();
    const newAnswer = (i,value) => {
        let newArr = [...userAnswer];
        newArr[i] = value;
        setUserAnswer(newArr);
    }
    const submitResponse = async () => {
        mcqs.map((question, index) => {
            explanation.push(question.Question.Explanation);
            answers.push(question.Question.Ans)
        });
        numeric.map((questions) => {
            explanation.push(questions.Question.Explanation);
            answers.push(questions.Question.Ans)
        });
        let x=0;
        for(let i=0; i<10; i++){
            if(userAnswer[i]===answers[i]){
                x++;
            }
            setVal(x);
        }
        // console.log(val);
        setShowResult(false);
        const url = getURL(window.location.hostname);
        await fetch(`https://web-backend.pinchapp.in/users/updateFields`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ID, val: x
            })
        })
        if(localStorage.getItem('query')){
            localStorage.removeItem('query');
        }
    }
    // console.log(questions);
return (
    <>
    <div className={`${QuestionStyle.quiz__home}`}>
    <Image src={PinchPlay} alt="PinchPlayLogo" width={282} height={130} className={`${QuestionStyle.image}`}/>
    {
    showResult ? (
        <>
        <div className={`${QuestionStyle.quiz__questions}`}>
            {
                mcqs.length && mcqs.map((question, index) =>(
                    <div className={`${QuestionStyle.quiz}`} key={question.Question.Questions}>
                        <h3>{question.Question.Questions}</h3>
                        <h2 className={`${QuestionStyle.question__number}`}>{index+1}</h2>
                        <div className={`${QuestionStyle.options}`}><div>
                            <input type="radio" name={question.Question.Questions} id={question.Question.A} value={question.Question.A} onClick={() =>{
                                    newAnswer(index,question.Question.A)}}/>
                            <div className={`${QuestionStyle.radio__radio}`}></div>
                            <label htmlFor={question.Question.A}> A) {question.Question.A} </label>
                            </div>
                            <div>
                                <input type="radio" name={question.Question.Questions} id={question.Question.B} value={question.Question.B} onClick={()=>{ 
                                    newAnswer(index, question.Question.B)}}/>
                                <div className={`${QuestionStyle.radio__radio}`}></div>
                                <label htmlFor={question.Question.B}> B) {question.Question.B} </label>
                            </div>
                            <div>
                                <input type="radio" name={question.Question.Questions} id={question.Question.C} value={question.Question.C} onClick={() =>{ 
                                    newAnswer(index, question.Question.C)}}/>
                                <div className={`${QuestionStyle.radio__radio}`}></div>
                                <label htmlFor={question.Question.C}> C) {question.Question.C} </label>
                            </div>
                            <div>
                            <input type="radio" name={question.Question.Questions} id={question.Question.D} value={question.Question.D} onClick={() =>{ 
                                    newAnswer(index, question.Question.D)}}/>
                            <div className={`${QuestionStyle.radio__radio}`}></div>
                            <label htmlFor={question.Question.D}> D) {question.Question.D} </label>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                numeric.length && numeric.map((question, index)=> (
                    <div key={question.Question.Questions}>
                        {
                            index+9===10 ? (
                                <>
                                <div className={`${QuestionStyle.quiz}`}>
                                    <h3>{question.Question.Questions}</h3>
                                    <h2 className={`${QuestionStyle.question__number}`}>{index+9}</h2>
                                    <div className={`${QuestionStyle.placeholder}`}>
                                        <input type="text" placeholder="Answer in number" onChange={(e)=>newAnswer(index+8, e.target.value)}/>
                                    </div>
                                </div>
                                <div className={`${QuestionStyle.submit}`}>
                                    <button onClick={submitResponse}>Submit</button>
                                </div>
                                </>
                            ) : (
                                <>
                                <div className={`${QuestionStyle.quiz}`}>
                                    <h3>{question.Question.Questions}</h3>
                                    <h2 className={`${QuestionStyle.question__number}`}>{index+9}</h2>
                                    <div className={`${QuestionStyle.placeholder}`}>
                                        <input type="text" placeholder="Answer in number" onChange={(e)=>newAnswer(index+8, e.target.value)}/>
                                    </div>
                                </div>
                                </>
                            )
                        }
                    </div>
                ))
            }
        </div>
        {/* <div className={`${QuestionStyle.submit}`}>
            <button onClick={submitResponse}>Submit</button>
        </div> */}
        </>
        ) : (
            <div className="results__modal">
                <div className="badge">
                    <Image src={Badge}  alt="Your Badge"/>
                </div>
                <div className="message">
                    <h1>Congratulations</h1>
                    <div className="score">
                        <h2>Score</h2>
                        <h1>{val}/10</h1>
                    </div>
                    {/* <h2>You have been rewarded with a E-book</h2>
                    <button>Download Now</button> */}
                    <Link href={{ pathname: "/Results", query: {questions, userAnswer, answers, explanation}}}>Check Answers</Link>
                </div>
            </div>
        )
    }
    </div>
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
    const id = context.params.id ;
    const res = await axios.get(`https://web-backend.pinchapp.in/quiz/data/${id}`)
    .then((res)=> {
        return {data: res.data, ID: id}
    }).catch(err=> {
        if(err.response.status===401) return {ID: 401}
        if(err.response.status==503) return {ID:503}
        if(err.response.status==405) return {ID:405}
    });
    return { props: res }
}
