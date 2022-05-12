class Voiture {
  constructor(marque, couleur) {
    (this.marque = marque), (this.couleur = couleur);
  }
  MyCar() {
    console.log(
      `Hello, ma voiture est une super ${this.marque} de couleur ${this.couleur} `
    );
  }
}

let maVoiture = new Voiture("Smart", "blanche");
let tomVoiture = new Voiture("peugeot", "jaune");

//***************************************************************************//

class InfoVoiture extends Voiture {
  vitesseMax = 0;
  quantiteCarburant = 0;
  volumeReservoir = 0;

  constructor(
    marque,
    couleur,
    vitesseMax = 50,
    qteCarburant = 0,
    volReservoir = 0
  ) {
    super(marque, couleur);
    this.vitesseMax = vitesseMax;
    this.quantiteCarburant = qteCarburant;
    this.volumeReservoir = volReservoir;
  }

  accelerer() {
    console.log("La voiture accélère !!");
  }
  freiner() {
    console.log(`La voiture freine :)`);
  }
  info() {
    console.log(`Ma Voiture :`);
    console.log(`Marque : ${this.marque}`);
    console.log(`Couleur : ${this.couleur}`);
    console.log(`Vitesse max : ${this.vitesseMax}km/h`);
    console.log(`Volume du réservoir : ${this.volumeReservoir}L`);
    console.log(
      `Quantité de carburant : ${this.quantiteCarburant}/${this.volumeReservoir}L`
    );
  }
  rajouteCarburant(qte = 1) {
    if (qte + this.quantiteCarburant > this.volumeReservoir) {
      console.error(`Impossible de mettre ${qte}L dans le réservoir.`);
    } else {
      console.warn(`OK, on peux rajouter ${qte}L dans ce véhicule`);
      this.quantiteCarburant = this.quantiteCarburant + qte;
    }
    console.log(
      `Quantité de carburant actuelle : ${this.quantiteCarburant}/${this.volumeReservoir}L`
    );
    console.log(
      `Volume disponible : ${this.volumeReservoir - this.quantiteCarburant}L`
    );
  }
}
let infoMaVoiture = new InfoVoiture("Ford", "rouge", 100, 10, 60);
