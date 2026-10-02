// import * as readline from "readline/promises";
// import { stdin as input, stdout as output } from "process";

// async function main(): Promise<void> {
//   const rl = readline.createInterface({ input, output });

//   const n: number = Number(await rl.question("Nhập N: "));

//   let count: number = 0;

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       count++;
//     }
//   }

//   console.log(`Có ${count} số chia hết cho 3`);

//   rl.close();
// }

// main();

// Bonus

import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main(): Promise<void> {
  const rl = readline.createInterface({ input, output });

  const n: number = Number(await rl.question("Nhập N: "));

  let count: number = 0;
  let numbers: number[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      count++;
      numbers.push(i);
    }
  }

  console.log(`Các số chia hết cho 3: ${numbers.join(", ")}`);
  console.log(`Có ${count} số chia hết cho 3`);

  rl.close();
}

main();
