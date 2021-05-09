"use strict";

// ==================================================================================================================
// Exercitiul 1:
//     Creați clasa AngajatIT cu următoarele:
//          Proprietăți: CNP, nume, prenume, vechime, departament
//          Metode: afiseazaVarsta, afișeazăAnulAngajarii, lucrează ( va afișa mesajul "Neimplementat")
//          Din clasa creată extindeți clasele QA și Developer, adăugați mesaje specifice pentru metoda lucrează a acestora ( ex. "testează software", "scrie cod")

console.log("Exercitiul 1");

class AngajatiIT {
  constructor(cnp, nume, prenume, vechime, departament) {
    this.cnp = cnp;
    this.nume = nume;
    this.prenume = prenume;
    this.vechime = vechime;
    this.departament = departament;
  }

  afiseazaVarsta() {
    var anScurt = parseInt(this.cnp.slice(1, 3));
    var anLung = parseInt("19" + anScurt);
    var d = new Date();
    var n = d.getFullYear();
    var varsta = n - anLung;
    console.log(this.prenume + " " + this.nume + " are " + varsta + " de ani.");
  }

  afiseazaAnulAngajarii() {
    var d = new Date();
    var n = d.getFullYear();
    var anAngajare = n - this.vechime;
    console.log(
      this.prenume +
        " " +
        this.nume +
        " a inceput sa munceasca in anul " +
        anAngajare +
        "."
    );
  }

  lucreaza() {
    console.log("Neimplementat");
  }
}

class QA extends AngajatiIT {
  constructor(cnp, nume, prenume, vechime, departament) {
    super(cnp, nume, prenume, vechime, departament);
  }

  lucreaza() {
    console.log(this.prenume + " " + this.nume + " testeaza software.");
  }
}

class Developer extends AngajatiIT {
  constructor(cnp, nume, prenume, vechime, departament) {
    super(cnp, nume, prenume, vechime, departament);
  }

  lucreaza() {
    console.log(Developer.prenume + " scrie cod.");
  }
}

const angajat1 = new AngajatiIT("2891219000000", "Toma", "Irina", "5", "QA");
angajat1.lucreaza();
angajat1.afiseazaAnulAngajarii();
angajat1.afiseazaVarsta();

const angajat2 = new QA("2891219000000", "Toma", "Irina", "5", "QA");
angajat2.lucreaza();

// ==================================================================================================================
// Exercitiul 2:
//      Folosind API-ul https://randomuser.me/api/, afisati la apasarea unui buton("Genereaza utilizator") următoarele detalii ale unui utilizator random:
//      picture, name, gender, e-mail și age

const URL = "https://randomuser.me/api/";

async function getRandomUser() {
  const result = await fetch(URL);
  const data = await result.json();
  console.log(data);
  document
    .getElementById("picture")
    .setAttribute("src", data.results[0].picture.large);
  document.getElementById(
    "name"
  ).innerHTML = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
  document.getElementById("gender").innerHTML = `${data.results[0].gender}`;
  document.getElementById("email").innerHTML = `${data.results[0].email}`;
  document.getElementById("age").innerHTML = `${data.results[0].dob.age}`;
}

document.getElementById("fetch").addEventListener("click", getRandomUser);

// ==================================================================================================================
// Exercitiul 3
//      Se dă un array cu numere de la 0 la 10
//          Parcurgeți array-ul și afișați fiecare număr adunat cu 15 * numărul respectiv ( pentru 2 se va afișa 32),
//          folosind atat VanillaJS cât și arrow functions și iteratori specifici ES6.
//          Folosind destructuring copiați array-ul și modificați elementele astfel: 2 va deveni 22, 6 va deveni 66.
//          Afișați ambele array-uri.

console.log("Exercitiul 3");

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myFunction = (value) => {
  console.log(value + value * 15);
};

arr1.map(myFunction);

const [a, b, c, d, e, f, g, h, i, j, k] = arr1;
const arr2 = [a, b, c, d, e, f, g, h, i, j, k];

for (var x = 0; x <= arr2.length - 1; x++) {
  var y = arr2[x];
  var y = y * 11;
  arr2[x] = y;
}

console.log("arr1 equals " + arr1);
console.log("arr2 equals " + arr2);
