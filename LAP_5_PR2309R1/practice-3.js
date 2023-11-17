/**
 * Viết hàm isPrimeNumber() nhận vào một số nguyên và kiểm tra xem đó có phải là số nguyên tố hay không
 * Nếu có, trả về true. Ngược lại, trả về false.
 * 
 * Ví dụ: 
 * isPrimeNumber(4)
 * 
 * Output:
 * false
 *  
 * */ 

function isPrimeNumber(number) {
    // Biến cờ hiệu
    var result = true;

    if (number < 2){
        result = false;
    }
    else{
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                result = false;
            }
        }
    }

    return result;
}

console.log(isPrimeNumber(4));