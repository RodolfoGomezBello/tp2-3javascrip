document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { date: "2023-08-13", name: "Elecciones PASO" },
        { date: "2023-08-17", name: "Fallecimiento del General San Martín" },
        { date: "2023-08-21", name: "Feriado" },
        { date: "2023-08-22", name: "Mi cumple y el de mi hijo" }
    ];

    let currentIndex = 0; // Índice del evento actual
    const calendarContainer = document.getElementById("calendar-container");
    const eventList = document.getElementById("event-list");

    function displayEventsForDate(date) {
        const eventsForDate = events.filter(event => event.date === date);

        if (eventsForDate.length > 0) {
            eventList.innerHTML = `<h2>Eventos para el ${date}:</h2>`;
            const ul = document.createElement("ul");
            ul.className = "event-list";
            eventsForDate.forEach(event => {
                const li = document.createElement("li");
                li.className = "event";
                li.textContent = event.name;
                ul.appendChild(li);
            });
            eventList.appendChild(ul);
        } else {
            eventList.innerHTML = `<p>No hay eventos programados para el ${date}.</p>`;
        }
    }

    function displayEventAtIndex(index) {
        if (index >= 0 && index < events.length) {
            currentIndex = index;
            const event = events[currentIndex];
            displayEventsForDate(event.date);
        }
    }

    function displayPreviousEvent() {
        displayEventAtIndex(currentIndex - 1);
    }

    function displayNextEvent() {
        displayEventAtIndex(currentIndex + 1);
    }

    // Mostrar eventos para la fecha del primer evento en la lista
    displayEventAtIndex(0);

    // Agregar manejadores de eventos a los botones de navegación
    const prevEventButton = document.getElementById("prev-event");
    prevEventButton.addEventListener("click", displayPreviousEvent);

    const nextEventButton = document.getElementById("next-event");
    nextEventButton.addEventListener("click", displayNextEvent);
});
