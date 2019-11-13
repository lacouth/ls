const main = document.querySelector('#main')

let acumulador = ''
for(let i = 0; i < 360; i++){
    acumulador+= `<div style = " width : 8%; background: hsl(${i},50%,50%); margin-bottom: 0.2rem;"> ${i} </div>`
}

main.innerHTML = acumulador