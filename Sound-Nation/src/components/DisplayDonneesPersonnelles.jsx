export const DisplayDonneespersonnelles = () => {
  return (
    <div className=" bg-black rounded-lg p-10 flex-col m-10 flex items-center">
      <h1 className="text-[white] text-[1.6rem] mb-5">Données personnelles</h1>
      <section className="flex flex-col gap-8 p-5">
        <div className="bg-[#71A984] rounded-lg p-3 flex flex-col gap-4">
          <h2 className="text-[black] text-xl underline">
            Utilisation et transmission de vos données personnelles
          </h2>
          <p className="text-[black]">
            Si vous demandez une réinitialisation de votre mot de passe, votre
            adresse IP sera incluse dans l’e-mail de réinitialisation.
          </p>
        </div>
        <div className="bg-[#023E33] rounded-lg p-3 flex flex-col gap-4">
          <h2 className="text-[white] text-xl underline">
            Durées de stockage de vos données
          </h2>
          <p className="text-[white]">
            Si vous laissez un commentaire, le commentaire et ses métadonnées
            sont conservés indéfiniment. Cela permet de reconnaître et approuver
            automatiquement les commentaires suivants au lieu de les laisser
            dans la file de modération. Pour les comptes qui s’inscrivent sur
            notre site (le cas échéant), nous stockons également les données
            personnelles indiquées dans leur profil. Tous les comptes peuvent
            voir, modifier ou supprimer leurs informations personnelles à tout
            moment (à l’exception de leur identifiant). Les gestionnaires du
            site peuvent aussi voir et modifier ces informations.
          </p>
        </div>
        <div className="bg-[#71A984] rounded-lg p-3 flex flex-col gap-4">
          <h2 className="text-[black] text-xl underline">
            Les droits que vous avez sur vos données
          </h2>
          <p className="text-[black]">
            Si vous avez un compte ou si vous avez laissé des commentaires sur
            le site, vous pouvez demander à recevoir un fichier contenant toutes
            les données personnelles que nous possédons à votre sujet, incluant
            celles que vous nous avez fournies. Vous pouvez également demander
            la suppression des données personnelles vous concernant. Cela ne
            prend pas en compte les données stockées à des fins administratives,
            légales ou pour des raisons de sécurité.
          </p>
        </div>
        <div className="bg-[#023E33] rounded-lg p-3 flex flex-col gap-4">
          <h2 className="text-[white] text-xl underline">
            Où vos données sont envoyées
          </h2>
          <p className="text-[white]">
            Les commentaires des visiteurs peuvent être vérifiés à l’aide d’un
            service automatisé de détection des commentaires indésirables. Si
            vous vous rendez sur la page de connexion, un cookie temporaire sera
            créé afin de déterminer si votre navigateur accepte les cookies. Il
            ne contient pas de données personnelles et sera supprimé
            automatiquement à la fermeture de votre navigateur. Lorsque vous
            vous connecterez, nous mettrons en place un certain nombre de
            cookies pour enregistrer vos informations de connexion et vos
            préférences d’écran. La durée de vie d’un cookie de connexion est de
            deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous
            cochez « Se souvenir de moi », votre cookie de connexion sera
            conservé pendant deux semaines. Si vous vous déconnectez de votre
            compte, le cookie de connexion sera effacé. En modifiant ou en
            publiant une publication, un cookie supplémentaire sera enregistré
            dans votre navigateur. Ce cookie ne comprend aucune donnée
            personnelle. Il indique simplement l’ID de la publication que vous
            venez de modifier. Il expire au bout d’un jour.
          </p>
        </div>
      </section>
    </div>
  );
};
