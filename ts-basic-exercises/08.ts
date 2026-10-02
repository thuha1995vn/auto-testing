import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main(): Promise<void> {
  const rl = readline.createInterface({ input, output });

  const n: number = Number(await rl.question("Nhập N: "));

  let sum: number = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  console.log(`Tổng = ${sum}`);

  rl.close();
}

main();

// bonus

// import * as readline from "readline/promises";
// import { stdin as input, stdout as output } from "process";

// async function main(): Promise<void> {
//   const rl = readline.createInterface({ input, output });

//   const n: number = Number(await rl.question("Nhập N: "));

//   if (n <= 0) {
//     console.log("N phải lớn hơn 0");
//   } else {
//     let sum: number = 0;

//     for (let i = 1; i <= n; i++) {
//       sum = sum + i;
//     }

//     console.log(`Tổng = ${sum}`);
//   }

//   rl.close();
// }

// main();
