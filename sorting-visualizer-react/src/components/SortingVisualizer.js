import React, {useState} from 'react';
import Bar from './Bar';
import './SortingVisualizer.css'
import uniqid from 'uniqid';


const SortingVisualizer = ({arr}) => {
    const sortingBars = arr.map((value) => (
        <Bar key={uniqid()} height={value} />
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