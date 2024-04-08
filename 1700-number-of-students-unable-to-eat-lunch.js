/**
 * Dificulty: Easy
 * Topics: Array, Stack, Queue, Simulation
 */

const countStudents = (students, sandwiches) => {
    while (sandwiches.length > 0) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        }
        else {
            if (students.includes(sandwiches[0])) {
                students.push(students.shift());
            }
            else {
                return students.length;
            }
        }
    }

    return 0;
};
