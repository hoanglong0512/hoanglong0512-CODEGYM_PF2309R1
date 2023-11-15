/**
 * Bài 1:
    Viết hàm sumEven() nhận vào một số `n` và in ra tổng các số chẵn từ 2 đến n.
    Ví dụ:
    sumEven(10)

    Output:
    30
 */

function sumEven(n) {
   let total = 0;
   for (let i = 0; i <= n; i++) {
      if (i % 2 == 0) {
         total += i;
      }
   }
   console.log(total);
}

sumEven(10);