function Fibonacci() {
    let num1 = 1;
    let num2 = 2;
    let tempSum = 0;
    let sumOfEvens = 0;

    while (num1 < 4000000) {
        if (num1 % 2 == 0) {
            sumOfEvens += num1;
        }

        tempSum = num1 + num2;
        num1 = num2;
        num2 = tempSum;
    }
    console.log(sumOfEvens);
}

Fibonacci();