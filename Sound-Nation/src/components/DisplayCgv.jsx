import { Layout } from "../components/Layout";
export const DisplayCgv = () => {
  return (
    <Layout>
      <section className="p-10">
        <div className="bg-black p-8 rounded-lg flex flex-col gap-10">
          <h1 className="text-[white] text-[2rem] flex justify-center">
            Conditions Générales de Vente (CGV)
          </h1>
          <p className="text-[white]">
            Les présentes Conditions Générales de Vente régissent la vente de
            billets et l'accès aux événements organisés par Sound Nation,
            ci-après dénommé "le Festival".
          </p>

          <h2 className="text-[white] underline text-[1.5rem]">
            1. Billetterie et Accès
          </h2>
          <div className="bg-[#71A984] p-5 rounded-lg">
            <p>
              <h3 className="underline mb-3 text-lg">
                1.1. Achat de Billets :{" "}
              </h3>
              Les billets pour le Festival peuvent être achetés en ligne via
              notre site web officiel ou auprès de points de vente autorisés.
              Les tarifs et conditions applicables sont détaillés lors de
              l'achat.
              <h3 className="underline mb-3 mt-6 text-lg">
                1.2. Accès aux Événements :
              </h3>{" "}
              L'accès aux événements du Festival est soumis à la présentation
              d'un billet valide, qui peut être électronique ou imprimé. Les
              détenteurs de billets doivent se conformer aux règles et aux
              consignes de sécurité établies par les organisateurs.
            </p>
          </div>
          <h2 className="text-[white] underline text-[1.5rem]">
            2. Annulation et Remboursement
          </h2>
          <div className="bg-[#71A984] p-5 rounded-lg">
            <p>
              <h3 className="underline mb-3 text-lg">
                2.1. Annulation d'un Événement :
              </h3>{" "}
              En cas d'annulation d'un événement par les organisateurs, les
              détenteurs de billets auront droit à un remboursement intégral du
              prix d'achat. <br />
              <h3 className="underline mb-3 mt-6 text-lg">
                2.2. Remboursement de Billets :
              </h3>
              Les billets ne sont pas remboursables sauf en cas d'annulation de
              l'événement. Aucun remboursement ne sera accordé pour tout autre
              motif, y compris en cas de perte ou de vol de billets.
            </p>
          </div>

          <h2 className="text-[white] underline text-[1.5rem]">
            3. Responsabilités et Sécurité
          </h2>
          <div className="bg-[#71A984] p-5 rounded-lg">
            <p>
              <h3 className="underline mb-3 text-lg">
                3.1. Responsabilité des Participants :
              </h3>{" "}
              Les participants au Festival sont responsables de leur propre
              sécurité et doivent se conformer aux règles établies par les
              organisateurs. Les organisateurs déclinent toute responsabilité en
              cas de dommages corporels, de pertes ou de vols survenus pendant
              le Festival.
              <h3 className="underline mb-3 mt-6 text-lg">
                3.2. Interdictions :
              </h3>{" "}
              Il est strictement interdit d'apporter des substances illicites,
              des armes, des objets dangereux ou tout autre matériel pouvant
              compromettre la sécurité du Festival. Les organisateurs se
              réservent le droit de refuser l'accès à toute personne ne
              respectant pas ces règles.
            </p>
          </div>

          <h2 className="text-[white] underline text-[1.5rem]">
            4. Propriété Intellectuelle
          </h2>
          <div className="bg-[#71A984] p-5 rounded-lg">
            <p>
              <h3 className="underline mb-3 text-lg">4.1. Droits d'Auteur :</h3>{" "}
              Les contenus audiovisuels, les photographies et les
              enregistrements réalisés lors du Festival sont la propriété
              intellectuelle des organisateurs et ne peuvent être reproduits ou
              diffusés sans autorisation préalable.
              <h3 className="underline mb-3 mt-6 text-lg">
                4.2. Utilisation d'Images :
              </h3>{" "}
              En participant au Festival, les participants autorisent les
              organisateurs à utiliser leur image à des fins promotionnelles et
              médiatiques, sans rémunération. En acceptant ces Conditions
              Générales de Vente, les participants reconnaissent avoir pris
              connaissance et accepté l'ensemble des règles et des conditions
              applicables au Festival. Pour toute question ou demande
              d'information supplémentaire, veuillez nous contacter à
              <span className="underline">
                {" "}
                contact.festival@sound-nation.com{" "}
              </span>
              ou consulter notre site web officiel.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
