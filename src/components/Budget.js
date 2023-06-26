import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch , currency} = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = event.target.value;
        setBudgetValue(newBudgetValue);
        dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
    };

    
    if (budgetValue > 20000) {
        alert("max value of budget is 20000!");
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}</span>
            <input type="number" value={budgetValue} step="10" onChange={handleBudgetChange} />
        </div>
    );
};
export default Budget;