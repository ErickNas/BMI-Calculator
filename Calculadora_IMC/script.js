function calcularImc(){
	var campo1 = document.getElementById('alturaUsuario')
	var campo2 = document.getElementById('pesoUsuario')
	var exibirImc = document.getElementById('imc')
	var exibirMsg = document.getElementById('msg')
	
	var altura = Number(campo1.value)
	var peso = Number(campo2.value)
	var imcUsuario = peso / (Math.pow(altura, 2))
	console.log(imcUsuario)
	
	if(imcUsuario === 0 || imcUsuario === undefined || imcUsuario === Infinity || isNaN(imcUsuario)) {
		alert('Entre com valores validos para que possamos calcular seu IMC!')
	} else {

		exibirImc.innerHTML = ` Seu IMC é ${imcUsuario.toFixed(2)}`
		
		if(imcUsuario < 18.5) {
			exibirMsg.innerHTML = 'Você está abaixo do Peso'
		} else if (imcUsuario > 18.5 && imcUsuario < 24.9) {
			exibirMsg.innerHTML ='Você está com Peso Normal'
		} else if (imcUsuario > 25 && imcUsuario < 29.9) {
			exibirMsg.innerHTML = 'Você está com Sobrepeso'
		} else if (imcUsuario > 30 && imcUsuario < 34.9) {
			exibirMsg.innerHTML = 'Você está com Obesidade Grau I'
		} else if (imcUsuario > 35 && imcUsuario < 39.9) {
			exibirMsg.innerHTML = 'Você está com Obesidade Grau II'
		} else if (imcUsuario > 40) {
			exibirMsg.innerHTML ='Você está com Obesidade Grau III'
		}
	}
	
}