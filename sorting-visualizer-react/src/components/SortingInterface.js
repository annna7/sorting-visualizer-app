import './SortingInterface.css'
import SortingVisualizer from './SortingVisualizer.js';
import Footer from './Footer.js';
import React, {useEffect, useState} from "react";

const SortingInterface = () => {
    const INF = 1000;
    const getSleepTime = () => {
        switch(algo) {
            case "bubble":
                return [INF, 150, 50, 15];
            case "select":
                return [INF, 300, 150, 30];
            case "merge":
                return [INF, 100, 30, 4];
            case "heap":
                return [INF, 130, 50, 10];
        }
    }
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
    }

    const changeAlgo = (newAlgo) => {
        setAlgo(newAlgo);
    }

    const resetColor = () => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i].status = 0;
        }
        setArr(newArr);
    }

    const startSorting = () => {
        resetColor();
        setIsSorting(true);
        switch(algo) {
            case "bubble": {
                bubbleSort();
                break;
            }
            case "select": {
                selectSort();
                break;
            }
            case "merge": {
                mergeSort();
                break;
            }
            case "heap": {
                heapSortHelper();
                break;
            }
        }
    }

    const bubbleSort = async () => {
        let newArr = [...arr]
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (newArr[j].value > newArr[j + 1].value) {
                    const temp = newArr[j];
                    newArr[j] = newArr[j + 1];
                    newArr[j + 1] = temp;

                    newArr[j].status = newArr[j + 1].status = 1;
                    setArr([...newArr]);
                    await sleep(getSleepTime()[sortingSpeed]);

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

    const selectSort = async () => {
        let newArr = [...arr];
        for (let i = 0; i < arr.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (newArr[j].value < newArr[minIndex].value) {
                    minIndex = j;
                }
            }
            const temp = newArr[i];
            newArr[i] = newArr[minIndex];
            newArr[minIndex] = temp;

            newArr[i].status = newArr[minIndex].status = 1;
            setArr([...newArr]);
            await sleep(getSleepTime()[sortingSpeed]);

            newArr[i].status = newArr[minIndex].status = 0;
        }

        setArr([...newArr].map((value) => {
            return {
                ...value,
                status: 2,
            }
        }));
        setIsSorting(false);
    }

    const mergeSort = async () => {
        let newArr = arr;
        await mergeSortHelper(newArr, 0, newArr.length - 1);
        setArr([...arr].map((value) => {
            return {
                ...value,
                status: 2,
            }
        }));
        setIsSorting(false);
    }
    
    const mergeSortHelper = async (newArr, start, end) => {
        if (start >= end) return;
        let mid = Math.floor((start + end) / 2);
        await mergeSortHelper(newArr, start, mid);
        await mergeSortHelper(newArr, mid + 1, end);
        await merge(newArr, start, mid, end);
    }
    
    const merge = async (newArr, start, mid, end) => {
        let tempArr = [];
        let i = start;
        let j = mid + 1;
        let k = 0;
        
        while (i <= mid && j <= end) {
            if (newArr[i].value < newArr[j].value) {
                tempArr[k] = newArr[i];
                i++;
            } else {
                tempArr[k] = newArr[j];
                j++;
            }
            k++;
            if (i <= mid && j <= end) {
                newArr[i].status = newArr[j].status = 1;
                setArr([...arr, tempArr]);
                await sleep(getSleepTime()[sortingSpeed]);
                newArr[i].status = newArr[j].status = 0;
            }
        }
        
        while (i <= mid) {
            tempArr[k] = newArr[i];
            setArr([...arr, tempArr]);
            await sleep(getSleepTime()[sortingSpeed]);
            i++;
            k++;
        }
        
        while (j <= end) {
            tempArr[k] = newArr[j];
            setArr([...newArr, tempArr]);
            await sleep(getSleepTime()[sortingSpeed]);
            j++;
            k++;
        }

        for (let i = start; i <= end; i++) {
            newArr[i] = tempArr[i - start];
            setArr([...arr, newArr]);

            await sleep(getSleepTime()[sortingSpeed]);
        }
    }

    const heapify = async(newArr, i, number) => {
        let largest = number;
        let left = 2 * number + 1;
        let right = 2 * number + 2;

        if (left < i && newArr[left].value > newArr[largest].value) {
            largest = left;
        }

        if (right < i && newArr[right].value > newArr[largest].value) {
            largest = right;
        }

        if (largest !== number) {
            let temp = newArr[number];
            newArr[number] = newArr[largest];
            newArr[largest] = temp;

            newArr[number].status = newArr[largest].status = 1;
            setArr([...newArr]);
            await sleep(getSleepTime()[sortingSpeed]);
            newArr[number].status = newArr[largest].status = 0;
            await heapify(newArr, i, largest);
        }
    }

    const heapSortHelper = async () => {
        await heapSort();
    }
    const heapSort = async () => {
        let newArr = [...arr];
        let n = newArr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await heapify(newArr, n, i);
            if (i > 0) {
                newArr[i].status = newArr[i - 1].status = 1;
                setArr([...newArr]);
                await sleep(getSleepTime()[sortingSpeed]);
                newArr[i].status = newArr[i - 1].status = 0;
            } else {
                setArr([...newArr])
                await sleep(getSleepTime()[sortingSpeed]);
            }
        }

        for (let i = n - 1; i >= 0; i--) {
            let temp = newArr[0];
            newArr[0] = newArr[i];
            newArr[i] = temp;

            newArr[0].status = newArr[i].status = 1;
            setArr([...newArr]);
            await sleep(getSleepTime()[sortingSpeed] * 2);
            newArr[0].status = newArr[i].status = 0;

            await heapify(newArr, i, 0);
        }

        setIsSorting(false);
        setArr([...newArr].map((value) => {
            return {
                ...value,
                status: 2,
            }
        }));
    }
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
                algo={algo}
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
