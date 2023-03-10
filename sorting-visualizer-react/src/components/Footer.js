// boilerplate
import React from 'react';
import './Footer.css'

const Footer = ({algo, arrayLength, sortingSpeed, isSorting, handleGen, changeLength, changeSpeed, changeAlgo, startSorting}) => {
    const isBubble = () => algo === "bubble";
    const isSelect = () => algo === "select";
    const isMerge = () => algo === "merge";
    const isHeap = () => algo === "heap";
    return (
        <>
            <div className="footer">
                <div className="footer-flex">
                    <div className="footer-flex-item">
                        <div className="gen-array">
                            <button className="big-button" disabled={isSorting} onClick={handleGen}> Generate New Array </button>
                        </div>
                        <div className="set-length">
                            <p> Set Length </p>
                            <input readOnly={isSorting} disabled={isSorting} type="range" id="length-slider" className="slider" min="50" max="200" value={arrayLength} onChange={(e) => changeLength(e.target.value)}></input>
                        </div>
                        <div className="set-speed">
                            <p> Set Speed </p>
                            <input readOnly={isSorting} disabled={isSorting} type="range" id="speed-slider" className="slider" min="1" max="3" step="1" value={sortingSpeed} onChange={(e) => changeSpeed(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="footer-flex-item2">
                        <div className="select-algo">
                            <p> Select algorithm</p>
                            <button className={`${isBubble() ? 'highlight-algo' : ''}`} disabled={isSorting} onClick={() => changeAlgo("bubble")}>Bubble Sort</button>
                            <button className={`${isSelect() ? 'highlight-algo' : ''}`} disabled={isSorting} onClick={() => changeAlgo("select")}>Select Sort</button>
                            <button className={`${isMerge() ? 'highlight-algo' : ''}`} disabled={isSorting} onClick={() => changeAlgo("merge")}>Merge Sort</button>
                            <button className={`${isHeap() ? 'highlight-algo' : ''}`} disabled={isSorting} onClick={() => changeAlgo("heap")}>Heap Sort</button>
                        </div>
                        <button className="big-button" disabled={isSorting} onClick={startSorting}>Start!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;