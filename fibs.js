// Using iteration, write a function fibs which takes a number 
// and returns an array containing that many numbers from the Fibonacci sequence.

function fibs(number) {
  let sequence = [0, 1];

  if (number === 0) {
    return [0];
  } else if (number === 1) {
    return sequence;
  }

  for (let i = 0; i < (number - 2); i++) {
    let current_sum = sequence[sequence.length -1] + sequence[sequence.length -2];
    sequence.push(current_sum);
  }

  return sequence;
}

console.log(fibs(8) + " -- I'm a iterative function!");

// Now write another function fibsRec which solves the same problem recursively.

function fibsRec(n, n2, times, sequence) {
  sequence = sequence || [0, 1];

  if (sequence.length == times) {
    return sequence;
  }

  let next_number = n + n2;
  sequence.push(next_number);

  return fibsRec(n2, next_number, times, sequence);
}

console.log(fibsRec(0, 1, 8) + " -- I'm a recursive function!");