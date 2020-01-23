function countDown(num) {
    if (num <= 0) {
        console.log('All done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// console.time('start');
// countDown(100);
// console.timeEnd('start');

function countDown2(num) {
    for (let i = 0; i > 0; i--) {
        console.log(i);
    }
    console.log('All done!');
}

// console.time('start2');
// countDown2(100);
// console.timeEnd('start2');

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

// console.time('sumRange');
// console.log(sumRange(5));
// console.timeEnd('sumRange');

function factorialNormal(num) {
    let total = 1;
    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}

// console.time('Factorial with normal');
// console.log(factorialNormal(10));
// console.timeEnd('Factorial with normal');

function factorialRecursion(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorialRecursion(num - 1);
}

// console.time('Factorial with recursion');
// console.log(factorialRecursion(10));
// console.timeEnd('Factorial with recursion');

// following function is refer as helper method recursion
function collectOddValues(arr = []) {

    let results = [];

    function helper(input) {
        if (input.length === 0) return;

        if (input[0] % 2 !== 0) {
            results.push(input[0])
        }

        helper(input.slice(1));
    }

    helper(arr);

    return results;
}

console.time('Collect odd values - helper method');
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.timeEnd('Collect odd values - helper method');

// Pure recursion
function collectOddValues2(arr) {
    let newArr = [];

    if(arr.length === 0) return newArr;

    if(arr[0] % 2 !== 0) newArr.push(arr[0]);

    newArr = newArr.concat(collectOddValues2(arr.slice(1)));
    return newArr;
}

console.time('Collect odd values - pure recursion');
console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.timeEnd('Collect odd values - pure recursion');