import { Question } from "./informations/Question";
import axios from "axios";
import { useState, useEffect } from "react";
// Composant qui permet de récupérer les questions et réponses de la FAQ et de les envoyer au composant Question
export const Faq = () => {
  const [questionReponse, setQuestionReponse] = useState([]);
  const [loading, setLoading] = useState(true);

  const getQuestionsReponse = async () => {
    try{
      const response = await axios.get(`https://soundnation.duckdns.org/api/informations/public/faq`);
      if(response.data.status){
        setQuestionReponse(response.data.data);
        setLoading(false);
      }
    }catch(error){
      setLoading(true);
    }
  };

  useEffect(() => {
    getQuestionsReponse();
  },[]);


  return (
    <div className="bg-black rounded-lg p-4 flex-col">
      <h1 className="text-white flex justify-center text-[2rem]">FAQ</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center">
        {questionReponse.map((question, index) => (
            <div key={index} className="flex w-fit">
              <Question
                id={question.id}
                question={question.question}
                reponse={question.reponse}
            />
            </div>
        ))}
      </div>
    </div>
  );
};
