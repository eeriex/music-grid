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
    const anNastereScurt = this.cnp.slice(1, 3);
    const lunaNastere = this.cnp.slice(3, 5);
    const ziNastere = this.cnp.slice(5, 7);
    const anCurent = new Date().getUTCFullYear().toString();
    const anCurentScurt = anCurent.substring(2);
    const lunaCurenta = new Date().getUTCMonth() + 1;
    const ziCurenta = new Date().getUTCDate();

    if (anNastereScurt >= "00" && anNastereScurt <= anCurentScurt) {
      var anNastereLung = "20" + anNastereScurt;
      var anulNasterii = parseInt(anNastereLung);
    } else {
      var anNastereLung = "19" + anNastereScurt;
      var anulNasterii = parseInt(anNastereLung);
    }
    const fullName = `${this.nume} ${this.prenume}`;

    if (lunaNastere <= lunaCurenta && ziNastere <= ziCurenta) {
      var varsta = anCurent - anulNasterii;
    } else {
      var varsta = anCurent - anulNasterii - 1;
    }

    console.log(fullName + " are " + varsta + " de ani.");
  }

  afiseazaAnulAngajarii() {
    var d = new Date();
    var n = d.getFullYear();
    var anAngajare = n - this.vechime;
    var fullName = `${this.nume} ${this.prenume}`;
    console.log(fullName + " a inceput sa munceasca in anul " + anAngajare + ".");
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
    const fullName = `${this.nume} ${this.prenume}`;
    console.log(fullName + " testeaza software.");
  }
}

class Developer extends AngajatiIT {
  constructor(cnp, nume, prenume, vechime, departament) {
    super(cnp, nume, prenume, vechime, departament);
  }

  lucreaza() {
    const fullName = `${this.nume} ${this.prenume}`;
    console.log(fullName + " scrie cod.");
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
  document.getElementById("picture").setAttribute("src", data.results[0].picture.large);
  document.getElementById("name").innerHTML = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;
  document.getElementById("gender").innerHTML = data.results[0].gender;
  document.getElementById("email").innerHTML = data.results[0].email;
  document.getElementById("age").innerHTML = data.results[0].dob.age;
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

for (var x = 0; x < arr1.length; x++) {
  var y = arr1[x];
  var y = y + y * 15;
  console.log(y);
}

const arrNew = [...arr1];

const arr2 = arrNew.map((x) => x * 11);

console.log("arr1 equals " + arr1);
console.log("arr2 equals " + arr2);
