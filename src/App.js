// import React from 'react';
// import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
// const App=()=>{
//   return (
//    <>
//     <SortingVisualizer/>
//    </>
//   );
// }

// export default App;

import React from 'react';
import { Routes,Route } from 'react-router-dom';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Normal from './pages/Normal';
import HeapSortDesc from './pages/HeapSortDesc';
import QuickSortDesc from './pages/QuickSortDesc';
import BubbleDesc from './pages/BubbleDesc';
import MergeSortDesc from './pages/MergeDesc';
import InsertionDesc from './pages/InsertionDesc';
const App=()=>{
  return (
   <>
    <Routes>
      <Route path="/" element={<SortingVisualizer/>}>
           <Route path="Heap" element={<HeapSortDesc/>}/>
           <Route path="Quick" element={<QuickSortDesc/>}/>
           <Route path="Bubble" element={<BubbleDesc/>}/>
           <Route path="Merge" element={<MergeSortDesc/>}/>
           <Route path="Insertion" element={<InsertionDesc/>}/>
           <Route path="*" element={<Normal/>}/>
      </Route>
    </Routes>
   </>
  );
}

export default App;
