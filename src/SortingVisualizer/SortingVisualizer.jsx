import React, { useEffect, useState } from 'react';
import './SortingVisualizer.css';
import * as sortingalgo from "../sortingAlgorithms/sortingAlgorithms.js";
import { Link, Outlet } from 'react-router-dom';


function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

const SortingVisualizer=()=>{
    const [carray,setcarray]=useState([]);
    const [rangvalue,setRangeValue]=useState(50);
    const [NUMBERBARS,setNumberBars]=useState(100);
    const [arraylength,setArraylength]=useState(NUMBERBARS);

    const [mystyle,setmyStyle]=useState({
      color:"black",
      backgroundColor:"white"
    })
    const [btStyle,setbtStyle]=useState({
      color:"black",
      backgroundColor: "purple"
    })
    const [newStyle,setnewStyle]=useState({
      color:"black",
      // backgroundColor: "violet"
    })
    // const [btStyle,setbtStyle]=useState({
    //   color:"black",
    //   backgroundColor: "violet"
    // })

    const [isDarkMode, setIsDarkMode] = useState(false);
    
    
    const handleToggleDarkMode = () => {
        if(isDarkMode===true){
            setmyStyle({
              color:"black",
             backgroundColor:"white"
            });
            setbtStyle({
              color:"black",
              backgroundColor: "purple"
            })
            setnewStyle({
              color:"black"
            })
        }else{
          setmyStyle({
            color:"white",
            backgroundColor:"black"
          })
          setbtStyle({
            color:"white",
            backgroundColor: "green",
            border:"1px solid white"
          })
          setnewStyle({
            color:"white"
          })
        }
        setIsDarkMode(!isDarkMode);
    };

    let ANIMATION_SPEED_MS=101-rangvalue;

    useEffect(resetArray,[NUMBERBARS]);
    function resetArray(){
      // setArraylength(NUMBERBARS)
        const array=[];
        for(let i=0;i<NUMBERBARS;i++){
            array.push(randomIntFromInterval(5,500));
        }
        
        setcarray(array);
        clearTimeout(mergeSort)
        const arrayBars = document.getElementsByClassName('array-bar');
        for(let i=0;i<carray.length;i++){
          const bars=arrayBars[i].style;
          setTimeout(()=>{
            bars.backgroundColor='pink';
        },1)
        }
    }

    const mergeSort=()=>{
        // const newsortedarray=carray.slice(0).sort((a,b)=>{return a-b});
        const animations=sortingalgo.mergeSorting(carray);
        // const newAnimations=[];
        
        // for(const animation of animations){
        //     newAnimations.push(animation.comparison);
        //     newAnimations.push(animation.comparison);
        //     newAnimations.push(animation.swap);
        // }

        // console.log(arrayAreEqual(newsortedarray,sortedarray));
        for(let i=0;i<animations.length;i++){
            const arrayBars=document.getElementsByClassName('array-bar');
            const isColorChange = i%3!==2;
            if(isColorChange){
                const [barOneIdx,barTwoIdx]=animations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                const barTwoStyle=arrayBars[barTwoIdx].style;
                const color=i%3===0?'red':'turquoise';
                setTimeout(()=>{
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                },i*ANIMATION_SPEED_MS)
            }else{ setTimeout(()=>{
                    const [barOneIdx,newHeight]=animations[i];
                    const barOneStyle=arrayBars[barOneIdx].style;
                    barOneStyle.height=`${newHeight}px`;
                },i*ANIMATION_SPEED_MS);
            }
        }
    }
    // function quickSort(){
    //     console.log(carray[carray.length-1]);
    //     const animations=sortingalgo.quickSorting(carray);
        
    //     // for(const animation of animations){
    //     //     console.log(animation);
    //     // }
        
    //     // console.log(arrayAreEqual(newsortedarray,sortedarray));
    //     for(let i=0;i<animations.length;i++){
    //         const arrayBars=document.getElementsByClassName('array-bar');
    //         const isColorChange = i%3!==0;
    //         if(isColorChange){
    //             const [barOneIdx,barTwoIdx]=animations[i];
    //             const barOneStyle=arrayBars[barOneIdx].style;
    //             const barTwoStyle=arrayBars[barTwoIdx].style;
    //             const color=i%3===0?'red':'turquoise';
    //             setTimeout(()=>{
    //                 barOneStyle.backgroundColor=color;
    //                 barTwoStyle.backgroundColor=color;
    //             },i*ANIMATION_SPEED_MS)
    //         }else{ setTimeout(()=>{
    //                 const [barOneIdx,newHeight]=animations[i];
    //                 const barOneStyle=arrayBars[barOneIdx].style;
    //                 barOneStyle.height=`${newHeight}px`;
    //             },i*ANIMATION_SPEED_MS);
    //         }
    //     }
    // }


    function quickSort() {
        console.log(carray[carray.length - 1]);
        const animations = sortingalgo.quickSorting(carray);
      
       
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2; // Changed from i%3 !== 0 to i%3 !== 2
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'turquoise';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS );
          }
        }
      }




    function bubbleSort(){
        const animations = sortingalgo.bubbleSorting(carray);
       
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2; // Changed from i%3 !== 0 to i%3 !== 2
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'turquoise';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS );
          }
        }
    }

    function insertionSort(){
        const animations = sortingalgo.insertionSorting(carray);
       
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2; // Changed from i%3 !== 0 to i%3 !== 2
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'turquoise';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS );
          }
        }
    }
    function heapSort(){
        const animations = sortingalgo.heapSorting(carray);
       
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2; // Changed from i%3 !== 0 to i%3 !== 2
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'turquoise';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS );
          }
        }
    }
    const changeRange=(e)=>{
        setRangeValue(e.target.value);
        console.log(ANIMATION_SPEED_MS);

    }
    const changeRange2=(e)=>{
      setNumberBars(e.target.value);
      // console.log(ANIMATION_SPEED_MS);
  }
    
    return (
        <>
        <div className='helpcontainer'>
        <div className='containor'>
        <div className='heading' style={btStyle}>
        <h1 >Sorting Visualizer</h1>
        </div>
        <div className="array-container" style={mystyle}>
        <div className="arrayhavingbar" style={mystyle}>
           {carray.map((value,idx)=>{
                return <div className='array-bar' key={idx} style={{height:`${value}px`,width:`${900/NUMBERBARS}px`}}></div>
            })}
        </div>
            {/* <br/> */}
            <div className='buttons' style={mystyle}>
            <input type="range" min="1" max="100" value={rangvalue} onChange={changeRange}/>
            <br/>
            <span style={newStyle}>Speed of Algorithms</span>
            <input type="range" min="50" max="150" value={NUMBERBARS} onChange={changeRange2}/>
            <br/>
            <span style={newStyle}>Size of Array</span>
            <button style={btStyle} type="button" onClick={handleToggleDarkMode}>
               {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
            <Link to="/"><button style={btStyle} onClick={resetArray}>generate Button</button></Link>
            <Link to="Merge"><button style={btStyle} onClick={mergeSort}>merge sort</button></Link>
            <Link to="Quick"><button style={btStyle} onClick={quickSort}>quick sort</button></Link>
            <Link to="Bubble"><button style={btStyle} onClick={bubbleSort}>Bubble sort</button></Link>
            <Link to="Insertion"><button style={btStyle} onClick={insertionSort}>Insertion sort</button></Link>
            <Link to="Heap"><button style={btStyle} onClick={heapSort}>Heap sort</button></Link> 
            </div>
        </div>
        </div>
        <div className="gavespace"><Outlet/></div> 
        </div>
        </>
    );
}
function arrayAreEqual(a,b){
    let flag=0;
    for(let index in a){
        if(a[index]!==b[index]){
            flag=1
            break;
        }
    }
    if(flag===1)return false;
    return true;
}
export default SortingVisualizer;