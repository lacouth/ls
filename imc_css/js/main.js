let button = document.querySelector('#calc-imc-btn');

function calcular_imc(altura, peso, sexo) {
    const imc = peso / altura ** 2;
    console.log(altura, peso)

    if (sexo == 'feminino') {
        if (imc < 19.1) {
            return 'Abaixo do Peso'
        } else if (imc < 25.8) {
            return 'Peso Normal'
        } else if (imc < 27.3) {
            return 'Marginalmente Acima do Peso'
        } else if (imc < 32.3) {
            return 'Acima do Peso Ideal'
        } else {
            return 'Obeso'
        }
    } else {
        if (imc < 20.7) {
            return 'Abaixo do Peso'
        } else if (imc < 26.4) {
            return 'Peso Normal'
        } else if (imc < 27.8) {
            return 'Marginalmente Acima do Peso'
        } else if (imc < 31.1) {
            return 'Acima do Peso Ideal'
        } else {
            return 'Obeso'
        }
    }
}

function atualiza_html(){
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    let sexo = document.querySelector('input:checked').value;
    let imc = document.querySelector('#imc');

    let resultado = calcular_imc(altura, peso, sexo);
    imc.value = resultado;

    if(resultado == 'Abaixo do Peso'){
        imc.setAttribute('class','form-control form-control-lg border border-warning bg-warning text-white')
    }else if(resultado == 'Peso Normal'){
        imc.setAttribute('class','form-control form-control-lg border border-sucess bg-success text-white')
    }else if(resultado == 'Marginalmente Acima do Peso'){
        imc.setAttribute('class','form-control form-control-lg border border-warning bg-warning text-white')
    }else if(resultado == 'Acima do Peso Ideal'){
        imc.setAttribute('class','form-control form-control-lg border border-warning bg-warning text-white')
    }else{
        imc.setAttribute('class','form-control form-control-lg border border-danger bg-danger text-white')
    }

    
    

}

button.addEventListener('click', function () {
    atualiza_html()
    
})

document.addEventListener('keyup', function (event) {
    if (event.key == 'Escape') {
        document.querySelector('#altura').value = '';
        document.querySelector('#peso').value = '';
        document.querySelector('#imc').value = '';

    } else if (event.key == 'Enter') {
        atualiza_html();
    }

})