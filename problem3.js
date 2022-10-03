function primeFactor(number) {
    // A number is prime if it is not composite
    // Composite numbers are numbers where n = a*s
    let val = 2;
    let prime = 0;

    while (val <= number) {
        if (number % val == 0) {
            if (val > prime) {
                prime = val;
            }
            number /= val;
        } else {
            val++;
        }
        
    }
    console.log(prime);
}

primeFactor(600851475143);