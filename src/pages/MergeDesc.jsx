import React from "react";
import './desc.css';

const MergeSortDesc=()=>{
    return(
        <>
        <u>
            <h1>
               Merge Sort
            </h1>
            </u>
        <div className="container">
        
            <div className="right">
                <p>Merge sort is a popular comparison-based sorting algorithm that follows a divide-and-conquer approach.The algorithm works by dividing the input array into smaller sub-arrays until each sub-array contains only one element. It then merges these sub-arrays in a sorted order, repeatedly combining and sorting them until the entire array is sorted.
                The algorithm follows these steps to sort an array of elements:</p>
                <ol>
                    <li>Divide: The input array is divided into two equal-sized sub-arrays, and the process is recursively applied to each sub-array until each sub-array contains only one element.</li>
                    <li>Merge: The sorted sub-arrays are merged back together in a sorted order. This involves comparing the elements from the two sub-arrays and placing them in the correct order into a temporary array.</li>
                    <li>Repeat: Steps 1 and 2 are repeated until all sub-arrays are merged, resulting in a single sorted array.</li>
                </ol>
            </div>
            <div className="left">
                <h3>Time Complexicity</h3>
                <ul>
                    <li>Best-case time complexity: O(n log n)</li>
                    <li>Average-case time complexity: O(n log n)</li>
                    <li>Worst-case time complexity: O(n log n)</li>
                </ul>
            </div>
        </div>
        </>
    );
}
export default MergeSortDesc;