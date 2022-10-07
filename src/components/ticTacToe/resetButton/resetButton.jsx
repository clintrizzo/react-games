import React from 'react';
import '../resetButton/resetButton.css'

export const ResetButton = ({ resetBoard }) => {
    return (
        <button className="reset-btn" onClick={resetBoard}>Reset</button>
    )
}