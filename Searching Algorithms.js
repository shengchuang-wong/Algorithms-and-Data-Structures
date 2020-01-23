const { log } = console;

// linear search - just simply loop through the array and check one by one

function searchString(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (val === arr[i]) return i;
    }
    return -1;
}

// log(searchString(['a', 'b', 'c', 'd'], 'e'));

// binary search (cut half and check) - only working for sorted arrays

function binarySearchString(arr, val) {

    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((end + start) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((end + start) / 2);
    }

    return (arr[middle] === val) ? middle : -1;
}

// log(binarySearchString([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));

// naive string - if matched continue else break
function naiveSearch(long, short) {
    let count = 0;
    for(let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++) {
            if(short[j] !== long[i+j]) break;
            if(j === short.length - 1) count++;
        }
    }
    return count;
}

log(naiveSearch('king of the world is me and king of the world', 'o'));

// KMP string searching algorithm