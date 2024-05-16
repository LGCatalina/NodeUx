function startTimer() {
    // Calcula el tiempo actual en milisegundos
    var currentTime = new Date().getTime();

    // Calcula el tiempo para 24 horas en milisegundos
    var twentyFourHoursLater = currentTime + (24 * 60 * 60 * 1000);

    // Actualiza el temporizador cada segundo
    var x = setInterval(function() {
        // Obtiene la fecha y hora actual
        var now = new Date().getTime();
        
        // Calcula la distancia entre la hora actual y el tiempo límite
        var distance = twentyFourHoursLater - now;
        
        // Calcula las horas, minutos y segundos restantes
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Muestra el temporizador en el formato HH:MM:SS
        document.getElementById("timer").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";
        
        // Si el temporizador llega a cero, muestra un mensaje
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRADO";
        }
    }, 1000);
}

// Llama a la función para iniciar el temporizador al cargar la página
startTimer();