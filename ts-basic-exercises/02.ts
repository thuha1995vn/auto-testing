import * as readline from "readline/promises"; 
import { stdin as input, stdout as output } from "process"; 

  

async function main(): Promise<void> { 

  const rl = readline.createInterface({ input, output }); 

  const age: String = await rl.question("Nhập số: "); 


  // TODO: xử lý logic tại đây 
  console.log("my input age = ", age)

  // convert from String to Number
  const num = Number(age)


  if (num >= 18) {
  console.log("Bạn đủ tuổi đăng ký");
  } else {
  console.log("Bạn chưa đủ tuổi đăng ký");
  }
  
  rl.close(); 

} 

  

main(); 