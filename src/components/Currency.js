import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

    const changeCurrency = (e)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e,
        })
    }
    
  return (
      <div className='alert alert-secondary style-div'> 
        Currency {
          <select className='curr_select' name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
            <option value="$">$ Dollar</option>
            <option value="€">€ Euro</option>
            <option value="£">£ Pound</option>
          </select>	
        }	
      </div>
    );
};
export default Currency;