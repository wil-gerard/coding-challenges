// fizzbuzz

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // Is a multiple of 3 and 5?
        if (i % 15 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            // Is a multiple of 3?
            console.log('fizz')
        } else if (i % 5 === 0) {
            // Is a multiple of 5?
            console.log('buzz')
        } else {
            // Is neither of the above?
            console.log(i)
        }
    }
}
