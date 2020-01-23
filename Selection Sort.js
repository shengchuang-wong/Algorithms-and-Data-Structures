// Selection sort - find lowest and put to front, and find again and put

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let idx = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[idx]) idx = j;
        }
        if(i !== idx) {
            let temp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([2, 5, 72, 3, 31, 3]));
