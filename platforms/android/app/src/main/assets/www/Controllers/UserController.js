function registerUser(registerData) {
    $.ajax({
        url: registerUserByPost,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(registerData), // Para convertir datos a JSON, con metodos GET no se usa
        success: function(response) {
            console.log('Registro success:', response);
            loadPartialView('game', document.querySelector('.init'), false)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error(textStatus, errorThrown);
        }
    });
}