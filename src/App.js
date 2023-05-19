import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Add code to import the other components here under
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal'
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';
import { AppProvider } from './context/AppContext';



const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h2 className='mb-3 header-text'>Budgeting Allocation Application</h2>
                <div className='mt-3 header-side'>
                    {/* Add Budget component here under col-sm */}         
                    <div className='header-side_1'>
                        <Budget />
                    </div>

                    <div className="header-displey">
                    {/* Add Remaining component here under */}        
                        <div className='header-side_2'>
                            <Remaining />
                        </div>
                    {/* Add ExpenseTotal component here under */}        
                        <div className='header-side_3'>
                            <ExpenseTotal />
                        </div>
                    {/* Add Currency component here under */} 
                        <div className='header-side_4'>
                            <Currency />
                        </div>
                    </div>
                </div>

                <h3 className='mt-3'>Allocation</h3>

                {/* Add ExpenseList component here under */}         
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>

                <h3 className='mt-3'>Change allocation</h3>  

                {/* Add AllocationForm component here under */}    
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
