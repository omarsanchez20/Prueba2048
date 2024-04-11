localServer = 'http://localhost:55401/';

axa = localServer;

const registerUserByPost = axa + 'api/Users' // method POST
const getUserByGet = axa + 'api/Users/' // method GET
const loginUserByPost = axa + 'api/Users/login' // method POST

function saveUserID (id, value){
    return localStorage.setItem('id', value)
}

function getUserID (){
    return localStorage.getItem('id')
}