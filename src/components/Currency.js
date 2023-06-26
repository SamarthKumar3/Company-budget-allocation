import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = props => {
    
    const { currency, dispatch } = useContext(AppContext);

    const [selectedValue, setSelectedValue] = useState(currency);

    const handleSelectChange = (e) => {
        const newSelectedValue = e.target.value;
        setSelectedValue(newSelectedValue);
        dispatch({ type: 'CHG_CURRENCY', payload: newSelectedValue });
    };
    return (
        <div>
            <select className="alert alert-success" value={selectedValue} onChange={handleSelectChange}>
                <option defaultValue value="£" name="pound">Currency (£ Pound)</option>
                <option value="$" name="dollar"> Currency ($ Dollar)</option>
                <option value="₹" name="ruppee" >Currency (₹ Ruppee)</option>
                <option value="€" name="euro">Currency (€ Euro)</option>
            </select>
        </div>
    );
};

export default Currency;