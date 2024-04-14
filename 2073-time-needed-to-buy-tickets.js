/**
 * Dificulty: Easy
 * Topics: Array, Queue, Simulation
 */

const timeRequiredToBuy = (tickets, k) => {
    let queue = tickets.map((ticket, index) => ({ ticket, index }));

    let time = 0;

    while (queue.length > 0) {
        if (queue[0].ticket > 1) {
            queue[0].ticket--;
            queue.push(queue.shift());
        }
        else {
            if (queue[0].index === k && queue[0].ticket === 1) {
                time++;
                break;
            }

            queue.shift();
        }

        time++;
    }

    return time;
};
