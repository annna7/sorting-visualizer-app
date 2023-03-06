import React from 'react';
import Bar from './Bar';
import './SortingVisualizer.css'

const SortingVisualizer = ({arr}) => {
    const toColor = (code) => {
        switch (code) {
            case 0: return "#9797ff";
            case 1: return "#69417a";
            case 2: return "#091459";
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