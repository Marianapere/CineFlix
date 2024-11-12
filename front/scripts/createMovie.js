document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('movieForm');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        
        // Limpiamos el mensaje de error al principio
        errorMessage.textContent = '';

        const titleInput = document.getElementById('title');
        titleInput.value = titleInput.value.toUpperCase(); // Convierte el título a mayúsculas

        const yearInput = document.getElementById('year');
        const currentYear = new Date().getFullYear();
        if (yearInput.value < 1900 || yearInput.value > currentYear) {
            errorMessage.textContent = 'El año debe estar entre 1900 y el año actual.';
            return;
        }

        const rateInput = document.getElementById('rate');
        if (rateInput.value < 0 || rateInput.value > 10) {
            errorMessage.textContent = 'La tasa debe estar entre 0 y 10.';
            return;
        }

        const posterInput = document.getElementById('poster');
        const posterValue = posterInput.value.trim().toLowerCase();
        if (!posterValue.startsWith('https://') && !posterValue.startsWith('http://')) {
            errorMessage.textContent = 'La URL del póster debe comenzar con "https://" o "http://".';
            return;
        }

        // Si todas las validaciones son exitosas, podemos mostrar un mensaje de éxito
        const successMessage = document.createElement('div');
        successMessage.textContent = 'La película se ha creado correctamente.';
        successMessage.style.color = 'green';
        form.insertAdjacentElement('afterend', successMessage);

        // Opcional: Puedes restablecer el formulario después de un cierto tiempo
        setTimeout(function() {
            form.reset();
            successMessage.remove();
        }, 3000); // Elimina el mensaje de éxito después de 3 segundos
    });
});
