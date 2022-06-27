// console.log(countries)


let country = document.getElementsByClassName("countries-wrapper");


for (let i = 0; i <= countries.length; i++) {
    console.log(countries[i])
    div = document.createElement('div');
    console.log(div)
    div.innerText = countries[i];
    country.appendChild(div)
}