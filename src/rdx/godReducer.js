//action type
//crear un namespace a los todos
const RANDOM_GOD = 'GOD/RANDOM_GOD';
const SET_TIPO = 'GOD/SET_TIPO';
const SET_PLAYERS = 'GOD/SET_PLAYERS';
const SET_RESET = 'GOD/SET_RESET';

//FUNCIONES

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function cantidadActiva(gods,players){
  let cant = gods.length;
  if (players===2){
    cant=4;
  }else {
    if ((players-1) - cant<0) {
      cant = cant + (players - cant) - 1;
    }
  }
  return cant;
}

//Action creator
export function setRandomGods(gods,players) {
  let cant=cantidadActiva(gods,players);
  let active=[];
  let firstGod=gods[0];  
  gods=shuffle(gods); 
  if (cant<gods.length){
    gods=gods.filter((god)=>god!==firstGod);
    gods.push(firstGod);    
  }
  active = gods.filter((god,index)=>index<cant);
  
  return {
    type: RANDOM_GOD,
    gods: gods ,
    active: active  
  } 
}

export function setTipo(tipo) {
  let players=6;
  if (tipo === 'Normal'){
    players=2;
  }
  const gods=filtroGodXTipo(tipo);
  return {
    type: SET_TIPO,
    tipo: tipo,
    players: players,
    gods:gods
  }
}

export function setPlayers(players) {
  return {
    type: SET_PLAYERS,
    players: parseInt(players,10)
  }
}

export function setReset() {
  return {
    type: SET_RESET
  }
}
// Valor inicial
const initialState = {
  gods: filtroGodXTipo('Normal'),
  tipo:'Normal',
  players:2,
  active:[],
  turno:0,
};

function filtroGodXTipo(tipo){
  console.log(tipo);
  const gods = [{ number: 1, name: 'ares' },
  { number: 2, name: 'poseidon' },
  { number: 3, name: 'athena' },
  { number: 4, name: 'zeus' },
  { number: 5, name: 'kronos' }];
  
  if (tipo==='Normal' ){
    console.log(1);
    return gods.filter((god, index) => index < 4);
  }else {
    console.log(2);
    return gods ;
  }
}

//reducer
function godReducer(state = initialState, action) {
  switch (action.type) {
    case RANDOM_GOD:
      return {...state,
        gods: action.gods,
        active:action.active,
        turno:state.turno+1
      };    
    case SET_TIPO:
      return { ...state,
        tipo: action.tipo,players: action.players ,gods:action.gods,active:[],turno:0
      };  
    case SET_PLAYERS:
      return { ...state,
        players: action.players,active:[],turno:0
      };  
      case SET_RESET:
      return { ...state,active:[],turno:0
      };
    default:
      return state;
  }
}

//selecter
export function selectGod(state) {
  return state.godReducer;
}

export default godReducer;

//Como no he usado el todo reducer , mi state es solo la propiedad del todoreducer, si hubiera mas componentes haria 