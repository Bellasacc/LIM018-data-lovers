//import { styleDisabled } from 'htmlhint';
import {filterData, sortData, mapedData} from './data.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data);

//data.pokemon;

//sectio

const infoPokemonSection = document.getElementById('info-pokemon-section');
const selectType = document.querySelector('.type');
const selectGeneration = document.querySelector('.generations');
const selectEggs = document.querySelector('.eggs')
const inputSearch = document.querySelector('.input-search');
//const selectOrderCamp = document.querySelector('.orderCamp');
//const selectOrder = document.querySelector('.order');

const showElements = (data) => {
    data.forEach((element) => {
    const divCardPokemon=document.createElement('div');

    //class title-pokemon    
    divCardPokemon.classList.add('title-pokemon');
    infoPokemonSection.appendChild(divCardPokemon);

    //div-creado-para img
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('container');
    divCardPokemon.appendChild(createdDiv);

    //img-creado
    const createImg = document.createElement('img');
    createImg.src = element.img
    createdDiv.appendChild(createImg);

    //parrafo-creado-para numero de pokemon
    const createdParagraph1 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph1);
    createdParagraph1.classList.add("pokemon-num");

    //pokemon-numero
    const numPokemon = document.createTextNode(element.num);
    createdParagraph1.appendChild(numPokemon);

    //h2title
    const h2title = document.createElement('h2');
    divCardPokemon.appendChild(h2title);

    const divWP = document.createElement('div');
    divCardPokemon.appendChild(divWP);

    const divWP2 = document.createElement('div');
    divCardPokemon.appendChild(divWP2);

    const heigthP = document.createElement('p');
    divCardPokemon.appendChild(heigthP);

    const weigthP = document.createElement('p');
    divCardPokemon.appendChild(weigthP);

    const heigthTittle = document.createTextNode('Heigth')
    heigthP.appendChild(heigthTittle)

    const weigthTittle = document.createTextNode('Weigth')
    weigthP.appendChild(weigthTittle)

    divWP.appendChild(heigthP)
    divWP.appendChild(weigthP)
    divWP.classList.add('tittle-contain')

    //titulo pokemon
    const titlePokemon = document.createTextNode(element.name)
    h2title.appendChild(titlePokemon);

    //parrafo-creado-para heigth-pokemon
    const createdParagraph2 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph2);

    //pokemon-heigth
    const heigthPokemon=document.createTextNode(element.heigth);
    createdParagraph2.appendChild(heigthPokemon);
    
    //parrafo-creado-para weigth-pokemon
    const createdParagraph3 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph3);

    //pokemon-weigth
    const weigthPokemon = document.createTextNode(element.weight);
    createdParagraph3.appendChild(weigthPokemon);

    divWP2.appendChild(createdParagraph2)
    divWP2.appendChild(createdParagraph3)
    divWP2.classList.add('value-contain')
    })
};

const showSearchElements = (pokemon) => {
    const divCardPokemon=document.createElement('div');

    //class title-pokemon    
    divCardPokemon.classList.add('title-pokemon');
    infoPokemonSection.appendChild(divCardPokemon);

    //div-creado-para img
    const createdDiv = document.createElement('div');
    createdDiv.classList.add('container');
    divCardPokemon.appendChild(createdDiv);

    //img-creado
    const createImg = document.createElement('img');
    createImg.src = pokemon.img
    createdDiv.appendChild(createImg);

    //parrafo-creado-para numero de pokemon
    const createdParagraph1 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph1);
    createdParagraph1.classList.add("pokemon-num");

    //pokemon-numero
    const numPokemon = document.createTextNode(pokemon.num);
    createdParagraph1.appendChild(numPokemon);

    //h2title
    const h2title = document.createElement('h2');
    divCardPokemon.appendChild(h2title);

    const divWP = document.createElement('div');
    divCardPokemon.appendChild(divWP);

    const divWP2 = document.createElement('div');
    divCardPokemon.appendChild(divWP2);

    const heigthP = document.createElement('p');
    divCardPokemon.appendChild(heigthP);

    const weigthP = document.createElement('p');
    divCardPokemon.appendChild(weigthP);

    const heigthTittle = document.createTextNode('Heigth')
    heigthP.appendChild(heigthTittle)

    const weigthTittle = document.createTextNode('Weigth')
    weigthP.appendChild(weigthTittle)

    divWP.appendChild(heigthP)
    divWP.appendChild(weigthP)
    divWP.classList.add('tittle-contain')

    //titulo pokemon
    const titlePokemon = document.createTextNode(pokemon.name)
    h2title.appendChild(titlePokemon);

    //parrafo-creado-para heigth-pokemon
    const createdParagraph2 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph2);

    //pokemon-heigth
    const heigthPokemon=document.createTextNode(pokemon.heigth);
    createdParagraph2.appendChild(heigthPokemon);
    
    //parrafo-creado-para weigth-pokemon
    const createdParagraph3 = document.createElement('p');
    divCardPokemon.appendChild(createdParagraph3);

    //pokemon-weigth
    const weigthPokemon = document.createTextNode(pokemon.weight);
    createdParagraph3.appendChild(weigthPokemon);

    divWP2.appendChild(createdParagraph2)
    divWP2.appendChild(createdParagraph3)
    divWP2.classList.add('value-contain')
}

showElements(mapedData(data.pokemon));

const  filterAndShow = (e) => {
    let elements = mapedData(filterData(data, e.target.value ));
    while (infoPokemonSection.firstChild) {
        infoPokemonSection.removeChild(infoPokemonSection.firstChild);
    }
    return showElements(elements)
}

selectType.addEventListener('change',  function(e){ filterAndShow(e) })

selectGeneration.addEventListener('change', function(e){ filterAndShow(e) })

selectEggs.addEventListener('change',  function(e){ filterAndShow(e) })

inputSearch.addEventListener('input', function(e){
    let iText = e.target.value.toLowerCase();
      mapedData(data.pokemon).map((poke)=> {
        if(poke.name.indexOf(iText) !== -1) {
          while (infoPokemonSection.firstChild) {
            infoPokemonSection.removeChild(infoPokemonSection.firstChild);
          }
          showSearchElements(poke)
        }
      })
})


//ordenando de forma ascedente por nombre de pokemon, por el momento se muestra en consola
//console.log(sortData(data.pokemon,'name','desc'))

//console.log(filterData(data.pokemon, 'legendary'))
//console.log(computeStats(data.pokemon))
