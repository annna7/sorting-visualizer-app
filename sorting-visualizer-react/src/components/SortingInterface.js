import './SortingInterface.css'
import SortingVisualizer from './SortingVisualizer.js';
import Footer from './Footer.js';
import React, {useState} from "react";

const SortingInterface = () => {
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

    const handleGen = () => {
        setArr(generateArr);
    }

    const changeLength = (newLength) => {
        setArrSize(newLength);
        handleGen();
    }

    const changeSpeed = (newSpeed) => {
        setSortingSpeed(newSpeed);
    }

    const changeAlgo = (newAlgo) => {
        setAlgo(newAlgo);
    }
    const maxHeight = Math.floor(90);
    const minHeight = Math.floor(5);
    const [arrSize, setArrSize] = useState(100);
    const [arr, setArr] = useState(generateArr);
    const [sortingSpeed, setSortingSpeed] = useState(2);
    const [algo, setAlgo] = useState("bubble");

    console.log(algo);

    return (
        <div className="sorting-interface">
            <SortingVisualizer arr={arr}/>
            <Footer arrayLength={arrSize} sortingSpeed={sortingSpeed} handleGen={handleGen} changeLength={changeLength} changeSpeed={changeSpeed} changeAlgo={changeAlgo}/>
        </div>
    );
}

export default SortingInterface;
