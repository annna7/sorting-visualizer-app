import React, {useState} from 'react';
import Bar from './Bar';
import './SortingVisualizer.css'
import uniqid from 'uniqid';


const SortingVisualizer = () => {
    const getRandomIntFromInterval = (a, b) => {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
    const generateArr = () => {
        let newArr = [];
        for (let i = 0; i < arrSize; i++) {
            newArr.push(getRandomIntFromInterval(minHeight, maxHeight));
        }
        return newArr;
    }
    const [arrSize, setArrSize] = useState(100);
    const maxHeight = Math.floor(90);
    const minHeight = Math.floor(5);
    const [arr, setArr] = useState(generateArr);

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