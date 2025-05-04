// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. 

function make_avg(numbers, size) {
    let sum = 0;
    for (const i of numbers) {
        sum += i;
    }
    return sum / size;
}

const numbers = [1, 2, 3, 4, 5];
const size = numbers.length;
const result = make_avg(numbers, size);
console.log(result);