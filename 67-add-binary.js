/**
 * Dificulty: Easy
 * Topics: Math, String, Bit Manipulation, Simulation
 */

const addBinary = (a, b) => {
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        a = a.padStart(b.length, '0');
        b = b.padStart(a.length, '0');
    }

    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};
