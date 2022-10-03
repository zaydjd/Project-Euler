function Sum(max) {
    let array = [];
    for (let i = max-1; i > 0; i--) {
        if (i % 3 == 0 && i % 5 == 0) {
            array.push(i);
        } else if (i % 3 == 0) {
            array.push(i);
        } else if (i % 5 == 0) {
            array.push(i);
        }
    }

    let sum = 0;
    for (let j = 0; j < array.length; j++) {
        sum += array[j];
    }
    console.log(sum);
}

Sum(1000);