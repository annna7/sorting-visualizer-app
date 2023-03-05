import './SortingInterface.css'
import SortingVisualizer from './SortingVisualizer.js';
import Footer from './Footer.js';
import React, {useEffect, useState} from "react";

const SortingInterface = () => {
    const sleep = (milliSeconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliSeconds))
    }
    const getRandomIntFromInterval = (a, b) => {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
    const generateArr = () => {
        let newArr = [];
        for (let i = 0; i < arrSize; i++) {
            newArr.push({
                value: getRandomIntFromInterval(minHeight, maxHeight),
                status: 0
            });
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
        changeStatus(2, 1);
    }

    const changeStatus = (index, newStatus) => {
        let newArr = [...arr];
        newArr[index].status = newStatus;
        setTimeout(() => setArr(newArr), index * 1000);
    }
    const changeAlgo = (newAlgo) => {
        setAlgo(newAlgo);
    }

    const startSorting = () => {
        setIsSorting(true);
        switch(algo) {
            case "bubble": {
                bubbleSort();
                break;
            }
        }
    }

    const bubbleSort = async () => {
        console.log("alo")
        let newArr = [...arr]
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (newArr[j].value > newArr[j + 1].value) {
                    const temp = newArr[j];
                    newArr[j] = newArr[j + 1];
                    newArr[j + 1] = temp;

                    newArr[j].status = newArr[j + 1].status = 1;
                    setArr([...newArr]);
                    await sleep(15);

                    newArr[j].status = newArr[j + 1].status = 0;
                }
            }
        }
        setArr([...newArr].map((value) => {
            return {
                ...value,
                status: 2,
            }
        }));
        setIsSorting(false);
    };

    const maxHeight = Math.floor(90);
    const minHeight = Math.floor(5);
    const [arrSize, setArrSize] = useState(100);
    const [arr, setArr] = useState(generateArr);
    const [sortingSpeed, setSortingSpeed] = useState(2);
    const [algo, setAlgo] = useState("bubble");
    const [isSorting, setIsSorting] = useState(false);

    return (
        <div className="sorting-interface">
            <SortingVisualizer arr={arr}/>
            <Footer
                arrayLength={arrSize}
                sortingSpeed={sortingSpeed}
                isSorting={isSorting}
                handleGen={handleGen}
                changeLength={changeLength}
                changeSpeed={changeSpeed}
                changeAlgo={changeAlgo}
                startSorting={startSorting}
            />
        </div>
    );
}

export default SortingInterface;
