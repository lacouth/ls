let button = document.querySelector('button');
button.addEventListener('click',function(){
    let valor = document.querySelector('input').value
    let div = document.querySelector('#lista')
    div.insertAdjacentHTML('beforeend','<ul></ul>')
    for(let i=0;i<valor;i++){
        document.querySelector('ul')
                .insertAdjacentHTML('beforeend',`<li> Item ${i+1}</li>`)
    }

})