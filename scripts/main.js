let LISTA = [];
let POKEMON = [];
$(function () {
  console.log("oldal betöltődés után ", LISTA);
  let vegpont = "http://localhost:3000/ADATLISTA";
  adatBeolvas(vegpont, LISTA, megjelenit);
  console.log("adatbeolvas() metódus után ", LISTA);
  vegpont = "https://pokeapi.co/api/v2/pokemon/pikachu";
  adatBeolvas(vegpont, LISTA, pokemonMegjelenit);
  adatTorles(vegpont, 2);
});

function adatTorles(vegpont, id) {
  vegpont = vegpont + "/" + id;
  console.log(vegpont);
  fetch(vegpont, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
}

function adatBeolvas(vegpont, lista, callbackFv) {
  fetch(vegpont, {
    method: "GET",
  }) //igéret/promisse
    .then((response) => response.json())
    .then((data) => {
      lista = data;
      callbackFv(lista);
    })
    .catch((error) => console.log(error));
}

function megjelenit(lista) {
  console.log("megjelenít ", lista);
}

function pokemonMegjelenit(adat) {
  console.log(adat);
  console.log(adat.sprites.front_default);
  let eleresiUt = adat.sprites.front_default;
  let pokemonNev = adat.name;
  const pokeObj = {
    eleresiUt: eleresiUt,
    pokemonNev: pokemonNev,
  };

  let tartalom = pokemonNev + "<br>" + `<img src="${eleresiUt}" alt="pikachu">`;
  $(".pokemon").eq(0).html(tartalom);
}
