# Algorithms-and-Data-Structures

## Solving Pattern
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
  
## Searching
  - Linear search: simply loop through the array and check one by one
    ```js
    function searchString(arr, val) {
      for (let i = 0; i < arr.length; i++) {
          if (val === arr[i]) return i;
      }
      return -1;
    }
    ```
  - Binary search: cut into half and check - only working for sorted arrays
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
