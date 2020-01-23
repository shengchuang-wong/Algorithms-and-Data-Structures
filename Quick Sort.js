// select one and define its index and put lesser to front and bigger to back

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);

        // left
        quickSort(arr, left, pivotIndex - 1);
    
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
    }

    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
    return swapIdx;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));