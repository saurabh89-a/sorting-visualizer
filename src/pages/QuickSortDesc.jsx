import React from "react";
import './desc.css';

const QuickSortDesc=()=>{
    return(
        <>
        <u>
            <h1>
                Quick Sort
            </h1>
            </u>
        <div className="container">
        
            <div className="right">
                <p>Quick sort is a widely used comparison-based sorting algorithm that follows a divide-and-conquer approach. The algorithm works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The pivot is then placed in its final sorted position, with all elements less than the pivot on its left and all elements greater than the pivot on its right. This process is repeated recursively on the two sub-arrays until the entire array is sorted.
                Here are the key steps of the Quick sort algorithm:</p>
                <ol>
                    <li>Choose a pivot: Select an element from the array to serve as the pivot. The choice of the pivot can affect the efficiency of the algorithm.</li>
                    <li>Partition the array: Reorder the array so that all elements less than the pivot are placed to its left, and all elements greater than the pivot are placed to its right. The pivot is now in its final sorted position.</li>
                    <li>Recursively apply steps 1 and 2: Apply the above steps recursively to the sub-arrays created on the left and right sides of the pivot until the entire array is sorted.</li>
                    <li>Combine the sub-arrays: As the recursion unfolds and the sub-arrays become sorted, the final sorted array is obtained by combining the sorted sub-arrays.</li>
                </ol>
            </div>
            <div className="left">
                <h3>Time Complexicity</h3>
                <ul>
                    <li>Best-case time complexity: O(n log n)</li>
                    <li>Average-case time complexity: O(n log n)</li>
                    <li>Worst-case time complexity: O(n^2)</li>
                </ul>
            </div>
        
        </div>
        </>
    );
}
export default QuickSortDesc;