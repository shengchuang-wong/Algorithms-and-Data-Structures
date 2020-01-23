// Compare two and swap, and swap and swap largest in behind, lol

// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if(arr[j] > arr[j+1]) {
//                 swap(arr, j, j+1);
//             }
//         }
//     }
//     return arr;
// }

// const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

// console.time();
// console.log(bubbleSort([2,5,72,3,31,3]));
// console.timeEnd();

function bubbleSortImprovedVersion(arr) {
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                swap2(arr, j, j+1);
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

const swap2 = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

console.time();
console.log(bubbleSortImprovedVersion([2,5,72,3,31,3]));
console.timeEnd();