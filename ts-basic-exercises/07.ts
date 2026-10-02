import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

async function main(): Promise<void> {
  const rl = readline.createInterface({ input, output });

  const statusCode: string = await rl.question("Nhập status code: ");

  const code: number = Number(statusCode);

  switch (code) {
    case 200:
      console.log("200 - Thành công");
      break;

    case 201:
      console.log("201 - Tạo mới thành công");
      break;

    case 400:
      console.log("400 - Dữ liệu gửi lên không hợp lệ");
      break;

    case 401:
    case 403:
      console.log(`${code} - Không có quyền truy cập`);
      break;

    case 404:
      console.log("404 - Không tìm thấy tài nguyên");
      break;

    case 500:
      console.log("500 - Lỗi phía server");
      break;

    default:
      console.log(`${code} - Status code chưa được phân loại`);
      break;
  }

  rl.close();
}

main();
