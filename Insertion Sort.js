// put one item by one to the correct place

// my own solution - PRO
function insertionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let idx = i + 1;
        for (let j = idx; j > 0 && arr[idx] < arr[idx - 1]; j--) {
            [arr[j], arr[idx]] = [arr[idx], arr[j]];
            idx = j;
        }
    }

    return arr;
}

// don't get distract, speed is the same, try comment any one you will see the correct result;
console.time('a');
console.log(insertionSort([2, 5, 72, 3, 31, 3]));
console.timeEnd('a');

function instructorInsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > curVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = curVal;
    }
    return arr;
}

console.time('b');
console.log(instructorInsertionSort([2,5,72,3,31,3]));
console.timeEnd('b');