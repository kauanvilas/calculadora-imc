const resultado = document.querySelector('#res');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const calcular = () => {
    if (altura.value !== '' && peso.value !== ''){
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
        let classificacao = '';

        if (imc < 18.5) {
            classificacao = 'abaixo do peso'
        } else if (imc < 25) {
            classificacao = 'no peso normal'
        } else if (imc < 30) {
            classificacao = 'acima do peso'
        } else if (imc < 35) {
            classificacao = 'com obesidade grau I'
        } else if (imc < 40) {
            classificacao = 'com obesidade grau II'
        } else {
            classificacao = 'com obesidade grau III'
        }
        
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `O seu IMC é ${imc} e você está ${classificacao}.`
    } else {
        resultado.style.textAlign = 'center'
        resultado.innerHTML = 'Preencha os campos.'
    }
}