// // Pierre est un objet litéral :

let pierre = {
  nom: ["Pierre", "Martin"],
  age: 29,
  mail: "pierre@pierre-martin.com",

  bonjour: function () {
    console.log(
      "Bonjour, je suis " + this.nom[0] + ", j'ai " + this.age + " ans"
    );
  },
};


//*********************************************************** */
//*********************************************************** */
// Utilisateur() est une fonction constructeur
// function Utilisateur(n, a, m) {
//   this.nom = n;
//   this.age = a;
//   this.mail = m;

//   this.bonjour = function () {
//     console.log(
//       "Bonjour, je suis " + this.nom[0] + ", j'ai " + this.age + " ans"
//     );
//   };
// }

// let pierre = new Utilisateur(
//   ["Pierre", "Martin"],
//   29,
//   "pierre@pierre-martin.com"
// );

// let mathilde = new Utilisateur(["Math", "Ml"], 27, "math@gmail.com");
// let florian = new Utilisateur(["Flo", "Dchd"], 29, "flo.dchd@gmail.com");

// //  //On ajoute une propriété à pierre
// // pierre.taille = 180;

//**************************************************************************** */
