import React from 'react';

export default function Presentation() {


    return (
      <div className="presentation-container">
        <article className="bienvenue">
            <h2>Bienvenue</h2>
        </article>
        <article className="presentation">
            <p>
                Le Quidditch Club accueille les jeunes recrues passionnées par le Quidditch !
                Chaque année, c'est près de 1200 jeunes qui rejoignent le Club pour réaliser leur rêve de gagner la Coupe des Maisons.
            </p>
            <p>
                Notre Club représente les 4 maisons hogwartiennes : Slytherin, Gryffindor, Ravenclaw et Hufflepuff. Si votre enfant souhaite rejoindre le Club pour la rentrée de septembre, veuillez consulter la <span className="linkme">rubrique des admissions</span>. La liste des équipements est également disponible sur notre site.
            </p>
            <p>
                L'honorable Minerva McGonagall, présidera la sélection des jeunes recrues et le choix de leur maison respective en vue de constituer les équipes.
            </p>
        </article>
      </div>
    );
  }
