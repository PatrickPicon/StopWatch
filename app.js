window.onload = function() {

	var decimos = 0;
	var segundos = 0;
	var minutos = 0;

	var adicionarDecimos = document.getElementById('decimos')
	var adicionarSegundos = document.getElementById('segundos')
	var botaoStart = document.getElementById('start')
	var botaoStop = document.getElementById('stop')
	var botaoReset = document.getElementById('reset')
	var cronometro = '';
		
	botaoStart.onclick = function() {
		clearInterval(cronometro)
		cronometro = setInterval(iniciarContador, 10);
	}
	
	botaoStop.onclick = function() {
		clearInterval(cronometro);
	}

	botaoReset.onclick = function() {
		decimos = 0;
		segundos = 0;
		adicionarDecimos.innerHTML = '0' + decimos;
		adicionarSegundos.innerHTML = '0' + segundos;

		if(minutos >= 1) {
			document.getElementById('Minutos').classList.add('hide')
			minutos = 0
		}
	}

	 function iniciarContador() {
		decimos++;

		if(decimos <= 9) {
			adicionarDecimos.innerHTML = '0' + decimos
		}

		if(decimos > 9) {
			adicionarDecimos.innerHTML = decimos
		}

		if(decimos > 99) {
			segundos++;
			adicionarSegundos.innerHTML = '0' + segundos
			decimos = 0;
			adicionarDecimos.innerHTML = '0' + decimos
		}

		if(segundos > 9) {
			adicionarSegundos.innerHTML = segundos
		}

		if(segundos == 60) {
			
			let span = document.createElement('span');
			document.getElementById('contador').append(span);
			span.id = 'Minutos';
			span.className = 'contador'

			minutos++;
			segundos = 0;
			adicionarSegundos.innerHTML = '0' + segundos

			if(minutos == 1) {
				document.getElementById('Minutos').innerHTML = `${minutos} minuto`
			} else {
				document.getElementById('Minutos').innerHTML = `${minutos} minutos`
			}
			
			
		}

	}

	function pararContador(botaoStop) {
		
	}

 	function resetarContador(botaoReset) {
		
	}
}


