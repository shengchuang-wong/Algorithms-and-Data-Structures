// 

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length:10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

function getDigit(number, fromBehind) {
    return parseInt((number + '').charAt((number + '').length - 1 - fromBehind)) || 0;
    // return Math.floor(Math.abs(number) / Math.pow(10, fromBehind)) %10;
}

function digitCount(number) {
    return (number + '').length;
    // return Math.floor(Math.log10(Math.abs(number))) + 1
}

function mostDigits(number) {
    return (Math.max(...number) + '').length;
}

console.time('test');
// console.log(getDigit(12345, 0));
// console.log(getDigit(12345, 2));
// console.log(digitCount(1000));
// console.log(mostDigits([1, 22, 333]));
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
console.timeEnd('test');
