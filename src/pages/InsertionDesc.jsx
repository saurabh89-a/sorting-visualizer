import React from "react";
import './desc.css';

const InsertionDesc=()=>{
    return(
        <>
        <u>
            <h1>
                Insertion Sort
            </h1>
            </u>
        <div className="container">
        
            <div className="right">
                <p>Insertion sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time. It works by repeatedly inserting the current element into its correct position within the sorted portion of the array.
                The algorithm follows these steps to sort an array of elements:</p>
                <ol>
                    <li>Start with the second element: The first element is considered already sorted. Therefore, the algorithm begins by selecting the second element from the array.</li>
                    <li>Compare and insert: The selected element is compared with the elements that come before it in the sorted portion of the array. If a preceding element is greater than the selected element, the preceding element is shifted one position to the right, creating space to insert the selected element. This process continues until the correct position is found and the selected element is inserted.</li>
                    <li>Repeat for remaining elements: Steps 2 are repeated for all remaining elements, progressively building the sorted portion of the array.</li>
                    <li>Complete the sorting: Once all elements have been processed, the array is fully sorted.</li>
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
export default InsertionDesc;