import * as readline from "readline/promises"; 

import { stdin as input, stdout as output } from "process"; 

  

async function main(): Promise<void> { 

  const rl = readline.createInterface({ input, output }); 

  const raw: string = await rl.question("Nhập số: "); 

  // TODO: xử lý logic tại đây 

  rl.close(); 

} 

  

main(); 