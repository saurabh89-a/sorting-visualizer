// function merge(a,b){
//     let newarr=[];
//     let i=0,j=0;
//     let m=a.length,n=b.length;
//     while(j<n && i<m){
//         if(a[i]<b[j]){
//             newarr.push(a[i]);
//             i++;
//         }else{
//             newarr.push(b[j]);
//             j++;
//         }
//     }
//     while(j<b.length){
//         newarr.push(b[j]);
//             j++;
//     }
//     while(i<a.length){
//         newarr.push(a[i]);
//         i++;
//     }
    
//     return newarr  
// }
// function mergeSort(array,animattions=[]){
//     if(array.length>1){
//         let mid=(array.length)/2;
//         mid= Math.round(mid);
//         let a=mergeSort(array.slice(0,mid));
//         let b=mergeSort(array.slice(mid,array.length));
//         let newretarr=merge(a,b);
//         return newretarr
//     }
//     return array
// }

function merge(array,l,mid,m,newarr,animations){
    
    let k=0,i=l,j=mid;
    let temparr=array.slice(l,m+1);
    while(j<=m && i<mid){
        animations.push([i,j]);
        animations.push([i,j]);
        if(array[i]<=array[j]){
            animations.push([k+l,array[i]]);
            temparr[k++]=array[i++]
        }else{
            animations.push([k+l,array[j]]);
            temparr[k++]=array[j++];
        }
    }
    while(i<mid){
        animations.push([i,i])
        animations.push([i,i]);
        animations.push([k+l,array[i]]);
        temparr[k++]=array[i++]
    }
    while(j<=m){
        animations.push([j,j])
        animations.push([j,j]);
        animations.push([k+l,array[j]]);
        temparr[k++]=array[j++]
    }
    for(let i=l;i<=m;i++){
     array[i]=temparr[i-l];
    }
}
function mergeSort(array,l,m,newarr,animations){
    if(m-l>0){
        let mid=(l+m)/2;
        mid= Math.round(mid);
        mergeSort(array,l,mid-1,newarr,animations);
        mergeSort(array,mid,m,newarr,animations);
        merge(array,l,mid,m,newarr,animations);
        // console.log(array);
    }
}

function mergeSorting(array){
const animations=[];
if(array.length<=1) return animations;
const newarr=array.slice(0);
mergeSort(array,0,newarr.length-1,newarr,animations)

return animations;
}






// function pos(l,m,newarr,animations){
//     let i=l,j=l;
//     while(j<m){
       
//         if(newarr[j]<newarr[m]){
//             animations.push([i,j]);
//             animations.push([i,j]);
//             animations.push([i,newarr[j]]);
//             // animations.push([j,newarr[i]]);
            
//             let temp=newarr[i];
//             newarr[i]=newarr[j];
//             newarr[j]=temp;
//             i++;
//             j++;
//         }else{
//             animations.push([j,j]);
//             animations.push([j,j]);
//             animations.push([j,newarr[j]]);
//             j++;
//         }   
//     }

//     animations.push([i,m]);
//     animations.push([i,m]);
//     animations.push([i,newarr[m]]);
//     // animations.push([m,newarr[i]]);
    

//    const temp=newarr[i];
//     newarr[i]=newarr[m];
//     newarr[m]=temp;
//     return i;
// }
// function quickSort(l,m,newarr,animations){
//     if(m-l>0){
//         const j=pos(l,m,newarr,animations);
//         quickSort(l,j-1,newarr,animations);
//         quickSort(j+1,m,newarr,animations);
//     }
//     return
// }

// function quickSorting(array){
//     const animations=[];
//     if(array.length<=1) return array;
//     const newarr=array.slice(0);
//     quickSort(0,newarr.length-1,newarr,animations)
//     // console.log(array)
// console.log(newarr)
//     return animations; 
// }

function pos(l, m, newarr, animations) {
    let i = l;
    let j = l;
    
    while (j < m) {
      if (newarr[j] < newarr[m]) {
        animations.push([i, j]);
        animations.push([i, j]);
        animations.push([i, newarr[j]]);
        animations.push([j,i]);
        animations.push([j,i]);
        animations.push([j, newarr[i]]);
        
        let temp = newarr[i];
        newarr[i] = newarr[j];
        newarr[j] = temp;
        
        i++;
      }else{
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([j, newarr[j]]);
      }
      
      j++;
    }
    
    animations.push([i, m]);
    animations.push([i, m]);
    animations.push([i, newarr[m]]);
    animations.push([m,i]);
    animations.push([m,i]);
    animations.push([m, newarr[i]]);
    
    
    let temp = newarr[i];
    newarr[i] = newarr[m];
    newarr[m] = temp;
    
    return i;
  }
  
  function quickSort(l, m, newarr, animations) {
    if (m - l > 0) {
      const j = pos(l, m, newarr, animations);
      quickSort(l, j - 1, newarr, animations);
      quickSort(j + 1, m, newarr, animations);
    }
  }
  
  function quickSorting(array) {
    const animations = [];
    
    if (array.length <= 1) return array;
    
    const newarr = array.slice();
    quickSort(0, newarr.length - 1, newarr, animations);
    
    console.log(newarr);
    
    return animations; 
  }

function bubbleSort(array,len,animations){
    for(let i=0;i<len;i++){
        for(let j=0;j<len-1-i;j++){
            if(array[j+1]<array[j]){
                animations.push([j+1, j]);
                animations.push([j+1, j]);
                animations.push([j, array[j+1]]);
                animations.push([j,j+1]);
                animations.push([j,j+1]);
                animations.push([j+1, array[j]]);
                let temp=array[j+1];
                array[j+1]=array[j];
                array[j]=temp;
            }
        }
    }
}

// bubbleSort(array,array.length);


function bubbleSorting(array){
    const animations = [];
    if (array.length <= 1) return array;
    const newarr = array.slice();
    bubbleSort(newarr,newarr.length,animations);
    return animations; 
}

function insertionSort(array,len,animations){
    for(let i=1;i<len;i++){
        let j=i-1,temp=array[i];
        while(j>=0 && array[j]>temp){
            animations.push([j, j+1]);
            animations.push([j,j+1]);
            animations.push([j+1, array[j]]);
            animations.push([j, j]);
            animations.push([j, j]);
            animations.push([j, array[j]]);
            array[j+1]=array[j];
            j--;
        }
        animations.push([j+1, j+1]);
        animations.push([j+1, j+1]);
        animations.push([j+1, temp]);
        array[j+1]=temp;
    }
}

function insertionSorting(array){
    const animations = [];
    if (array.length <= 1) return array;
    const newarr = array.slice();
    insertionSort(newarr,newarr.length,animations);
    return animations; 
}

function heapify(array,pos,num,animations){
    let first=2*pos+1,second=2*pos+2;
    let currpos=pos
    if(first<num && array[first]>array[currpos]){
        currpos=first;
    }
    if(second<num && array[second]>array[currpos]){
        currpos=second;
    }
    if(currpos!==pos){
        animations.push([currpos, pos]);
        animations.push([currpos, pos]);
        animations.push([currpos, array[pos]]);
        animations.push([pos,currpos]);
        animations.push([pos,currpos]);
        animations.push([pos, array[currpos]]);
        let temp=array[pos];
        array[pos]=array[currpos];
        array[currpos]=temp;
        heapify(array,currpos,num,animations);
    }
}

function makeheap(array,n,animations){
    let initno=n/2;
    initno=Math.round(initno);
    for(let i=initno;i>=0;i--){
        heapify(array,i,n,animations);
    }
}

function heapsort(array,len,animations){
    for(let i=len-1;i>=0;i--){
        animations.push([i, 0]);
        animations.push([i, 0]);
        animations.push([i, array[0]]);
        animations.push([0,i]);
        animations.push([0,i]);
        animations.push([0, array[i]]);
        let temp=array[0];
        array[0]=array[i];
        array[i]=temp;
        heapify(array,0,i,animations);
    }
}


function heapSorting(array){
    const animations = [];
    if (array.length <= 1) return array;
    const newarr = array.slice();
    makeheap(newarr,newarr.length,animations);
    heapsort(newarr,newarr.length,animations);
    return animations;
}

export {mergeSorting,quickSorting,bubbleSorting,insertionSorting,heapSorting};