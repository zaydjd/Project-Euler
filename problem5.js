//  Just make a loop that keeps running until the division is true

function smallestMultiple(num) {
    for (let i = 3; i <= 20; i++) {
        if (num % i != 0) {
            return -1;
        }
    }
    return 1;
}

let smallest = 20;
while(smallestMultiple(smallest) != 1) {
    smallestMultiple(smallest);
    smallest++;
}

console.log("Smallest multiple of 1-20 is: \n" + smallest);