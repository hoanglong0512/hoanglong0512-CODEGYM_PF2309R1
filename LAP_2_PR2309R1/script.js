// Bai 1
console.log('<----------- Bài 1 ------------>')
let i = 1500;
while (i <= 2700) {
    if (i % 5 === 0 || i % 7 === 0){
        console.log(i);
    }
    i++;
}
console.log('<----------- Bài 1 ------------>')

// Bai 2
console.log('<----------- Bài 2 ------------>')

let buttonBt2 = document.getElementById('button_bt2');
buttonBt2.addEventListener('click', () => {
    let i = 0;
    let numberBt2 = parseFloat(document.getElementById('number_bt2').value);

    while (i <= numberBt2) {
        if (i % 3 === 0 && i % 7 === 0) {
            console.log('javascript');
        } else if (i % 3 === 0) {
            console.log('java');
        } else if (i % 7 === 0) {
            console.log('script');
        } else {
            console.log(i);
        }
        i++;
    }
});
console.log('<----------- Bài 2 ------------>')

// Bai 3
console.log('<----------- Bài 3 ------------>')

let buttonBt3 = document.getElementById('button_bt3');
buttonBt3.addEventListener('click', () => {
    let resultBt3 = document.getElementById('result_bt3')
    let numberBt3 = parseFloat(document.getElementById('number_bt3').value);
    
    output = "";
    for(let i = numberBt3; i >= 1; i--){
        output += "<br>";
        for(let j = 1; j <= i; j++){
            output += "*";
        }
    }

    resultBt3.innerHTML = output;
});
console.log('<----------- Bài 3 ------------>')