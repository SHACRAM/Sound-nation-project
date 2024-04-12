import { Question } from "./Question";

const questionsReponse = [
  {
    id: 1,
    question: "Est-il possible d'acheter des billets sur place?",
    reponse: "Oui, un point de vente sera présent à l'entrée du festival.",
  },
  {
    id: 2,
    question:
      "Est-ce que le site du festival ainsi que les activités sur place sont accessibles aux personnes en fauteuil roulant?",
    reponse:
      "Toutes les infrastructures du festival ainsi que les activités sont accessibles aux personnes à mobilité réduite.",
  },
  {
    id: 3,
    question: "Y'a t'il de la restauration sur place?",
    reponse:
      "Plusieurs points de restaurations seront présents pendant toute la durée du festival, vous pourrez les retrouver grace à la carte présente sur notre application.",
  },
  {
    id: 4,
    question:
      "Où trouver la programmation ainsi que les scènes sur lesquelles auront lieu les concerts?",
    reponse:
      "En téléchargant notre application vous pourrez suivre heure par heure la programmation des concerts ainsi que les points de rencontre des artistes.",
  },
];

export const Faq = () => {
  return (
    <div className="bg-black rounded-lg p-10 flex-col">
      <h1 className="text-white flex justify-center text-3xl mb-10">FAQ</h1>

      {questionsReponse.map((question) => (
        <Question
          id={question.id}
          key={question.id}
          question={question.question}
          reponse={question.reponse}
        />
      ))}
    </div>
  );
};
