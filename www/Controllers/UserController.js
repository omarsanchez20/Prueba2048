function registerUser(registerData) {
    $.ajax({
        url: registerUserByPost,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(registerData), // Para convertir datos a JSON, con metodos GET no se usa
        success: function(response) {
            console.log('Registro success:', response);
            loadPartialView('login', document.querySelector('.init'), false)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error(textStatus, errorThrown);
        }
    });
}

function loginUser(loginData) {
    $.ajax({
        url: loginUserByPost,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(loginData), // Para convertir datos a JSON, con metodos GET no se usa
        success: function(response) {
            console.log('Login success:', response);
            loadPartialView('game', document.querySelector('.init'), false)

            saveUserID ("id", parseInt(response.value.UserID));
            getUserById(parseInt(response.value.UserID));
            console.log("User id: " + getUserID());
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error(textStatus, errorThrown);
        }
    });
}

function getUserById(id) {
    $.ajax({
        url: getUserByGet + id,
        method: 'GET',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            putUserData(response);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error(textStatus, errorThrown);
        }
    });
}

function putUserData(response) {
    $('#name-login').empty().text("Hola " + response.Username);
}
