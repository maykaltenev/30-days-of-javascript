
alert('Open the console and check if the countries has been loaded')
const divContainer = document.querySelector('.wrapper');
let div;
for (let i = 0; i <= 101; i++) {
    div = document.createElement('div');
    console.log(div)
    if (isPrime(i)) {
        div.classList.add('red')
    } else if (i % 2 === 0) {
        div.classList.add('green')
    } else if (i % 1 === 0) {
        div.classList.add('yellow')
    }
    div.innerText = i;
    divContainer.appendChild(div)
}
function isPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}