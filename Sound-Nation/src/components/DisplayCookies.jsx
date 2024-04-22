export const DisplayCookies = () => {
  return (
    <div className="p-10">
      <section className="bg-black p-10 rounded-lg">
      <h1 className="text-[2rem] flex flex-row justify-center text-white mb-3">
            Gestion des cookies
          </h1>
        <div className="bg-[#71A984] rounded-lg p-5 flex flex-col gap-8">
          
          <p className="text-[1.2rem]">
            Si vous déposez un commentaire sur notre site, il vous sera proposé
            d’enregistrer votre nom, adresse e-mail et site dans des cookies.
            C’est uniquement pour votre confort afin de ne pas avoir à saisir
            ces informations si vous déposez un autre commentaire plus tard. Ces
            cookies expirent au bout d’un an. Si vous vous rendez sur la page de
            connexion, un cookie temporaire sera créé afin de déterminer si
            votre navigateur accepte les cookies. Il ne contient pas de données
            personnelles et sera supprimé automatiquement à la fermeture de
            votre navigateur. Lorsque vous vous connecterez, nous mettrons en
            place un certain nombre de cookies pour enregistrer vos informations
            de connexion et vos préférences d’écran. La durée de vie d’un cookie
            de connexion est de deux jours, celle d’un cookie d’option d’écran
            est d’un an. Si vous cochez « Se souvenir de moi », votre cookie de
            connexion sera conservé pendant deux semaines. Si vous vous
            déconnectez de votre compte, le cookie de connexion sera effacé. En
            modifiant ou en publiant une publication, un cookie supplémentaire
            sera enregistré dans votre navigateur. Ce cookie ne comprend aucune
            donnée personnelle. Il indique simplement l’ID de la publication que
            vous venez de modifier. Il expire au bout d’un jour.
          </p>
        </div>
      </section>
    </div>
  );
};
