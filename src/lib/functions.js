export function timeClock() {
    const now = new Date(); // Obtiene la fecha y hora actual
    const hours = now.getHours(); // Obtiene las horas
   let minutes = now.getMinutes(); // Obtiene los minutos


    // Añade ceros iniciales si los minutos o segundos son menos de 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Formatea la cadena de tiempo
    const timeString = hours + ':' + minutes;

    return timeString;
}
