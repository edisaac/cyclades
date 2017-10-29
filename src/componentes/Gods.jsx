import React from 'react';
import { connect } from 'react-redux';
import { setReset, setTipo,setPlayers,setRandomGods,selectGod } from '../rdx/godReducer';

import GodTableFunction from './GodTableFunction';

const Gods = (props) => (
  <div>    
    <label htmlFor="tipo">Tipo : </label>
    <select name="tipo" onChange={(event) => props.dispatch(setTipo(event.target.value )) }
    value={props.tipo}>
      <option  value={'Normal'}>Normal</option>
      <option  value={'Titans'}>Titans</option>
    </select> 
    <label htmlFor="jugadores">Jugadores : </label>
    <select name="jugadores" onChange={(event) => props.dispatch(setPlayers(event.target.value))} 
      value={props.players} >
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      {props.tipo!=='Normal' && <option value={'6'}>6</option>}
    </select> 
    <button onClick={() => props.dispatch(setReset() )}>Reset</button>
    
    <table>
       <tbody>
        <tr>
          <td valign="top">
          <h3>Turno: <br/>{props.turno}</h3>
    <button onClick={() => props.dispatch(setRandomGods(props.gods, props.players) )}>Siguiente</button>

          </td>
          <td ><GodTableFunction gods={props.active} size="80%" /></td>
        </tr>
      
      </tbody> 
    </table>    


  </div>
);

const mapStateToProps = state => (
  {
    gods: selectGod(state).gods,
    tipo: selectGod(state).tipo,
    players:selectGod(state).players ,
    active: selectGod(state).active ,
    turno: selectGod(state).turno ,
  }
);

export default connect(mapStateToProps)(Gods);



