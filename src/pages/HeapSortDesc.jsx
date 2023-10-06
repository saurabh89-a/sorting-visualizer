import React from "react";
import './desc.css';

const HeapSortDesc=()=>{
    return(
        <>
        <u>
            <h1>
                Heap Sort
            </h1>
            </u>
        <div className="container">
        
            <div className="right">
                <p>Heap sort is a comparison-based sorting algorithm that leverages the concept of a binary heap data structure.
                The algorithm follows these steps to sort an array of elements:</p>
                <ol>
                    <li>Build a max heap: Convert the given array into a max heap, where each parent node is greater than or equal to its child nodes. This step rearranges the elements to satisfy the heap property.</li>
                    <li>Extract the maximum element: Swap the root node (maximum element) with the last element in the heap and reduce the size of the heap by one. This action places the maximum element in its correct sorted position at the end of the array.</li>
                    <li>Heapify: After extracting the maximum element, heapify the remaining elements to restore the heap property. This involves comparing the new root with its children and recursively performing the necessary swaps until the heap property is satisfied.</li>
                    <li>Repeat steps 2 and 3: Repeat steps 2 and 3 until all elements have been extracted from the heap. At each iteration, the maximum element is placed in its appropriate position in the sorted array.</li>
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
export default HeapSortDesc;