import React from "react";
import './desc.css';

const BubbleDesc=()=>{
    return(
        <>
        <u>
            <h1>
                Bubble Sort
            </h1>
            </u>
        <div className="container">
        
            <div className="right">
                <p>Bubble sort is a simple comparison-based sorting algorithm. It repeatedly compares adjacent elements and swaps them if they are in the wrong order until the entire array is sorted. It is called "bubble sort" because smaller elements gradually "bubble" to the top of the array.
                The algorithm follows these steps to sort an array of elements:</p>
                <ol>
                    <li>Start at the beginning of the array and compare each pair of adjacent elements.</li>
                    <li>If the elements are in the wrong order (the smaller element comes after the larger one), swap them.</li>
                    <li>Move to the next pair of adjacent elements and repeat the comparison and swapping process.</li>
                    <li>Continue iterating through the array, repeatedly swapping adjacent elements until the largest element "bubbles" to the end of the array.</li>
                    <li>Repeat steps 1 to 4 for the remaining unsorted portion of the array, excluding the already sorted elements.</li>
                    <li>Keep repeating the above steps until the entire array is sorted.</li>

                </ol>
            </div>
            <div className="left">
                <h3>Time Complexicity</h3>
                <ul>
                    <li>Best-case time complexity: O(n)</li>
                    <li>Average-case time complexity: O(n^2)</li>
                    <li>Worst-case time complexity: O(n^2)</li>
                </ul>
            </div>
        
        </div>
        </>
    );
}
export default BubbleDesc;