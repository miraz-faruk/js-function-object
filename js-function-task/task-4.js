// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. 

function count_zero(binaryString){
    let count = 0;
    for(let char = 0; char < binaryString.length; char++){
        if(binaryString[char] === '0'){
            count++;
        }
        else{
            continue;
        }
    }
    return count;
}

const binaryString = "101010101111111";
const result = count_zero(binaryString);
console.log(result);
  