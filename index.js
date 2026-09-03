import { isLessThan } from './isLessThan.js';

process.stdin.on('data', data => {
  const tokens = data.toString().split("\n", 2);
  
  if (tokens.length != 2) {
    console.error("Invalid test input. Two numbers are expected.");
    process.exit(1);
  }
  
  const a = Number(tokens[0]);
  const b = Number(tokens[1]);
  
  if (isNaN(a) || isNaN(b)) {
    console.error("Invalid test input. Two numbers are expected.");
    process.exit(1);
  }
  
  console.log(isLessThan(a, b));
  process.exit();
});
import { isLessThan } from './isLessThan.js';

process.stdin.on('data', data => {
  const tokens = data.toString().split("\n", 2);
  
  if (tokens.length != 2) {
    console.error("Invalid test input. Two numbers are expected.");
    process.exit(1);
  }
  
  const a = Number(tokens[0]);
  const b = Number(tokens[1]);
  
  if (isNaN(a) || isNaN(b)) {
    console.error("Invalid test input. Two numbers are expected.");
    process.exit(1);
  }
  
  console.log(isLessThan(a, b));
  process.exit();
});
