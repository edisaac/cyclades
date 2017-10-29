import React from 'react';
import GodRow from './GodRow';

const GodTableFunction = (props) => {
  return <table><tbody>
  {
    props.gods.map((god,index) => {
      return <tr key={index} >      
      <td>
      <GodRow name={god.name} size={props.size}/>
      </td></tr>
    })
  }</tbody></table>

}
export default GodTableFunction;
