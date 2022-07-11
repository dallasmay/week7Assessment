// SUM ZERO
const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(+(`-` + `${arr[i]}`))){
            return true;
        }       
    }
    return false;
}
// console.log(addToZero([-1, 2, 3, 1]))

// EXPLANATION: I believe my runtime would be O(n^2), as I use .includes inside my for loop. From my brief research, .includes goes through every element in the array, so it's essentially a loop inside a loop, making it O(n^2)

// UNIQUE CHARACTERS
const uniqueChar = (str) => {
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        for (let j = i + 1; j < str.length; j++) {
            if (currChar === str[j]) {
                return false;
            }
        }
    }
    return true;
}

// console.log(uniqueChar("Moonday"))

// EXPLANATION: I believe this would also be O(n^2), as it's a nested for loop. Same concept as my previous


