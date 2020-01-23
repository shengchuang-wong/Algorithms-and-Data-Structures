# Algorithms and Data Structures

## Topic Covered
- [Complexity](#complexity)
- [Solving Pattern](#solving-pattern)
- [Searching Algorithms](#searching-algorithms)
- [Sorting Algorithms](#sorting-algorithms)

## Algorithm

### Complexity
- Time complexity
- Space complexity 
```
- O(1)
- O(log n)
- O(n)
- O(n log n)
- O(N ^ 2)
- O(2 ^ n)
- O(n!)
```

### Solving Pattern
- Frequency counter
- Two pointers
- Sliding window
- Divider and conquer
- Recursion
  - Base Case
  - Different Input
  ```js
  const countDown = num => {
    if(num < 0) {
      console.log("All done!");
      return
    }
    console.log(num)
    num--
    countDown(num)
  }
  ```
  ```js
  const sumRange = num => {
    if(num === 1) return 1
    return num + sumRange(num-1)
  }
  
  sumRange(3)
    return 3 + sumRange(2)
        return 2 + sumRange(1)
            return 1
  ```
  
### Searching Algorithms
  - Linear search: simply loop through the array and check one by one
    - Best case: O(1)
    - Average case: 0(n)
    - Worst case: 0(n)
    ```js
    function searchString(arr, val) {
      for (let i = 0; i < arr.length; i++) {
          if (val === arr[i]) return i;
      }
      return -1;
    }
    ```
  - Binary search: cut into half and check - only working for sorted arrays
    - Best case: O(1)
    - Average case: 0(log n)
    - Worst case: 0(log n)
    ```js
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
    ```
  - Naive search: if matched continue else break
    ```js
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
    ```
  - KMP string search algorithm

### Sorting Algorithms
- Bubble sort
  - Time complexity: O(n2)
  - Pseudocode:
    - Start looping from with a variable called `i` the end of array towards the beginning
    - Start inner loop with a variable called `j` from the beginning until `i - 1`
    - If `arr[j]` is greater than `arr[j+1]`, swap those two values!
    - Return the sorted array
  ```js
  // Bubble sort - compare two and swap, and swap and swap largest in behind
  
  function bubbleSort(arr) {
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
  ```
  
- Selection sort
  - Time complexity: O(n2)
  - Space complexity: O(1)
  - Pseudocode:
    - Store the first element as the smallest value you've seen so far
    - Compare this item to the next item in the array until you find a smaller number
    - If a smaller number is found, designate the smaller number to be the new "minimum" and continue until the end of the      array
    - If the "minimum" is not value(index) you initially began with, swap the two values
    - Repeat this with the next element until the array is sorted
  ```js
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
  ```

- Insertion sort
  - Time complexity: O(2), but faster then array is nearly sorted
  - Space complexity: O(1)
  - Pseudocode:
    - Start by picking the second element in the array
    - Now compare the second element with the one before it and swap if necessary
    - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
    - Repeat until the array is sorted
  ```js
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
  ```
  ```js
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
  ```

- Merge sort
  - Time complexity: O(n log n)
  - Space complexity: O(n)
  - Pseudocode(Merge Sort):
    - Break the array into halves until you have arrays that are empty or have one element
    - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
    - Once the array has been merged back together, return the merge (and sorted) array
  - Pseudocode(Merge Array):
    - Create  an empty array, take a look at the smallest values in each input array
    - While there are still values we haven't looked at...
      - If the value in the first array is smaller than the value in second array, push the value into our results and move on to the next value in the first array
      - If the value in the first array is larger than the value in second array, push the value in the second array into our results and move on to the next value in the second array
  ```js
    function mergeSort(arr) {
    if (arr.length === 1) {
      return arr;
    }
  
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    const results = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        results.push(left.shift());
      } else {
        results.push(right.shift());
      }
    }
  
    return [...results, ...left, ...right];
  }
  ```js

- Quick sort
  - Time Complexity: Average case O(n log n), Worst case O(n ^ 2)
  - Space Complexity: O(n log n)
  - Pseudocode(Pivot):
    - It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
    - Grab the pivot from the start of the array
    - Store the current pivot index in a variable(this will keep track of where the pivot will end up)
    - Loop through the array from the start until the end
      - If the pivot is greater than the current value, increment the pivot index variable and then swap the current element with the element at the pivot index
    - Swap the starting element(i.e. the pivot) with the pivot index
    - Return the pivot index
  - Pseudocode(Quicksort):
    - Call the pivot helpers on the array
    - When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
    - Your base case occurs when you consider a subarray with less than 2 elements
  ```js
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
  ```
  
- Radix sort (special sorting algorithm that works on lists of numbers)
  - Time complexity: O(nk) n = length of array, k =  number of digits(average)
  - Space complexity: O(n + k)
  - Pseudocode:
    - Define a function that accepts lists of numbers
    - Figure out how many digits the largest numbers has
    - Loop from `k = 0` up to this largest number of digits
    - For each iteration of the loop:
      - Create buckets for each digit (0 to 9)
      - Place each number in the corresponding bucket based on its kth digit
    - Replace our existing array with values in our buckets, starting with 0 and going up to 9
    - Return list at the end!

## Data Structures

### Linked Lists
- A data structures that contains a **head**, **tail** and **length** property
- Linked Lists consist of nodes, each **node** has a **value** and a **pointer** to another node or null
- Singly Linked Lists (Unidirectional)
- Doubly Linked Lists (Bidirectional)

### Stacks & Queues
- Stacks
  - Last in first out (LIFO)
  - Contain `push()` and `pop()`
  - Big O Notation
    - Insertion - O(1)
    - Removal - O(1)
    - Searching - O(n)
    - Access - O(n)
- Queue
  - First in first out (FIFO)
  - Work with `push() & shift()` or `unshift() & pop()`
  - Big O Notation
    - Insertion - O(1)
    - Removal - O(1)
    - Searching - O(n)
    - Access - O(n)

### Trees
  
