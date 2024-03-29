/**
 * Dificulty: Medium
 * Topics: Hash Table, Math, String
 */

const roman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
};

const calculateRoman = (unity, multiplier) => {
    const keys = [1, 4, 5, 9].map((key) => key * multiplier);

    if (unity < 4) {
        unity = roman[keys[0]].repeat(unity);
    }
    else if (unity === 4) {
        unity = roman[keys[1]];
    }
    else if (unity === 9) {
        unity = roman[keys[3]];
    }
    else {
        unity = roman[keys[2]] + roman[keys[0]].repeat(unity - 5);
    }

    return unity;
}

const intToRoman = (num) => {
    let thousands = Math.floor(num / 1000);
    let hundreds = Math.floor((num % 1000) / 100);
    let tens = Math.floor((num % 100) / 10);
    let ones = num % 10;

    console.log(thousands, hundreds, tens, ones);

    ones = calculateRoman(ones, 1);
    tens = calculateRoman(tens, 10);
    hundreds = calculateRoman(hundreds, 100);
    thousands = calculateRoman(thousands, 1000);

    return `${thousands}${hundreds}${tens}${ones}`;
};
