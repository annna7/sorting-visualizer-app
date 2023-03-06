// boilerplate
import React from 'react';
import './Footer.css'

const Footer = ({arrayLength, sortingSpeed, isSorting, handleGen, changeLength, changeSpeed, changeAlgo, startSorting}) => {
    return (
        <>
            <div className="footer">
                <div className="footer-flex">
                    <div className="gen-array">
                        <button disabled={isSorting} onClick={handleGen}> Generate New Array </button>
                    </div>
                    <div className="set-length">
                        <p> Set Length </p>
                        <input readOnly={isSorting} disabled={isSorting} type="range" id="length-slider" className="slider" min="50" max="200" value={arrayLength} onChange={(e) => changeLength(e.target.value)}></input>
                    </div>
                    <div className="set-speed">
                        <p> Set Speed </p>
                        <input readOnly={isSorting} disabled={isSorting} type="range" id="speed-slider" className="slider" min="1" max="3" step="1" value={sortingSpeed} onChange={(e) => changeSpeed(e.target.value)}></input>
                    </div>
                    <div className="select-algo">
                        <p> Select algorithm</p>
                        <select disabled={isSorting} onChange={(e) => changeAlgo(e.target.value)}>
                            <option value="bubble">Bubble Sort</option>
                            <option value="select">Select Sort</option>
                            <option value="merge">Merge Sort</option>
                            <option value="heap">Heap Sort</option>
                        </select>
                    </div>
                    <button disabled={isSorting} className="start-button" onClick={startSorting}>Start!</button>
                </div>
            </div>
        </>
    )
}

export default Footer;