function checkPalindrome(palindrome) {
    let array = palindrome.toString().split("");
    let array2 = [];

    for (let i = array.length - 1; i >= 0; i--) {
        array2.push(array[i]);
    }

    if (array.toString() == array2.toString()) {
        return true;
    }
}

function palindromeProduct() {
    let largest = 0;
    for (let i = 100; i < 1000; i++) {
        for (let j = 999; j > 100; j--) {
            let product = i * j;
            if (checkPalindrome(product)) {
                
                if (product > largest) {
                    largest = product;
                }
            }
        }
    }
    return largest;
}

console.log(palindromeProduct());