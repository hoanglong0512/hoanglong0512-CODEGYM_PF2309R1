// Bai 1
console.log('<----------- Bài 1 ------------>')
let buttonBt1 = document.getElementById('button_bt1');
buttonBt1.addEventListener('click', () => {
    let numberBt1 = parseFloat(document.getElementById('number_bt1').value);

    for (let index = 0; index <= numberBt1; index++) {
        if (index % 2 == 0){
            console.log(index);
        }
    }
});
console.log('<----------- Bài 1 ------------>')

// Bai 2
console.log('<----------- Bài 2 ------------>')
let buttonBt2 = document.getElementById('button_bt2');
buttonBt2.addEventListener('click', () => {
    let numberBt2 = parseFloat(document.getElementById('number_bt2').value);
    let result = 1;

    for (let i = numberBt2; i >= 1; i--) {
      result *= i;
    }

    console.log(result);
});
console.log('<----------- Bài 2 ------------>')

// Bai 3
console.log('<----------- Bài 3 ------------>')
let buttonBt3 = document.getElementById('button_bt3');
buttonBt3.addEventListener('click', () => {
    let number1Bt3 = parseFloat(document.getElementById('number_1_bt3').value);
    let number2Bt3 = parseFloat(document.getElementById('number_2_bt3').value);

    for (let i = 0; i <= 9; i++) {
      console.log(number1Bt3 + number2Bt3 * i);
    }
});
console.log('<----------- Bài 3 ------------>')

// Bai 4
console.log('<----------- Bài 4 ------------>')
let buttonBt4 = document.getElementById('button_bt4');
buttonBt4.addEventListener('click', () => {
    let numberBt4 = parseFloat(document.getElementById('number_bt4').value);

    for (let i = 1; i <= 10; i++) {
      console.log(numberBt4 + ' x ' +i+ ' = ' + numberBt4 * i + '\n');
    }
});
console.log('<----------- Bài 4 ------------>')