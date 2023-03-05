import React, {useState} from 'react';
import Bar from './Bar';
import './SortingVisualizer.css'
import uniqid from 'uniqid';


const SortingVisualizer = ({arr}) => {
    const toColor = (code) => {
        switch (code) {
            case 0: return "darkgreen";
            case 1: return "red";
            case 2: return "blue";
        }
    }
    const sortingBars = arr.map((value, index) => (
        <Bar key={index} height={value.value} color={toColor(value.status)}/>
    ));

    return (
        <>
            <div className="sorting-container">
                <div className="sorting-visualizer">
                    {sortingBars}
                </div>
            </div>
        </>
    )
}

export default SortingVisualizer;