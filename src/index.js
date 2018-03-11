module.exports = function getZerosCount(number, base) {
    let zeroes = 0
    let primeBase = getMaxPrime(base)
    while (number >= primeBase) {
        number = Math.floor(number / primeBase)
        zeroes += number
    }

    let primeBaseCount = 0
    while (base % primeBase === 0) {
        base = base / primeBase
        primeBaseCount++
    }

    return Math.floor(zeroes / primeBaseCount)
}

function getMaxPrime(number) {
    let maxPrime

    nextPrime:
        for (let i = 2; i <= number; i++) {
            for (let j = 2; j < i; j++) {
                if (i % j === 0) continue nextPrime
            }
            if (number % i === 0) maxPrime = i
        }

    return maxPrime
}
