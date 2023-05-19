

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './style.css'



const AllocationForm = (props) => {
    const { dispatch, remaining, Currency, expenses } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');


    const submitEvent = (e) => {
        if(cost > remaining) {
            alert("The value cannot exceed remaining funds  £ " + remaining);
            setCost("");
            return;
        }
        
        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
            expenses.map((e) => {
                if(e.name === expense.name && e.cost === 0) {
                    alert(`The expenses  of the ${e.name} department is 0 (ziro)`)
                }else if(e.name === expense.name && e.cost < cost){
                    alert(`The total of expenses of ${e.name} is less than the cost entered`)
                }
            })
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    
    return (
        <div className='allocation-form'>
            <div className='row allocation-form2'>
                <div className="allocation-form3">
                    <div className="departament-div">
                        <div>
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                        </div>
                        <select 
                            className="custom-select" 
                            id="inputGroupSelect01" 
                            onChange={(event) => setName(event.target.value)}
                        >
                            <option defaultValue> Choose... </option>
                            <option value="Marketing" name="marketing"> Marketing</option>
                            <option value="Sales" name="sales">Sales</option>
                            <option value="Finance" name="finance">Finance</option>
                            <option value="Human Resource" name="Human Resource">HR</option>
                            <option value="IT" name="it">IT</option>
                            <option value="Admin" name="admin">Admin</option>
                        </select>
                    </div>

                    <div className="action-div">
                        <div className="input-group-prepend" >
                            <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                        </div>
                        <select 
                            className="custom-select" 
                            id="inputGroupSelect02" 
                            onChange={(event) => setAction(event.target.value)}
                        >
                            <option defaultValue value="Add" name="Add">Add</option>
                            <option value="Reduce" name="Reduce">Reduce</option>
                        </select>
                    </div>

                    <div className="submit-div">
                        <div>
                            <label className="input-group-text input-group-text_1" htmlFor="inputGroupSelect01">{Currency}</label>
                        </div>
                        <input
                            required='required'
                            type='number'
                            id='cost'
                            value={cost}
                            onChange={(event) => setCost(event.target.value)}
                            className='add-cost-budget'>
                        </input>
                        <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2px' }}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;